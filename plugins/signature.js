export default defineNuxtPlugin(() => {
  if (process.client) {
    // Console branding from Signature.js
    // (You can paste the actual Signature.js content here)
    console.log('%cKODE Immersive', 'font-size: 2em; color: #FF4C00; font-family: Aeonik Pro, Helvetica Neue, Helvetica, Arial, sans-serif;');
    // ...add any additional branding logic from Signature.js
  }
}); 