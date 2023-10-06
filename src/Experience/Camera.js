import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from "./Experience";


export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Camera')
        }

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera
        (
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(2.5, 0, 0)
        this.scene.add(this.instance)
       
        // Debug
       if(this.debug.active)
       {
           this.debugFolder
               .add(this.instance.position, 'x')
               .name('cameraPositionX')
               .min(-20)
               .max(20)
               .step(0.001)

           this.debugFolder
               .add(this.instance.position, 'y')
               .name('cameraPositionY')
               .min(-20)
               .max(20)
               .step(0.001)

            this.debugFolder
               .add(this.instance.position, 'z')
               .name('cameraPositionZ')
               .min(-20)
               .max(20)
               .step(0.001)
       }

    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDaming = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}