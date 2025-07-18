<template>
  <section class="justified-text-01" aria-labelledby="justified-heading">
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] justified-text display-0 md-down:hidden relative z-[1]">
      <div class="site-grid w-full mx-auto">
        <p ref="desktopLines">
          <span class="line pl-[1.3em]"><span>With</span><span>the</span><span>help</span><span>of</span></span>
          <span class="line"><span>technology,</span><span>you</span><span>can</span></span>
          <span class="line"><span>now</span><span>step</span><span>right</span><span>into</span></span>
          <span class="line" style="margin-bottom:0.8em;"><span>the</span><span>story</span><span>your</span><span>brand</span><span>wants</span><span>to</span><span>tell.</span></span>
          <span class="line"><span>We</span><span>help</span><span>you</span><span>create</span><span>immersive</span><span>experiences</span></span>
          <span class="line"><span>that</span><span>engage,</span><span>inspire,</span><span>and</span><span>connect.</span></span>
        </p>
      </div>
    </div>
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] justified-text display-0 md:hidden relative z-[1]">
      <div class="site-grid w-full mx-auto">
        <p ref="mobileLines">
          <span class="line !justify-end"><span>With</span></span>
          <span class="line"><span>the</span></span>
          <span class="line"><span>help</span></span>
          <span class="line"><span>of</span></span>
          <span class="line"><span>technology,</span></span>
          <span class="line"><span>you</span></span>
          <span class="line"><span>can</span></span>
          <span class="line"><span>now</span></span>
          <span class="line"><span>step</span></span>
          <span class="line"><span>right</span></span>
          <span class="line"><span>into</span></span>
          <span class="line" style="margin-bottom:0.8em;"><span>the</span></span>
          <span class="line"><span>story</span></span>
          <span class="line"><span>your</span></span>
          <span class="line"><span>brand</span></span>
          <span class="line"><span>wants</span></span>
          <span class="line"><span>to</span></span>
          <span class="line"><span>tell.</span></span>
          <span class="line"><span>We</span></span>
          <span class="line"><span>help</span></span>
          <span class="line"><span>you</span></span>
          <span class="line"><span>create</span></span>
          <span class="line"><span>immersive</span></span>
          <span class="line"><span>experiences</span></span>
          <span class="line"><span>that</span></span>
          <span class="line"><span>engage,</span></span>
          <span class="line"><span>inspire,</span></span>
          <span class="line"><span>and</span></span>
          <span class="line"><span>connect.</span></span>
        </p>
      </div>
    </div>
    <div class="absolute inset-0 z-[0] bg-white" aria-hidden="true" data-panel-01></div>
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

const desktopLines = ref(null)
const mobileLines = ref(null)

onMounted(() => {
  [desktopLines.value, mobileLines.value].forEach((el) => {
    if (!el) return
    const lines = el.querySelectorAll('.line')
    gsap.set(lines, { opacity: 0, y: 40 })
    gsap.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })
  })
})
</script> 