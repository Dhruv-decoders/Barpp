<template>
  <section ref="preloaderSection" class="preloader fixed inset-0 z-50 bg-black flex items-center justify-center">
    <div class="site-grid w-full h-full mx-auto" style="--cols:1;">
      <div class="counter-wrapper fixed top-5 right-[0.625rem] md:top-5 md:right-[1.375rem] z-50 select-none" v-show="showCounter">
        <span class="counter body-1 font-mono text-white text-lg md:text-xl tracking-widest">{{ counterString }}</span>
      </div>
      <div class="w-full col-start-1 row-start-1 place-self-center flex flex-col items-center justify-center">
        <div class="lottie mb-12 w-full max-w-[850px] aspect-[850/150] flex items-center justify-center">
          <div ref="lottieContainer" class="w-full h-full" style="min-width:200px; min-height:60px;"></div>
        </div>
        <div class="enter-button transition-all duration-500 ease-out" :data-visible="showEnter">
          <button class="button-brackets body-1 uppercase inline-grid gap-x-1 text-white text-lg md:text-xl px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-500"
            data-theme="red" @click="onEnterClick" :disabled="!showEnter">
            <span class="bracket bracket-left col-start-1 transition-transform duration-300">[</span>
            <span class="col-start-2 row-start-1">Enter</span>
            <span class="bracket bracket-right col-start-3 transition-transform duration-300">]</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import lottie from 'lottie-web'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['done'])
const lottieContainer = ref(null)
const preloaderSection = ref(null)

const counter = ref(0)
const showCounter = ref(true)
const showEnter = ref(false)
const counterString = computed(() => counter.value.toString().padStart(3, '0'))
let counterInterval = null

function startCounter() {
  counter.value = 0
  showCounter.value = true
  showEnter.value = false
  counterInterval = setInterval(() => {
    if (counter.value < 100) {
      counter.value++
    } else {
      clearInterval(counterInterval)
      showEnter.value = true
      showCounter.value = false
    }
  }, 16) // ~1.6s total, matches original speed
}

function onEnterClick() {
  // Slide up and fade out
  gsap.to(preloaderSection.value, {
    yPercent: -100,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.in',
    onComplete: () => emit('done')
  })
}

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/preloader.json',
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  })
  startCounter()
})

onMounted(async () => {
  await document.fonts.ready;
  await nextTick();
  if (preloaderSection.value) {
    gsap.from(preloaderSection.value, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: preloaderSection.value,
        start: 'top 90%',
        once: true,
      },
    })
  }
})
</script>

<style scoped>
.preloader {
  background: #000;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.counter-wrapper {
  font-variant-numeric: tabular-nums;
}
.enter-button[data-visible="false"] {
  pointer-events: none;
  opacity: 0;
  transform: translateY(0.75rem);
}
.enter-button[data-visible="true"] {
  pointer-events: auto;
  opacity: 1;
  transform: translateY(0);
}
.button-brackets[data-theme="red"]:hover .bracket {
  color: #FF4C00;
}
.button-brackets[data-theme="red"]:hover .bracket-left {
  transform: translateX(-50%);
}
.button-brackets[data-theme="red"]:hover .bracket-right {
  transform: translateX(50%);
}
</style> 