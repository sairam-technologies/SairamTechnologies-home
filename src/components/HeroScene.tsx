"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const disposables: Array<{ dispose: () => void }> = [];
    const track = <T extends { dispose: () => void }>(item: T) => {
      disposables.push(item);
      return item;
    };

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a1630, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const fog = new THREE.FogExp2(0x0a1630, 0.004);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 220);
    camera.position.set(0, 0.2, 8.2);

    const jupiterTex = track(makeJupiterTexture());
    const ringTex = track(makeRingTexture());
    const glowTex = track(makeGlowTexture());

    const stars = makeStarfield(5200);
    track(stars.geometry);
    track(stars.material);
    scene.add(stars);

    const bright = makeStarfield(280, { minR: 32, maxR: 68, size: 0.34, bright: true });
    track(bright.geometry);
    track(bright.material);
    scene.add(bright);

    for (const tint of [0x6a4ad8, 0xd46a3a, 0x2a6ad8, 0xd4a04a]) {
      const nebula = makeNebula(glowTex, tint);
      track(nebula.material);
      scene.add(nebula);
    }

    const system = new THREE.Group();
    system.position.set(2.05, 0.08, 0);
    scene.add(system);

    const jupiter = new THREE.Mesh(
      track(new THREE.SphereGeometry(1.62, 96, 72)),
      track(
        new THREE.MeshStandardMaterial({
          map: jupiterTex,
          roughness: 0.52,
          metalness: 0.08,
          bumpMap: jupiterTex,
          bumpScale: 0.035,
          emissive: 0xc48a48,
          emissiveIntensity: 0.28,
          emissiveMap: jupiterTex,
        }),
      ),
    );
    jupiter.rotation.z = 0.05;
    system.add(jupiter);

    const atmosphere = new THREE.Mesh(
      track(new THREE.SphereGeometry(1.72, 64, 48)),
      track(
        new THREE.MeshBasicMaterial({
          color: 0xffc878,
          transparent: true,
          opacity: 0.2,
          side: THREE.BackSide,
          depthWrite: false,
        }),
      ),
    );
    system.add(atmosphere);

    const rings = new THREE.Mesh(
      track(new THREE.RingGeometry(1.92, 3.82, 192, 12)),
      track(
        new THREE.MeshBasicMaterial({
          map: ringTex,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
          toneMapped: false,
        }),
      ),
    );
    rings.rotation.x = Math.PI / 2.12;
    rings.rotation.y = 0.2;
    system.add(rings);

    const moon = new THREE.Mesh(
      track(new THREE.SphereGeometry(0.16, 24, 18)),
      track(
        new THREE.MeshStandardMaterial({
          color: 0xd9b07a,
          roughness: 0.7,
          emissive: 0x3d2a12,
          emissiveIntensity: 0.2,
        }),
      ),
    );
    system.add(moon);

    scene.add(new THREE.AmbientLight(0x8a9bb8, 1.15));
    scene.add(new THREE.HemisphereLight(0xd8e4ff, 0x2a1a10, 0.85));
    const sun = new THREE.DirectionalLight(0xfff4dc, 3.4);
    sun.position.set(6, 3.2, 5.5);
    scene.add(sun);
    const bounce = new THREE.DirectionalLight(0x8ab0ff, 0.55);
    bounce.position.set(-6, -1, -3);
    scene.add(bounce);

    const pointer = { x: 0, y: 0 };
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);

    const size = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (w < 8 || h < 8) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      const compact = w < 900;
      system.position.set(compact ? 0 : 2.05, compact ? 0.45 : 0.08, 0);
    };
    size();
    const observer = new ResizeObserver(size);
    observer.observe(host);

    const lookX = () => (host.clientWidth < 900 ? 0 : 1.35);
    let frame = 0;

    const renderFrame = (t: number) => {
      jupiter.rotation.y = t * 0.12;
      atmosphere.rotation.y = t * 0.1;
      rings.rotation.z = t * 0.035;
      moon.position.set(Math.cos(t * 0.28) * 2.85, 0.35 + Math.sin(t * 0.28) * 0.22, Math.sin(t * 0.28) * 2.85);
      stars.rotation.y = t * 0.006;
      bright.rotation.y = t * 0.008;
      system.rotation.y += (pointer.x * 0.22 - system.rotation.y) * 0.03;
      system.rotation.x += (pointer.y * 0.1 - system.rotation.x) * 0.03;
      camera.position.x += (pointer.x * 0.2 - camera.position.x) * 0.025;
      camera.lookAt(lookX(), 0.04, 0);
      renderer.render(scene, camera);
    };

    if (reduced) {
      renderFrame(0.8);
    } else {
      const tick = () => {
        frame = requestAnimationFrame(tick);
        renderFrame(performance.now() * 0.001);
      };
      tick();
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      renderer.dispose();
      renderer.domElement.remove();
      disposables.forEach((item) => item.dispose());
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 z-0 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full"
      aria-hidden="true"
    />
  );
}

function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function noise(x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  return (
    hash(x0, y0) * (1 - u) * (1 - v) +
    hash(x0 + 1, y0) * u * (1 - v) +
    hash(x0, y0 + 1) * (1 - u) * v +
    hash(x0 + 1, y0 + 1) * u * v
  );
}

