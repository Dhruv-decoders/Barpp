<template>
  <footer ref="footerSection" class="footer-section">
    <div class="site-container flex px-[0.625rem] md:px-[1.375rem] inner">
      <div class="site-grid w-full mx-auto">
        <span ref="person1Ref" class="person-01 body-1">Alex Harman<br>CEO</span>
        <span ref="person2Ref" class="person-02 body-1">Jerome Botbol<br>Head of Immersive</span>
        <div ref="buttonsRef" class="buttons body-3 flex gap-2 mt-2">
          <button class="close-btn link link-inverse" aria-label="Close the contact overlay" @click="handleClose">Close</button>
          <button class="component-audio-button audio-btn" data-theme="orange" @click="toggleSound">
            <span class="bracket bracket-left col-start-1">[</span>
            <span class="label">
              <span v-if="soundOn" class="col-start-1 row-start-1 whitespace-nowrap">Sound On</span>
              <span v-else class="col-start-1 row-start-1 whitespace-nowrap">Sound Off</span>
            </span>
            <span class="bracket bracket-right col-start-3">]</span>
          </button>
        </div>
        <div ref="colophonRef" class="colophon body-1 mt-4">
          <p>London</p>
          <p>+44 (0)20 8133 5633</p>
          <a href="/cdn-cgi/l/email-protection#3851565e577853575c5d555d5c5159165b5755" rel="noopener noreferrer" target="_blank" class="email-link link link-inverse">
            <span class="__cf_email__" data-cfemail="9ef7f0f8f1def5f1fafbf3fbfaf7ffb0fdf1f3">[email&#160;protected]</span>
          </a>
          <p>41 Mitchell Street<br>London EC1V 3QD<br>United Kingdom</p>
        </div>
        <p ref="creditsRef" class="credits body-1 mt-2">2025 KODE   /   All rights reserved</p>
        <div ref="linksRef" class="links body-1 flex gap-4 mt-2">
          <a href="https://kodemedia.com" rel="noopener" target="_blank" class="link-01 link link-inverse display-2">Kode</a>
          <a href="/cdn-cgi/l/email-protection#8be1eef9e4e6eea5e9e4ffe9e4e7cbe0e4efeee6eeefe2eaa5e8e4e6" rel="noopener noreferrer" target="_blank" class="link-02 link link-inverse display-2">Let's Connect</a>
        </div>
        <div ref="formRef" class="form-wrapper mt-4">
          <p class="body-6 font-normal uppercase w-full max-w-[23rem]">Sign up to be part of our growing tech community</p>
          <form class="form mt-2" @submit.prevent="handleSubmit">
            <div class="field-wrapper body-5 flex items-center gap-2">
              <span class="bracket bracket-left col-start-1">[</span>
              <input v-model="email" class="email-field" type="email" autocomplete="email" maxlength="256" placeholder="Enter your email address" inputmode="email" required>
              <span class="bracket bracket-right col-start-3">]</span>
            </div>
            <div class="email-states">
              <span v-if="emailSuccess" class="text-green-600">Thank you for signing up!</span>
              <span v-else-if="emailError" class="text-red-600">Please enter a valid email address.</span>
            </div>
          </form>
        </div>
        <svg ref="logoRef" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1398 127" class="logo mt-4">
          <path class="fill-current" d="M315 125V0h79v26h-51v25h46v24h-46v24h51v26h-79Z"></path>
          <path class="fill-current" d="M263 0h-36l40 63-40 62h36l40-62-40-63Z"></path>
          <path class="fill-current" d="M169 0c34 0 63 25 63 63s-29 63-63 63-63-25-63-63 29-63 63-63Zm0 98c16 0 34-11 34-35 0-25-18-36-34-36s-34 11-34 36c0 24 18 35 34 35Z"></path>
          <path class="fill-current" d="M75 0h36L71 63l40 62H75L35 63 75 0Z"></path>
          <path class="fill-current" d="M32 0H0v125h32V0Z"></path>
          <path class="fill-current" d="M414 112c0-9 6-15 15-15 8 0 15 6 15 15 0 8-7 15-15 15-9 0-15-7-15-15Z"></path>
          <path class="fill-current" d="M1313 125V1h83v23h-57v28h46v21h-46v29h59v23h-85Z"></path>
          <path class="fill-current" d="M1229 125 1187 1h28l30 92 30-92h27l-42 124h-31Z"></path>
          <path class="fill-current" d="M1150 125V1h26v124h-26Z"></path>
          <path class="fill-current" d="M1034 84h26c1 13 11 21 26 21 12 0 21-5 21-15 0-11-10-13-31-17-20-4-39-10-39-36 0-21 18-37 46-37 30 0 48 15 48 39h-26c-1-11-9-18-22-18-11 0-19 5-19 15s10 12 30 16c21 4 40 10 40 35 0 23-19 39-48 39-32 0-51-17-52-42Z"></path>
          <path class="fill-current" d="M928 125V1h50c28 0 46 16 46 41 0 16-8 29-21 35l24 48h-29l-21-42h-22v42h-27Zm48-102h-21v38h21c13 0 21-7 21-19 0-11-8-19-21-19Z"></path>
          <path class="fill-current" d="M827 125V1h83v23h-56v28h45v21h-45v29h58v23h-85Z"></path>
          <path class="fill-current" d="M669 125V1h35l35 91 33-91h34v124h-25V42l-33 83h-21l-32-83v83h-26Z"></path>
          <path class="fill-current" d="M512 125V1h35l34 91 33-91h34v124h-25V42l-32 83h-22l-32-83v83h-25Z"></path>
          <path class="fill-current" d="M464 125V1h27v124h-27Z"></path>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const footerSection = ref(null)
const person1Ref = ref(null)
const person2Ref = ref(null)
const buttonsRef = ref(null)
const colophonRef = ref(null)
const creditsRef = ref(null)
const linksRef = ref(null)
const formRef = ref(null)
const logoRef = ref(null)

import { ref as vueRef } from 'vue'
const soundOn = vueRef(false)
const email = vueRef('')
const emailSuccess = vueRef(false)
const emailError = vueRef(false)

function toggleSound() {
  soundOn.value = !soundOn.value
}

function handleClose() {
  // Placeholder for close action (e.g., close modal)
  console.log('Close button clicked')
}

function handleSubmit() {
  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailPattern.test(email.value)) {
    emailSuccess.value = true
    emailError.value = false
    email.value = ''
  } else {
    emailSuccess.value = false
    emailError.value = true
  }
}

onMounted(() => {
  gsap.from([
    person1Ref.value,
    person2Ref.value,
    buttonsRef.value,
    colophonRef.value,
    creditsRef.value,
    linksRef.value,
    formRef.value,
    logoRef.value
  ], {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.11,
    scrollTrigger: {
      trigger: footerSection.value,
      start: 'top 90%',
      once: true,
    },
  })
})
</script> 