<template>
  <div class="webgl-chevron">
    <div class="background-text">
      <!-- <span>INNOVATE</span>
      <span>WITH</span>
      <span>PURPOSE</span> -->
    </div>
    <div class="canvas-wrapper">
      <canvas ref="chevronCanvas" class="canvas" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import gsap from 'gsap'

const chevronCanvas = ref(null)
let renderer, scene, camera, model, animationId, controls, envMap
let textMeshes = []
let chevronMeshes = []
let fractureMeshes = []
let originalPositions = new Map()
let lastMoveTime = 0;
let holding = false;
let fracturesInRange = new Set();

// Fixed camera position
const cameraX = 0.74
const cameraY = 2.7
const cameraZ = 1.3

// Make text mesh scale fixed
const textScale = 0.6

// MeshPhysicalMaterial controls
const chevronMaterialProps = ref({
  color: '#ff4c01',
  opacity: 0.85,
  metalness: 0.6,
  roughness: 0.01,
  transmission: 1.5,
  thickness: 20,
  ior: 1.5,
  envMapIntensity: 20,
  clearcoat: 1,
  clearcoatRoughness: 0.01,
  specularIntensity: 1,
  specularColor: '#ffffff',
  wireframe: false,
  side: 0, // THREE.FrontSide
  attenuationColor: '#ff0000', // saturated red for testing
  attenuationDistance: 0.6,
})
let chevronMaterial = null

function updateChevronMaterial() {
  if (!chevronMaterial) return
  chevronMaterial.color.set(chevronMaterialProps.value.color)
  chevronMaterial.opacity = chevronMaterialProps.value.opacity
  chevronMaterial.metalness = chevronMaterialProps.value.metalness
  chevronMaterial.roughness = chevronMaterialProps.value.roughness
  chevronMaterial.transmission = chevronMaterialProps.value.transmission
  chevronMaterial.thickness = chevronMaterialProps.value.thickness
  chevronMaterial.ior = chevronMaterialProps.value.ior
  chevronMaterial.envMapIntensity = chevronMaterialProps.value.envMapIntensity
  chevronMaterial.clearcoat = chevronMaterialProps.value.clearcoat
  chevronMaterial.clearcoatRoughness = chevronMaterialProps.value.clearcoatRoughness
  chevronMaterial.specularIntensity = chevronMaterialProps.value.specularIntensity
  chevronMaterial.specularColor.set(chevronMaterialProps.value.specularColor)
  chevronMaterial.wireframe = chevronMaterialProps.value.wireframe
  chevronMaterial.side = chevronMaterialProps.value.side
  chevronMaterial.attenuationColor.set(chevronMaterialProps.value.attenuationColor)
  chevronMaterial.attenuationDistance = chevronMaterialProps.value.attenuationDistance
  chevronMaterial.needsUpdate = true
}

watch(chevronMaterialProps, updateChevronMaterial, { deep: true })
watch(chevronMaterialProps, (val) => {
  console.log('Chevron Material Properties:', JSON.parse(JSON.stringify(val)))
}, { deep: true })