function fbm(x: number, y: number) {
  let value = 0;
  let amp = 0.5;
  for (let i = 0; i < 5; i += 1) {
    value += amp * noise(x, y);
    x *= 2.05;
    y *= 2.05;
    amp *= 0.52;
  }
  return value;
}

function mix(a: number[], b: number[], t: number) {
  const k = Math.min(1, Math.max(0, t));
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}

function makeJupiterTexture() {
  const w = 1024;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const cream = [255, 232, 196];
  const tan = [236, 178, 112];
  const rust = [210, 108, 62];
  const sand = [255, 220, 168];
  const ochre = [230, 148, 78];
  const image = ctx.createImageData(w, h);

  for (let y = 0; y < h; y += 1) {
    const v = y / h;
    const lat = (v - 0.5) * 2;
    const band = Math.sin(v * Math.PI * 16 + fbm(v * 8, 2) * 1.6);
    const bandMix = band * 0.5 + 0.5;
    let base = mix(cream, tan, bandMix);
    if (Math.abs(lat) > 0.72) base = mix(base, [214, 188, 162], (Math.abs(lat) - 0.72) / 0.28);

    for (let x = 0; x < w; x += 1) {
      const u = x / w;
      const swirl = fbm(u * 18 + band * 2, v * 42);
      const streak = fbm(u * 6, v * 80 + swirl * 4);
      let color = mix(base, ochre, streak * 0.55);
      color = mix(color, rust, Math.max(0, swirl - 0.62) * 1.4);
      color = mix(color, sand, Math.max(0, 0.38 - swirl) * 0.7);

      const dx = (u - 0.3) * 2.1;
      const dy = (v - 0.62) * 4.4;
      const spot = 1 - Math.min(1, dx * dx + dy * dy);
      if (spot > 0) {
        const core = mix([232, 86, 58], [255, 168, 102], 1 - spot);
        color = mix(color, core, spot * spot * 0.95);
      }

      const i = (y * w + x) * 4;
      image.data[i] = color[0];
      image.data[i + 1] = color[1];
      image.data[i + 2] = color[2];
      image.data[i + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function makeRingTexture() {
  const w = 1024;
  const h = 256;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);
  const image = ctx.createImageData(w, h);

  const stops: Array<[number, number[]]> = [
    [0, [255, 248, 232]],
    [0.12, [120, 220, 255]],
    [0.22, [255, 214, 92]],
    [0.34, [255, 140, 92]],
    [0.5, [255, 236, 176]],
    [0.62, [255, 118, 168]],
    [0.76, [168, 236, 170]],
    [0.88, [255, 188, 72]],
    [1, [186, 214, 255]],
  ];

  const sample = (t: number) => {
    for (let i = 0; i < stops.length - 1; i += 1) {
      const [a, ca] = stops[i];
      const [b, cb] = stops[i + 1];
      if (t >= a && t <= b) return mix(ca, cb, (t - a) / (b - a));
    }
    return stops[stops.length - 1][1];
  };

  for (let y = 0; y < h; y += 1) {
    const t = y / (h - 1);
    const cassini = t > 0.4 && t < 0.46 ? 0.06 : 1;
    const gap2 = t > 0.68 && t < 0.71 ? 0.1 : 1;
    const stripe = 0.55 + 0.45 * Math.abs(Math.sin(t * Math.PI * 36));
    const color = sample(t);
    for (let x = 0; x < w; x += 1) {
      const dust = 0.78 + 0.22 * hash(x * 0.2, y * 0.5);
      const edge = t < 0.03 || t > 0.97 ? 0.2 : 1;
      const alpha = cassini * gap2 * stripe * dust * edge * 0.98;
      const i = (y * w + x) * 4;
      image.data[i] = color[0];
      image.data[i + 1] = color[1];
      image.data[i + 2] = color[2];
      image.data[i + 3] = Math.floor(alpha * 255);
    }
  }

  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

function makeGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);
  const g = ctx.createRadialGradient(128, 128, 8, 128, 128, 128);
  g.addColorStop(0, "rgba(255,255,255,0.55)");
  g.addColorStop(0.35, "rgba(255,255,255,0.16)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function makeStarfield(
  count: number,
  opts?: { minR?: number; maxR?: number; size?: number; bright?: boolean },
) {
  const minR = opts?.minR ?? 28;
  const maxR = opts?.maxR ?? 90;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    [1, 1, 1],
    [0.75, 0.84, 1],
    [1, 0.93, 0.78],
    [1, 0.82, 0.62],
    [0.82, 0.9, 1],
  ];

  for (let i = 0; i < count; i += 1) {
    const r = minR + Math.random() * (maxR - minR);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    const c = palette[i % palette.length];
    const shade = opts?.bright ? 1 : 0.72 + Math.random() * 0.28;
    colors[i * 3] = c[0] * shade;
    colors[i * 3 + 1] = c[1] * shade;
    colors[i * 3 + 2] = c[2] * shade;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: opts?.size ?? 0.085,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    sizeAttenuation: true,
  });
  return new THREE.Points(geometry, material);
}

function makeNebula(map: THREE.Texture, color: number) {
  const mat = new THREE.SpriteMaterial({
    map,
    color,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.position.set((Math.random() - 0.35) * 22, (Math.random() - 0.4) * 10, -18 - Math.random() * 16);
  sprite.scale.setScalar(10 + Math.random() * 14);
  return sprite;
}
