export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.src = '/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js';
    document.body.appendChild(script);
  }
}); 