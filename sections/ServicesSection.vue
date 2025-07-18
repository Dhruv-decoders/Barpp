<template>
  <div ref="servicesSection" class="services relative z-0" data-fully-visible="false" data-services>
    <div class="wrapper">
      <div class="site-container flex px-[0.625rem] md:px-[1.375rem] inner">
        <div class="site-grid w-full mx-auto">
          <header ref="headerRef" class="header">
            <h2 class="title body-1">Our services</h2>
          </header>
          <div class="canvas-mobile-wrapper" id="canvas-mobile-wrapper"></div>
          <div ref="serviceHeaderRef" class="service-header display-4 flex">
            <span>00</span>
            <span class="overflow-hidden grid">
              <span class="number" :style="{ transform: `translateY(${100 * (0 - current)}%)` }">1</span>
              <span class="number" :style="{ transform: `translateY(${100 * (1 - current)}%)` }">2</span>
              <span class="number" :style="{ transform: `translateY(${100 * (2 - current)}%)` }">3</span>
            </span>
            <span>{{ services[current].title }}</span>
          </div>
          <p ref="descRef" class="description body-1 !leading-[1.2]" v-html="services[current].desc"></p>
          <ul class="items body-1"></ul>
          <div ref="buttonsRef" class="buttons">
            <button class="button body-1 uppercase transition-opacity duration-200 ease-out pointer-events-auto" @click="prevService"> Prev </button>
            <span class="body-1 uppercase pointer-events-none transition-opacity duration-200 ease-out">/</span>
            <button class="button body-1 uppercase transition-opacity duration-200 ease-out pointer-events-auto" @click="nextService"> Next </button>
          </div>
        </div>
      </div>
      <div class="col-start-1 row-start-1 relative z-[1] overflow-hidden size-full grid grid-cols-1 grid-rows-1 pointer-events-none">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText, ScrollTrigger)

const servicesSection = ref(null)
const headerRef = ref(null)
const serviceHeaderRef = ref(null)
const descRef = ref(null)
const buttonsRef = ref(null)

// Service data (titles, descriptions)
const services = [
  {
    title: 'Ideate',
    desc: 'We<br> define objectives<br> share ideas<br> explore the possibilities with tech<br> and agree a concept',
  },
  {
    title: 'Create',
    desc: "We<br> design and build<br> prototype and iterate<br> test and refine<br> until it\u2019s perfect",
  },
  {
    title: 'Activate',
    desc: "We<br> launch and support<br> measure and optimize<br> celebrate success<br> and plan what\u2019s next",
  },
]
const current = ref(0)

function animateServiceHeader() {
  if (!serviceHeaderRef.value) return
  // Animate the number column
  const numbers = serviceHeaderRef.value.querySelectorAll('.number')
  numbers.forEach((el, i) => {
    gsap.to(el, {
      y: `${100 * (i - current.value)}%`,
      duration: 0.6,
      ease: 'power2.inOut',
    })
  })
  // Animate the title (SplitText)
  const titleSpan = serviceHeaderRef.value.querySelector('span:last-child')
  if (titleSpan) {
    const split = new SplitText(titleSpan, { type: 'chars' })
    gsap.fromTo(split.chars, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.04,
    })
  }
}

function animateDescription() {
  if (!descRef.value) return
  const split = new SplitText(descRef.value, { type: 'lines' })
  gsap.fromTo(split.lines, { opacity: 0, y: 40 }, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.08,
  })
}

function showService(idx) {
  current.value = idx
  // Update header and description content
  // Header
  const titleSpan = serviceHeaderRef.value.querySelector('span:last-child')
  if (titleSpan) titleSpan.textContent = services[idx].title
  // Description
  descRef.value.innerHTML = services[idx].desc
  // Animate
  nextTick(() => {
    animateServiceHeader()
    animateDescription()
  })
}

function prevService() {
  const idx = (current.value + services.length - 1) % services.length
  showService(idx)
}
function nextService() {
  const idx = (current.value + 1) % services.length
  showService(idx)
}

onMounted(async () => {
  await document.fonts.ready;
  await nextTick();
  // Initial content
  showService(0)
  // Section entrance animation
  gsap.from([
    headerRef.value,
    serviceHeaderRef.value,
    descRef.value,
    buttonsRef.value
  ], {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.13,
    scrollTrigger: {
      trigger: servicesSection.value,
      start: 'top 85%',
      once: true,
    },
  })
})
</script> 