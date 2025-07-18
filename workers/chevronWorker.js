self.canvas = null
self.ctx = null
self.width = 0
self.height = 0
self.dpr = 1
self.animating = false

function drawChevron(t) {
  if (!self.ctx) return
  const w = self.width
  const h = self.height
  self.ctx.clearRect(0, 0, w, h)
  // Stylized chevron: orange background, black chevron
  self.ctx.fillStyle = '#FF4C00'
  self.ctx.fillRect(0, 0, w, h)
  self.ctx.save()
  self.ctx.translate(w/2, h/2)
  self.ctx.scale(Math.min(w, h)/600, Math.min(w, h)/600)
  self.ctx.strokeStyle = '#111'
  self.ctx.lineWidth = 18
  self.ctx.lineJoin = 'round'
  self.ctx.beginPath()
  self.ctx.moveTo(-120, -180 + Math.sin(t/600)*10)
  self.ctx.lineTo(60, 0)
  self.ctx.lineTo(-120, 180 - Math.sin(t/600)*10)
  self.ctx.stroke()
  self.ctx.restore()
}

function animate(t) {
  drawChevron(t)
  if (self.animating) requestAnimationFrame(animate)
}

self.onmessage = function(e) {
  const { type, canvas, width, height, dpr } = e.data
  if (type === 'init') {
    self.canvas = canvas
    self.ctx = canvas.getContext('2d')
    self.dpr = dpr || 1
    self.width = width
    self.height = height
    self.canvas.width = width * self.dpr
    self.canvas.height = height * self.dpr
    self.ctx.setTransform(self.dpr, 0, 0, self.dpr, 0, 0)
    self.animating = true
    requestAnimationFrame(animate)
  } else if (type === 'resize') {
    self.width = width
    self.height = height
    self.canvas.width = width * self.dpr
    self.canvas.height = height * self.dpr
    self.ctx.setTransform(self.dpr, 0, 0, self.dpr, 0, 0)
  } else if (type === 'dpr') {
    self.dpr = dpr
    self.canvas.width = self.width * self.dpr
    self.canvas.height = self.height * self.dpr
    self.ctx.setTransform(self.dpr, 0, 0, self.dpr, 0, 0)
  } else if (type === 'stop') {
    self.animating = false
  }
} 