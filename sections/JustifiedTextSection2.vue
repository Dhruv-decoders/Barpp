<template>
  <section class="justified-text-02" aria-labelledby="justified2-heading">
    <!-- Desktop variant -->
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] justified-text display-0 md-down:hidden relative z-[1]">
      <div class="site-grid w-full mx-auto">
        <p ref="desktopLines">
          <span class="line pl-[3.7em]"><span>Creating</span><span>new</span></span>
          <span class="line"><span>physical</span><span>and</span></span>
          <span class="line"><span>virtual</span></span>
          <span class="line"><span>worlds,</span><span>where</span></span>
          <span class="line"><span>creativity</span></span>
          <span class="line"><span>knows</span><span>no</span></span>
          <span class="line"><span>bounds.</span></span>
        </p>
      </div>
    </div>
    <!-- Mobile variant -->
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] justified-text display-0 md:hidden relative z-[1]">
      <div class="site-grid w-full mx-auto">
        <p ref="mobileLines">
          <span class="line !justify-end"><span>Creating</span></span>
          <span class="line"><span>new</span></span>
          <span class="line"><span>physical</span></span>
          <span class="line"><span>and</span></span>
          <span class="line"><span>virtual</span></span>
          <span class="line"><span>worlds,</span></span>
          <span class="line"><span>where</span></span>
          <span class="line"><span>creativity</span></span>
          <span class="line"><span>knows</span></span>
          <span class="line"><span>no bounds</span></span>
        </p>
      </div>
    </div>
    <!-- Typewriter text -->
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] text-black relative z-[1]">
      <div class="site-grid w-full mx-auto">
        <div class="typewriter display-3 col-span-full md:col-start-4 md:col-end-6 uppercase">
          <p>{{ typewriterText }}</p>
        </div>
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
import { useTypewriter } from '@/composables/useTypewriter.js'

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

const fullText = 'We help our clients stay bold, and form strong, enduring connections with their customers.'
const { displayed: typewriterText, start } = useTypewriter(fullText, 24)

onMounted(() => {
  start()
})
</script> 