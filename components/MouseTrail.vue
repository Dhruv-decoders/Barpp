<template>
  <canvas ref="canvasRef" :class="['mouse-trail-canvas', colorClass]" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  trailColor: { type: String, default: '#fff' },
  trailLifetime: { type: Number, default: 800 },
})

const canvasRef = ref(null)
const points = ref([])
const mouse = ref({ x: 0, y: 0 })
let ctx, animationId

const colorClass = computed(() => props.trailColor === '#FF4C00' ? 'mouse-trail-orange' : 'mouse-trail-white')

function addPoint(x, y) {
  points.value.push({ x, y, timestamp: Date.now() })
}

function onPointerMove(e) {
  let x, y
  if (e.touches && e.touches.length) {
    x = e.touches[0].clientX
    y = e.touches[0].clientY
  } else {
    x = e.clientX
    y = e.clientY
  }
  mouse.value = { x, y }
  addPoint(x, y)
}

function draw() {
  if (!ctx) return
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  const now = Date.now()
  points.value = points.value.filter(p => now - p.timestamp < props.trailLifetime)
  if (points.value.length > 1) {
    ctx.save()
    ctx.strokeStyle = props.trailColor
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.beginPath()
    points.value.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    })
    ctx.stroke()
    ctx.restore()
  }
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1
  const w = window.innerWidth
  const h = window.innerHeight
  const canvas = canvasRef.value
  canvas.width = w * dpr
  canvas.height = h * dpr
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('touchmove', onPointerMove, { passive: false })
  animationId = gsap.ticker.add(draw)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('touchmove', onPointerMove)
  gsap.ticker.remove(draw)
})
</script>

<style scoped>
.mouse-trail-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 40;
  display: block;
}
.mouse-trail-white {
  mix-blend-mode: lighten;
}
.mouse-trail-orange {
  mix-blend-mode: lighten;
}
@media (max-width: 767px) {
  .mouse-trail-canvas {
    display: none;
  }
}
</style> 