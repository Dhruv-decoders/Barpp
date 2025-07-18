<template>
  <section ref="logoDrawSection" class="site-container flex px-[0.625rem] md:px-[1.375rem] logo-draw">
    <div class="site-grid w-full mx-auto">
      <p ref="instructionsRef" class="instructions body-1">Scratch around</p>
      <div class="canvas-wrapper">
        <canvas ref="drawCanvas" class="canvas" width="300" height="100" @mousedown="startDraw" @mousemove="draw" @mouseup="endDraw" @mouseleave="endDraw"
          @touchstart.prevent="startDrawTouch" @touchmove.prevent="drawTouch" @touchend="endDraw" style="border:1px solid #eee;"></canvas>
        <svg ref="svgRef" class="image md-down:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 17" fill="none" aria-hidden="true">
          <path fill="#fff" fill-rule="evenodd" d="M22.733 0c4.553 0 8.42 3.317 8.42 8.465 0 5.125-3.867 8.442-8.42 8.442-4.576 0-8.442-3.317-8.442-8.442C14.291 3.317 18.157 0 22.733 0ZM0 .05V0h53v17H0v-.144h4.268V.05H0Zm22.733 13.156c2.182 0 4.541-1.47 4.541-4.764 0-3.295-2.36-4.787-4.54-4.787-2.205 0-4.56 1.492-4.56 4.787 0 3.294 2.355 4.764 4.56 4.764Z" clip-rule="evenodd"/>
        </svg>
        <svg ref="svgMobileRef" class="image md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 17" fill="none" aria-hidden="true">
          <path fill="#fff" fill-rule="evenodd" d="M5.398 8.413 0 0v17h11V0H4.885l5.398 8.413-5.378 8.393H.02l5.378-8.393Z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div ref="typewriterRef" class="typewriter copy display-3">
        <p>We already make great content. This is the next level of creative expression - we won't let you be left behind.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
onMounted(() => {
  if (typeof gsap.registerPlugin === 'function') {
    gsap.registerPlugin(ScrollTrigger)
  }
})

const logoDrawSection = ref(null)
const instructionsRef = ref(null)
const svgRef = ref(null)
const svgMobileRef = ref(null)
const typewriterRef = ref(null)
const drawCanvas = ref(null)
let drawing = false
let lastPos = { x: 0, y: 0 }

function getPos(e) {
  const rect = drawCanvas.value.getBoundingClientRect()
  if (e.touches) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    }
  } else {
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }
}

function startDraw(e) {
  drawing = true
  lastPos = getPos(e)
}
function startDrawTouch(e) {
  drawing = true
  lastPos = getPos(e)
}
function draw(e) {
  if (!drawing) return
  const ctx = drawCanvas.value.getContext('2d')
  const pos = getPos(e)
  ctx.beginPath()
  ctx.moveTo(lastPos.x, lastPos.y)
  ctx.lineTo(pos.x, pos.y)
  ctx.strokeStyle = '#FF4C00'
  ctx.lineWidth = 2
  ctx.stroke()
  lastPos = pos
}
function drawTouch(e) {
  draw(e)
}
function endDraw() {
  drawing = false
}

onMounted(() => {
  // Animate instructions, SVGs, and typewriter text
  gsap.from([instructionsRef.value, svgRef.value, svgMobileRef.value, typewriterRef.value], {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: logoDrawSection.value,
      start: 'top 85%',
      once: true,
    },
  })
})
</script> 