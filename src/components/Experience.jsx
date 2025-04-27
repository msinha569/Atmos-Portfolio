import { Float, Line, OrbitControls, PerspectiveCamera, Text, useScroll } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'
import Background from './Background'
import { Airplane } from './Airplane'
import { Cloud } from './Cloud'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { TextSection } from './TextSection'
import { usePlay } from '../context/Play'
const Experience = () => {
  const {play} = usePlay()
    const CURVE_DISTANCE = 250;
    const CURVE_AHEAD_CAMERA = 0.008
    const CURVE_AHEAD_AIRPLANE  = 0.02
    const LINE_NB_POINTS = 1200
    const AIRPLANE_MAX_ANGLE = 60
    const curvePoints = useMemo(() => {
        return ([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
            new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
        ])
    })
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom',0.5)
    })
    
  const textSections = useMemo(() => {
    return [
   
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[0].x ,
          curvePoints[0].y,
          (curvePoints[1].z-curvePoints[0].z)/4 -5
        ),
        title: "Manish Kumar Sinha",
        subtitle: ` A hard working full stack web developer. \n Btech CSE 3rd year`,
        imageUrl:  '/images/profilepicture.jpg',
        link:`Click here to see my resume`,
        web: `https://drive.google.com/file/d/1HqGqClWsKto8EmrGD3RF9W-HQh_LpgLI/view?usp=drive_link`
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[1].x -7.5,
          curvePoints[1].y-1,
          curvePoints[1].z
        ),
        title: "Platforms & Framework",
        subtitle: ` React, Next, MongoDB, Node, Express, aws, azure, clerk, Firebase, adobe premiere, blender, adobe animate, github`,
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[1].x+1  ,
          curvePoints[1].y+1.5,
          curvePoints[1].z
        ),
        title: "Technical Skills",
        subtitle: `Full Stack Development, DevOps, 3D Modelling, 3D & 2D Character animation, Video Editing`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[1].x +43,
          curvePoints[1].y,
         curvePoints[1].z -100
        ),
        title: "Let's Dive into Projects",
        subtitle: ``,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "eCommerce ",
        subtitle: `Built using React & Node \nFully Responsive`,
        imageUrl: '/images/ecommerce.png',
        link: `click here to check it out!`,
        web: `https://ecommerce.mksinha.online`
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "PhotoZone",
        subtitle: `Built in NextJS and uses cloudinary AI for backend \nReact-form-hook, Zod, Clerk`,
        link: `      click here to check it out!`,
        imageUrl: `/images/photozone.png`,
        web: `https://photo-zone.vercel.app`
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[4].x + 3.5,
          curvePoints[4].y,
          curvePoints[4].z - 12
        ),
        title: "AI Shorts Generator",
        subtitle: `Built in NextJS /n generates shorts using various AIs`,
        imageUrl: `/images/shorts.png`,
        link: 'Click here to check it out!',
        web: `https://shorts-generation.vercel.app/dashboard`
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[5].x - 4.5,
          curvePoints[5].y,
          curvePoints[5].z - 17
        ),
        title: "Anonymous Social Media",
        subtitle: `Built with React & Firebase. /n Post & Chat Anonymously`,
        imageUrl: `/images/socialmedia.png`,
        link: '    Click here to check it out!',
        web: `https://socialmedia.mksinha.online`
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[6].x + 3.5,
          curvePoints[6].y,
          curvePoints[6].z - 32
        ),
        title: "LinkedIn Clone",
        subtitle: `Built using MERN Stack. \nChatting feature coming soon!`,
        link: `Click here to check it out!`,
        imageUrl: `/images/linkedin.png`,
        web: `www.linkedin.com`
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[7].x ,
          curvePoints[7].y,
          curvePoints[7].z - 12
        ),
        title: "Thank You for reaching till the end!",
        subtitle: `contact me here`,
        web: `https://www.linkedin.com/in/msinha569`
      },
    ];
  }, []);

  const clouds = useMemo(
    () => [
      // STARTING
      {
        position: new THREE.Vector3(-3.5, -3.2, -7),
      },
      {
        position: new THREE.Vector3(3.5, -4, -10),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(-18, 0.2, -68),
        rotation: new THREE.Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new THREE.Vector3(2.5, 2.5, 2.5),
        position: new THREE.Vector3(10, -1.2, -52),
      },
      // FIRST POINT
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new THREE.Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      // SECOND POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      {
        scale: new THREE.Vector3(4, 5, 4),
        position: new THREE.Vector3(
          curvePoints[2].x - 60 ,
          curvePoints[2].y + 1,
          curvePoints[2].z - 100
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      {
        scale: new THREE.Vector3(4, 5, 4),
        position: new THREE.Vector3(
          curvePoints[2].x - 72,
          curvePoints[2].y + 1,
          curvePoints[2].z - 70
        ),
        rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // THIRD POINT
    
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new THREE.Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new THREE.Euler(0, Math.PI / 3, 0),
      },
      // FOURTH POINT
      {
        scale: new THREE.Vector3(5,5,5),
        position: new THREE.Vector3(
          curvePoints[4].x - 60,
          curvePoints[4].y - 0,
          curvePoints[4].z + 110
        )},
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[4].x - 70,
          curvePoints[4].y - 10,
          curvePoints[4].z + 100
        )},
      {
        scale: new THREE.Vector3(3,3,3),
        position: new THREE.Vector3(
          curvePoints[4].x - 100,
          curvePoints[4].y - 10,
          curvePoints[4].z + 100
        )},
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[4].x + 24,
          curvePoints[4].y - 6,
          curvePoints[4].z - 42
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[4].x + 8,
          curvePoints[4].y - 12,
          curvePoints[4].z + 30
        ),
        rotation: new THREE.Euler(Math.PI / 6, Math.PI / 8, 0),
      },
      {
        scale: new THREE.Vector3(2.5, 2.5, 2.5),
        position: new THREE.Vector3(
          curvePoints[4].x - 10,
          curvePoints[4].y + 6,
          curvePoints[4].z - 20
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[4].x + 14,
          curvePoints[4].y - 4,
          curvePoints[4].z - 80
        ),
      },
  
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[5].x + 5,
          curvePoints[5].y - 8,
          curvePoints[5].z + 40
        ),
      // FIFTH POINT - Adding new clouds
      },
      {
        scale: new THREE.Vector3(2,2,2),
        position: new THREE.Vector3(
          curvePoints[5].x - 8,
          curvePoints[5].y + 2,
          curvePoints[5].z
        ),
        rotation: new THREE.Euler(Math.PI / 5, Math.PI / 9, 0),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[5].x + 18,
          curvePoints[5].y - 6,
          curvePoints[5].z - 50
        ),
        rotation: new THREE.Euler(Math.PI / 6, Math.PI / 4, 0),
      },
  
      // SIXTH POINT - Adding new clouds
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[6].x + 10,
          curvePoints[6].y - 6,
          curvePoints[6].z + 20
        ),
      },
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[6].x - 10,
          curvePoints[6].y + 6,
          curvePoints[6].z
        ),
      },
  
      // FINAL (curvePoints[7]) - More clouds at the end
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x + 15,
          curvePoints[7].y,
          curvePoints[7].z + 80
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x - 18,
          curvePoints[7].y + 3,
          curvePoints[7].z + 100
        ),
        rotation: new THREE.Euler(Math.PI / 3, -Math.PI / 5, 0),
      },
      {
        scale: new THREE.Vector3(2.5, 2.5, 2.5),
        position: new THREE.Vector3(
          curvePoints[7].x,
          curvePoints[7].y + 5,
          curvePoints[7].z + 140
        ),
        rotation: new THREE.Euler(0, Math.PI / 2, Math.PI / 6),
      },
      // FINAL
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x + 12,
          curvePoints[7].y - 5,
          curvePoints[7].z + 60
        ),
        rotation: new THREE.Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x - 12,
          curvePoints[7].y + 5,
          curvePoints[7].z + 120
        ),
        rotation: new THREE.Euler(Math.PI / 4, Math.PI / 6, 0),
      },
    ],
    []
  ); 

 

    const shape = useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0,-0.08)
        shape.lineTo(0,0.08)
        return shape
    },[curve])

    const cameraGroup = useRef()
    const scroll = useScroll()
    useFrame((_state, delta) => {
      if (!play || !airplane.current) return
        const scrollOffset = Math.max(0,scroll.offset)
        const curPoint = curve.getPoint(scrollOffset)
        cameraGroup.current.position.lerp(curPoint, delta*24)


        const lookAtPoint = curve.getPoint(Math.min(scrollOffset+CURVE_AHEAD_CAMERA, 1))
        const currentLookAt = cameraGroup.current.getWorldDirection(
            new THREE.Vector3()
        )
        const targetLookAt = new THREE.Vector3().subVectors(curPoint,lookAtPoint).normalize()
        const lookAt = currentLookAt.lerp(targetLookAt, delta*24)

        cameraGroup.current.lookAt(
            cameraGroup.current.position.clone().add(lookAt)
        )

        //airplane rotation
        const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_CAMERA)
        const nonLerpLookAt = new THREE.Group()
        nonLerpLookAt.position.copy(curPoint)
        nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt))
        tangent.applyAxisAngle(
            new THREE.Vector3(0,1,0),
            -nonLerpLookAt.rotation.y
        )
       let angle = Math.atan2(-tangent.z,tangent.x)
       angle= -Math.PI/2 + angle

       let angleDegrees = (angle*180) / Math.PI
       angleDegrees*=5
       
       //limit plane angle
       if (angleDegrees < 0) angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE)
       if (angleDegrees > 0) angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE)

        //set back angle
        angle = (angleDegrees * Math.PI)/180
       const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
            airplane.current.rotation.x,
            airplane.current.rotation.y,
            angle
        )
       )
       airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta*50)
    })
    const airplane = useRef()
  return (
   <>
    {/* <OrbitControls enableZoom={false}/> */}
    <directionalLight position={[0,3,1]} intensity={0.5}/>
    <group ref={cameraGroup}>
    <PerspectiveCamera position={[0,0,5]} fov={30} makeDefault/>
    <Background backgroundColors={ {colorA: "#3535cc",
    colorB: "#abaadd"}}/>
    {play && <group ref={airplane}>
    <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
    <Airplane rotation-y={Math.PI/2} scale={[0.2,0.2,0.2]} position-y={0.1}/>
    </Float>
    </group>}
    </group>

    {textSections.map((textSection,index) => (
        <TextSection {...textSection} key={index}/>
    ))}

    <group position-y={-2}>
    {/* <Line points={linePoints} color={'white'} opacity={0.7} transparent lineWidth={16}/> */}
    <mesh>
        <extrudeGeometry args={[
            shape,
            {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve
            }
        ]}/>
        <meshStandardMaterial color={'white'} opacity={1} transparent envMapIntensity={2}/>
    </mesh>
    </group>
    {play && clouds.map((cloud, index) => (
          <Cloud opacity={0.7} {...cloud} key={index} />
        ))}
   </>
  )
}

export default Experience