onMounted(async () => {
  // Scene
  scene = new THREE.Scene()
  scene.background = null // Let CSS gradient show through

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(cameraX, cameraY, cameraZ)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: chevronCanvas.value, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.physicallyCorrectLights = true

  // Controls (horizontal only)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.enableZoom = false
  controls.enablePan = false
  controls.minPolarAngle = Math.PI / 2
  controls.maxPolarAngle = Math.PI / 2

  // Lighting
  const rimLight = new THREE.DirectionalLight(0x88cfff, 1.2)
  rimLight.position.set(-3, 5, 3)
  scene.add(rimLight)
  const fillLight = new THREE.PointLight(0xffffff, 0.1, 10) // Lower intensity
  fillLight.position.set(2, 2, 2)
  scene.add(fillLight)
  scene.add(new THREE.AmbientLight(0xffffff, 0.3))
  // Add a directional light behind the text for backlighting
  const backLight = new THREE.DirectionalLight(0xffffff, 0.2) // Lower intensity
  backLight.position.set(0, 0, -5)
  backLight.intensity = 2;
  scene.add(backLight)
  // Add a point light inside the chevron for internal glow
  const internalLight = new THREE.PointLight(0xf1623b, 4, 2)
  internalLight.position.set(0, 0.2, 0)
  scene.add(internalLight)

  // Load HDR environment first
  new RGBELoader()
    .setPath('/hdr/')
    .load('option_8.hdr', function(texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping
      envMap = texture

      // Now load the GLB model
      const loader = new GLTFLoader()
      loader.load(
        '/Chevron_BaseState.glb',
        async (gltf) => {
          model = gltf.scene
          model.position.set(0, 0, 0)
          model.scale.set(0.6, 0.5, 0.7)
          chevronMeshes = []
          textMeshes = []
          fractureMeshes.length = 0
          originalPositions.clear()
          model.traverse((child) => {
            if (child.isMesh) {
              // console.log('Mesh name:', child.name)
              if (child.name.startsWith('Main_Chevron_fracturepart')) {
                fractureMeshes.push(child)
                originalPositions.set(child, child.position.clone())
                // Remove all color attributes/groups
                if (child.geometry) {
                  if (child.geometry.attributes.color) {
                    child.geometry.deleteAttribute('color');
                  }
                  if (child.geometry.groups) {
                    child.geometry.clearGroups();
                  }
                }
                // Force solid orange MeshPhysicalMaterial
                child.material = new THREE.MeshPhysicalMaterial({
                  color: '#ff4c01',
                  metalness: 0,
                  roughness: 0.5,
                  transparent: false,
                  opacity: 1,
                  envMap: null,
                  vertexColors: false,
                  clearcoat: 0,
                  transmission: 0,
                  reflectivity: 0,
                  ior: 1.0
                });
                child.material.needsUpdate = true;
              }
              if (child.name === 'Hover_Plane') {
                child.visible = false;
                return;
              }
              const isText = child.name.toLowerCase().includes('text') ||
                (child.material && child.material.name && child.material.name.toLowerCase().includes('text'))
              if (!isText) {
                chevronMaterial = new THREE.MeshPhysicalMaterial({
                  color: '#f1623b',
                  metalness: chevronMaterialProps.value.metalness,
                  roughness: chevronMaterialProps.value.roughness,
                  transmission: chevronMaterialProps.value.transmission,
                  thickness: chevronMaterialProps.value.thickness,
                  transparent: true,
                  opacity: chevronMaterialProps.value.opacity,
                  ior: chevronMaterialProps.value.ior,
                  envMapIntensity: chevronMaterialProps.value.envMapIntensity,
                  clearcoat: chevronMaterialProps.value.clearcoat,
                  clearcoatRoughness: chevronMaterialProps.value.clearcoatRoughness,
                  specularIntensity: chevronMaterialProps.value.specularIntensity,
                  specularColor: chevronMaterialProps.value.specularColor,
                  envMap: envMap,
                  wireframe: chevronMaterialProps.value.wireframe,
                  side: THREE.FrontSide,
                  attenuationColor: '#f1623b',
                  attenuationDistance: chevronMaterialProps.value.attenuationDistance,
                })
                child.material = chevronMaterial
                child.material.color.set('#f1623b')
                chevronMaterial.needsUpdate = true
                child.renderOrder = 1 // Chevron in front
                chevronMeshes.push(child)
              } else {
                // Amplified, black text
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x000000,
                  emissive: 0x000000,
                  emissiveIntensity: 1.0,
                  metalness: 0.5,
                  roughness: 0.2,
                  transparent: false,
                })
                child.scale.set(textScale, textScale, textScale)
                child.renderOrder = 0 // Text in back
                textMeshes.push(child)
              }
            }
          })
          // Detach text meshes from chevron and add to scene separately
          textMeshes.forEach(textMesh => {
            model.remove(textMesh)
            textMesh.renderOrder = 0 // Text in back
            scene.add(textMesh)
          })
          // Ensure chevron mesh is in front
          chevronMeshes.forEach(mesh => { mesh.renderOrder = 1 })
          scene.add(model)

          // --- Tearing Animation Setup ---
          await nextTick()
          const canvas = chevronCanvas.value
          if (!canvas) {
            console.warn('Chevron canvas not found for event listeners')
            return
          }
          // Raycaster setup
          const raycaster = new THREE.Raycaster()
          const mouse = new THREE.Vector2()

          function updateFractures(event) {
            if (!holding) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(fractureMeshes, false);
            let hitPoint = null;
            if (intersects.length > 0) {
              hitPoint = intersects[0].point;
            }
            const center = new THREE.Vector3(0, 0, 0);
            model.localToWorld(center);
            const newInRange = new Set();
            fractureMeshes.forEach(mesh => {
              const orig = originalPositions.get(mesh);
              let target = orig;
              let inRange = false;
              if (hitPoint) {
                const meshWorldPos = mesh.getWorldPosition(new THREE.Vector3());
                const dist = meshWorldPos.distanceTo(hitPoint);
                const maxDist = 0.7;
                if (dist < maxDist) {
                  inRange = true;
                  const dir = meshWorldPos.clone().sub(center).normalize();
                  const cameraDir = camera.getWorldDirection(new THREE.Vector3()).normalize();
                  const tilt = 0.7;
                  const combinedDir = dir.add(cameraDir.multiplyScalar(tilt)).normalize();
                  const strength = 1 - (dist / maxDist);
                  const moveAmount = 1.8 * strength;
                  target = orig.clone().add(combinedDir.multiplyScalar(moveAmount));
                }
              }
              if (inRange) {
                newInRange.add(mesh);
                if (mesh.position.distanceTo(target) > 0.01) {
                  gsap.to(mesh.position, {
                    x: target.x, y: target.y, z: target.z,
                    duration: 0.3, ease: 'power2.out', overwrite: true
                  });
                }
              } else {
                if (mesh.position.distanceTo(orig) > 0.01) {
                  gsap.to(mesh.position, {
                    x: orig.x, y: orig.y, z: orig.z,
                    duration: 0.5, ease: 'power2.inOut', overwrite: true
                  });
                }
              }
            });
            fracturesInRange = newInRange;
          }

          function onMouseDown(event) {
            holding = true;
            updateFractures(event);
          }
          function onMouseMove(event) {
            if (holding) updateFractures(event);
          }
          function onMouseUp() {
            holding = false;
            // Animate all fractures back
            fractureMeshes.forEach(mesh => {
              const orig = originalPositions.get(mesh);
              if (mesh.position.distanceTo(orig) > 0.01) {
                gsap.to(mesh.position, {
                  x: orig.x, y: orig.y, z: orig.z,
                  duration: 0.5, ease: 'power2.inOut', overwrite: true
                });
              }
            });
            fracturesInRange.clear();
          }

          canvas.addEventListener('mousedown', onMouseDown);
          canvas.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);

          // Clean up listeners on unmount
          onBeforeUnmount(() => {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          });
          // --- End Tearing Animation Setup ---
        },
        undefined,
        (error) => {
          console.error('Error loading GLB:', error)
        }
      )
    })

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate)
    if (controls) controls.update()
    // Make text always face the camera (billboard effect)
    textMeshes.forEach(textMesh => {
      textMesh.lookAt(camera.position)
    })
    renderer.render(scene, camera)
  }
  animate()

  // Handle resize
  window.addEventListener('resize', onWindowResize)
})

function onWindowResize() {
  if (!renderer || !camera) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) renderer.dispose()
  if (scene && model) scene.remove(model)
})
</script>

<style scoped>
.webgl-chevron {
  position: relative;
  display: grid;
  height: 100svh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  background: linear-gradient(120deg, #ff4c00 0%, #ff7c2b 100%);
}
.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  text-align: center;
  width: 100vw;
  font-family: 'OT Brut', serif;
  font-size: 7vw;
  color: #111;
  font-weight: bold;
  letter-spacing: -0.05em;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}
.background-text span {
  display: block;
}
.canvas-wrapper {
  grid-column-start: 1;
  grid-row-start: 1;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;
}
.canvas {
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
</style> 