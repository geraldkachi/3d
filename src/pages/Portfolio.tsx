import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "../components"

const Portfolio = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0'>
                <Navbar />
                <Hero />
                {/* <StarsCanvas /> */}
            </div>
            <div className='relative z-0'>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <Contact />
                <StarsCanvas />

                <div className="grid grid-cols-1 h-screen pt-10 ">
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={1} key={undefined} material={undefined} quaternion={undefined} onPointerMissed={undefined} attach={undefined} onUpdate={undefined} position={undefined} up={undefined} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined}>
                            <MeshDistortMaterial color="#220735" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                </div>

            </div>
        </div>
    )
}

export default Portfolio
