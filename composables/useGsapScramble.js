import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
gsap.registerPlugin(ScrambleTextPlugin)

export function useGsapScramble(elRef, text, options = {}) {
  function scramble() {
    if (elRef.value) {
      gsap.to(elRef.value, {
        duration: options.duration || 1.2,
        scrambleText: {
          text,
          chars: options.chars || '0123456789!@#$%^&*',
          revealDelay: options.revealDelay || 0.5,
          speed: options.speed || 0.3,
        },
        ease: 'power2.out',
      })
    }
  }
  onMounted(() => scramble())
  return { scramble }
} 