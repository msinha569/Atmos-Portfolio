import { useState } from "react";
import { Text, Image } from "@react-three/drei";

export const TextSection = ({ title, subtitle, link, web, imageUrl, ...props }) => {
  const [hovered, setHovered] = useState(false);

  const handleGroupClick = () => {
    window.open(web, '_blank');
  };
  
  const scale = imageUrl === '/images/profilepicture.jpg' ? [2.2,2.5,1] : [4.8,2.5,2]
  const position = imageUrl === '/images/profilepicture.jpg' ? [-0.5, -0.5, 0] : [-1.5, -0.5, 0]

  return (
    <group
      {...props}
      onClick={handleGroupClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      cursor={hovered ? "pointer" : "auto"}
      
    >
      {/* Image on the left */}
      {imageUrl && <group position={position}>
        <Image
          url={imageUrl}
          scale={scale}
          
        />
      </group>}

      {/* Text on the right */}
      <group position={[1, 0, 0]}>
        {!!title && (
          <Text
            color="black"
            anchorX="middle"
            anchorY="bottom"
            fontSize={0.7}
            maxWidth={8}
            lineHeight={1.1}
            font="./fonts/DMSerifDisplay-Regular.ttf"
          >
            {title}
          </Text>
        )}

        <Text
          color="white"
          anchorX="left"
          anchorY="top"
          
          fontSize={0.38}
          maxWidth={6}
          font="./fonts/Inter-Regular.ttf"
        >
          {subtitle}
        </Text>
        <Text
          color="white"
          anchorX="left"
          anchorY="top"
          position={[0,-1.3,1]}
          fontSize={0.18}
          maxWidth={6}
          font="./fonts/Inter-Regular.ttf"
        >
          {link}
        </Text>
      </group>
    </group>
  );
};
