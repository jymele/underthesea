import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FishModel } from "../models/FishModel";

interface Props {
  radius: number;
  speed: number;
  yPos?: number;
}

export default function CirclingFish(props: Props) {
  const fishRef = useRef<THREE.Group>(null);
  const { radius, speed, yPos } = props;

  useFrame(({ clock }) => {
    if (fishRef.current) {
      // move the fish in a circle with radius 1
      const x = Math.cos(clock.getElapsedTime() * speed) * radius; // calculate x position
      const z = Math.sin(clock.getElapsedTime() * speed) * radius; // calculate y position

      fishRef.current.position.x = x; // set x position of the fish
      fishRef.current.position.z = z; // set y position of the fish
      fishRef.current.rotation.y = -clock.getElapsedTime() * speed; // rotate the fish
    }
  });

  return (
    <group ref={fishRef} position-y={yPos ? yPos : 2}>
      <FishModel />
    </group>
  );
}
