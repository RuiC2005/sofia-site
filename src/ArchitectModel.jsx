import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function HeartExtrudeGeometry({ depth = 0.35 }) {
  // A clean heart outline, then extrude it into 3D.
  const shape = useMemo(() => {
    const s = new THREE.Shape();

    // Heart curve (simple + smooth)
    s.moveTo(0, 0.35);
    s.bezierCurveTo(0, 0.62, -0.55, 0.62, -0.55, 0.18);
    s.bezierCurveTo(-0.55, -0.22, 0, -0.32, 0, -0.62);
    s.bezierCurveTo(0, -0.32, 0.55, -0.22, 0.55, 0.18);
    s.bezierCurveTo(0.55, 0.62, 0, 0.62, 0, 0.35);

    return s;
  }, []);

  const extrudeSettings = useMemo(
    () => ({
      depth,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 8,
      steps: 1,
    }),
    [depth]
  );

  return <extrudeGeometry args={[shape, extrudeSettings]} />;
}

function HeartPart({ name, position, rotation = [0, 0, 0], scale = 1, color, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={hovered ? scale * 1.08 : scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(name);
      }}
      castShadow
      receiveShadow
    >
      <HeartExtrudeGeometry depth={0.35} />
      <meshStandardMaterial
        color={hovered ? "#fecaca" : color}
        roughness={0.55}
        metalness={0.05}
      />
    </mesh>
  );
}

function HeartsBuilding({ onSelect }) {
  // “Architectural” placement: hearts as sculptural masses
  const parts = useMemo(
  () => [
    // Center / base (optional: keep as a “foundation” slab-heart)
    {
      name: "Foundation",
      position: [0, 1, 0],
      rotation: [0.05, 0.0, 0],
      scale: 2.2,
      color: "#e5e7eb",
    },

    // Arch hearts (left → right)
    {
      name: "Light",
      position: [-1.9, 0.2, 0.6],
      rotation: [0.1, 0.55, 0],
      scale: 1.05,
      color: "#f3f4f6",
    },
    {
      name: "Structure",
      position: [0.0, 3.0, 0],
      rotation: [0.05, 0.0, 0],
      scale: 1.2,
      color: "#d4d4d8",
    },
    {
      name: "Details",
      position: [1.9, 0.2, 0.6],
      rotation: [0.1, -0.55, 0],
      scale: 1.05,
      color: "#e4e4e7",
    },
  ],
  []
);

  return (
    <group>
      {parts.map((p) => (
        <HeartPart key={p.name} {...p} onSelect={onSelect} />
      ))}
    </group>
  );
}

export default function ArchitectModel({ onPick }) {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="pointer-events-none absolute left-4 top-4 z-10">
        <div className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs text-zinc-700 backdrop-blur">
          Drag to rotate • Scroll to zoom • Click a heart
        </div>
      </div>

      <Canvas shadows camera={{ position: [4.2, 3.2, 4.2], fov: 45 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 6, 6]} intensity={0.9} castShadow />
        <directionalLight position={[-6, 3, -4]} intensity={0.35} />

        <Environment preset="city" />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#fafafa" roughness={1} />
        </mesh>

        <HeartsBuilding onSelect={onPick} />

        <OrbitControls
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            minDistance={3.5}
            maxDistance={13.5}
        />
      </Canvas>
    </div>
  );
}
