<template>
  <section ref="sectionRef" class="site-container flex px-[0.625rem] md:px-[1.375rem] threed-section">
    <div class="site-grid w-full mx-auto">
      <div class="flex items-center mb-4">
        <label for="model-select" class="mr-2 text-white">Choose Model:</label>
        <select id="model-select" v-model="selectedModel" class="rounded px-2 py-1">
          <option v-for="model in models" :key="model.value" :value="model.value">{{ model.label }}</option>
        </select>
      </div>
      <div class="canvas-3d-wrapper w-full h-[400px] md:h-[600px] relative">
        <canvas ref="canvasRef" class="canvas-3d w-full h-full block"></canvas>
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
        </div>
        <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-red-700 bg-opacity-80 z-10">
          <span class="text-white text-lg">Failed to load 3D model</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const models = [
  { label: 'Chevron', value: '/Chevron_BaseState.glb' },
  { label: 'Circle', value: '/circle.glb' },
  { label: 'Asterisk', value: '/asterisk.glb' },
  { label: 'Balloon', value: '/baloon.glb' },
]
const selectedModel = ref(models[0].value)
const canvasRef = ref(null)
const loading = ref(true)
const error = ref(false)
let renderer, scene, camera, controls, model, animationId
const sectionRef = ref(null)

function resizeRenderer() {
  if (!renderer || !camera) return
  const canvas = renderer.domElement
  const width = canvas.parentElement.offsetWidth
  const height = canvas.parentElement.offsetHeight
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function clearModel() {
  if (scene && model) {
    scene.remove(model)
    model.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose()
        if (child.material.map) child.material.map.dispose()
        child.material.dispose()
      }
    })
    model = null
  }
}

function loadModel(path) {
  loading.value = true
  error.value = false
  clearModel()
  const loader = new GLTFLoader()
  loader.load(
    path,
    (gltf) => {
      model = gltf.scene
      scene.add(model)
      loading.value = false
    },
    undefined,
    (e) => {
      error.value = true
      loading.value = false
      console.error('Failed to load GLB:', e)
    }
  )
}

onMounted(() => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#111')
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
  camera.position.set(0, 1, 3)

  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x111111, 1)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.target.set(0, 0.5, 0)
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.0

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(2, 4, 2)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))

  loadModel(selectedModel.value)

  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
  resizeRenderer()
  window.addEventListener('resize', resizeRenderer)

  // GSAP fade-in animation for section
  if (sectionRef.value) {
    gsap.from(sectionRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 85%',
        once: true,
      },
    })
  }
})

watch(selectedModel, (newVal) => {
  loadModel(newVal)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeRenderer)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) renderer.dispose()
  clearModel()
})
</script>

<style scoped>
.canvas-3d-wrapper { position: relative; width: 100%; height: 100%; }
.canvas-3d { display: block; width: 100%; height: 100%; }
</style> 