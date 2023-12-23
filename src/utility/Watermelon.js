import { useCallback, useEffect } from "react";
import * as THREE from "three";

let renderer;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 35;

const geometry = new THREE.SphereGeometry(30, 5, 8, 0, 1, 0);
const lines = new THREE.LineSegments(
  new THREE.EdgesGeometry(geometry),
  new THREE.LineBasicMaterial({ color: 0x60a3a6, opacity: 0.3, transparent: true })
);
scene.add(lines);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xffffff);
renderer.setAnimationLoop(() => {
  if (!renderer.domElement.parentNode) return;

  lines.rotation.x += 0.004;
  lines.rotation.y += 0.004;
  renderer.render(scene, camera);
});

const resize = () => {
  const w = window.innerWidth,
    h = window.innerHeight;

  const r = Math.min(w, h) / 200 + 7;
  const newGeometry = new THREE.SphereGeometry(r, 5, 8, 0, 1, 0);

  lines.geometry.dispose();
  lines.geometry = new THREE.EdgesGeometry(newGeometry);
  lines.position.set(w / 23 - 24, -h / 30 + 5, 0);

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);
resize();

const Watermelon = () => {
  const containerRef = useCallback((container) => {
    if (container) {
      container.appendChild(renderer.domElement);
    } else {
      renderer.domElement.remove();
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", resize);
      if (renderer) {
        renderer.domElement.remove();
        renderer.dispose();
      }
    };
  }, []);

  return <div className="watermelon" ref={containerRef}></div>;
};

export default Watermelon;
