<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref(null)

let ctx = null
let animationFrameId = null
let particles = []
let lastX = 0
let lastY = 0

// Your brand palette: pink, blue, warm amber, emerald, dark neutral
const COLORS = ['#ff4d8d', '#3b82f6', '#38bdf8', '#f59e0b', '#10b981', '#1f2937']

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    // Small confetti dots (2px to 4.5px radius)
    this.radius = Math.random() * 2.5 + 2
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]

    // Slight spread in random directions
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 1.8 + 0.6
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed + 0.5 // subtle natural downward drift

    this.alpha = 1
    this.decay = Math.random() * 0.025 + 0.015 // fades out smoothly
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vx *= 0.98 // gentle air friction
    this.vy *= 0.98
    this.alpha -= this.decay
  }

  draw(context) {
    context.save()
    context.globalAlpha = Math.max(0, this.alpha)
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    context.fillStyle = this.color
    context.fill()
    context.restore()
  }
}

function resizeCanvas() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

function handlePointerMove(e) {
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  const dist = Math.hypot(dx, dy)

  // Distance throttle: only burst when the pointer has traveled at least 28px
  if (dist > 28) {
    lastX = e.clientX
    lastY = e.clientY

    // Spawn 2 to 4 subtle dots per spurt
    const count = Math.floor(Math.random() * 3) + 2
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(e.clientX, e.clientY))
    }
  }
}

function loop() {
  if (!ctx || !canvasRef.value) return

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.update()
    p.draw(ctx)

    if (p.alpha <= 0) {
      particles.splice(i, 1)
    }
  }

  animationFrameId = requestAnimationFrame(loop)
}

onMounted(() => {
  // Only activate on pointer devices (avoids battery/touch drag on mobile)
  if (window.matchMedia('(pointer: fine)').matches) {
    ctx = canvasRef.value.getContext('2d')
    resizeCanvas()

    window.addEventListener('resize', resizeCanvas, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    loop()
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('pointermove', handlePointerMove)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-50 select-none"
    aria-hidden="true"
  />
</template>
