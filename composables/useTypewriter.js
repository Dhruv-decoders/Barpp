import { ref } from 'vue'

export function useTypewriter(fullText, speed = 30) {
  const displayed = ref('')
  let index = 0
  let interval = null

  function start() {
    displayed.value = ''
    index = 0
    clearInterval(interval)
    interval = setInterval(() => {
      if (index < fullText.length) {
        displayed.value += fullText[index]
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)
  }

  return { displayed, start }
} 