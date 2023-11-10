import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debugn
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setSunLight()
        this.setFog()
    }

    setSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3, 3, - 2.25)
        this.scene.add(this.sunLight)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightPositonX')
                .min(-5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightPositonY')
                .min(-5)
                .max(5)
                .step(0.001) 
            
            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightPositonZ')
                .min(-5)
                .max(5)
                .step(0.001) 
        }
    }
    setFog()
    {
        this.fog = new THREE.Fog(0x0000ff, 2.5, 3.5)
        this.scene.fog = this.fog

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.fog, 'near')
                .name('fogNear')
                .min(-10)
                .max(8)
                .step(0.001)

            this.debugFolder
                .add(this.fog, 'far')
                .name('fogFar')
                .min(-100)
                .max(100)
                .step(0.001)
        }
    }
}