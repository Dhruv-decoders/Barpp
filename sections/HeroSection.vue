<template>
  <section class="site-container flex px-[0.625rem] md:px-[1.375rem] sub-hero" aria-labelledby="hero-heading">
    <div class="site-grid w-full mx-auto">
      <div class="typewriter copy display-3">
        <h1 id="hero-heading" ref="scrambleEl" class="uppercase font-sans text-3xl md:text-5xl font-bold leading-tight">
          We see no limit to the potential of emerging technology. We blend artistry with innovation, and create new worlds where dreams know no bounds. Come with us into the emerging world of immersive storytelling.
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger)

const scrambleEl = ref(null)

onMounted(async () => {
  await document.fonts.ready;
  await nextTick();
  if (!scrambleEl.value) return
  const split = new SplitText(scrambleEl.value, { type: 'words,chars' })
  gsap.set(split.chars, { opacity: 0 })
  gsap.to(split.chars, {
    opacity: 1,
    scrambleText: {
      text: (i) => split.chars[i].textContent,
      chars: '0123456789!@#$%^&*',
      revealDelay: 0.1,
      speed: 0.3,
    },
    duration: 1.2,
    ease: 'power2.out',
    stagger: {
      each: 0.035,
      from: 'random',
    },
    scrollTrigger: {
      trigger: scrambleEl.value,
      start: 'top 80%',
      once: true,
    },
  })
})
</script> 