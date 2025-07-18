<template>
  <section class="testimonials-section py-16 bg-gray-50" aria-labelledby="testimonials-heading">
    <div class="site-container px-[0.625rem] md:px-[1.375rem]">
      <h2 id="testimonials-heading" class="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <figure
          v-for="(testimonial, i) in testimonials"
          :key="i"
          ref="cardRefs"
          class="testimonial-card p-6 bg-white rounded-lg shadow text-center transition-opacity duration-700"
          aria-label="Testimonial"
        >
          <blockquote class="text-lg italic mb-4">{{ testimonial.quote }}</blockquote>
          <figcaption>
            <div class="font-semibold">{{ testimonial.name }}</div>
            <div class="text-sm text-gray-500">{{ testimonial.title }}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: '“KODE Immersive transformed our brand experience!”',
    name: 'Jane Doe',
    title: 'CMO, Example Corp',
  },
  {
    quote: '“The most creative team we\'ve ever worked with.”',
    name: 'John Smith',
    title: 'Head of Marketing, Acme Inc',
  },
  {
    quote: '“Truly unforgettable experiences, every time.”',
    name: 'Emily Lee',
    title: 'Brand Manager, Widget Co',
  },
]

const cardRefs = ref([])

onMounted(async () => {
  await document.fonts.ready;
  await nextTick()
  gsap.set(cardRefs.value, { opacity: 0, y: 40 })
  gsap.to(cardRefs.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: cardRefs.value[0],
      start: 'top 85%',
      once: true,
    },
  })
})
</script> 