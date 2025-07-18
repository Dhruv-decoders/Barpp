<template>
  <div>
    <PreloaderSection v-if="showPreloader" @done="showPreloader = false" />
    <template v-else>
      <MouseTrail trailColor="#fff" :trailLifetime="400" />
      <MouseTrail trailColor="#FF4C00" :trailLifetime="400" />
      <WebGLChevronSection />
      <HeroSection />
      <JustifiedTextSection />
      <LogoDrawSection />
      <TestimonialsSection />
      <ServicesSection />
      <JustifiedTextSection2 />
      <FooterSection />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PreloaderSection from '@/sections/PreloaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import WebGLChevronSection from '@/sections/WebGLChevronSection.vue'
import JustifiedTextSection from '@/sections/JustifiedTextSection.vue'
import LogoDrawSection from '@/sections/LogoDrawSection.vue'
import TestimonialsSection from '@/sections/TestimonialsSection.vue'
import ServicesSection from '@/sections/ServicesSection.vue'
import JustifiedTextSection2 from '@/sections/JustifiedTextSection2.vue'
import FooterSection from '@/sections/FooterSection.vue'
import MouseTrail from '@/components/MouseTrail.vue'

const showPreloader = ref(true)
</script>

<style>
/* You can add global styles here if needed */
</style> 