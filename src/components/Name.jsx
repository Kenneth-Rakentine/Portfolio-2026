import { useEffect, useRef } from 'react'

function Name() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let animationId

    function resize() {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor(scatter) {
        this.reset(scatter)
      }

      reset(scatter) {
        const w = canvas.width
        const h = canvas.height

        // Spawn zone: right portion of the name section (~62-90% x), matching red circle area
        this.x = w * (0.62 + Math.random() * 0.28)
        this.y = h * (0.12 + Math.random() * 0.76)

        // Velocity: spray leftward with wide angular spread, very slow (dust-like)
        // angle range: ~60° to ~300° (left hemisphere with top/bottom spread)
        const angle = Math.PI * (0.45 + Math.random() * 1.1)
        const speed = 0.07 + Math.random() * 0.22
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed * 0.55 + (Math.random() - 0.5) * 0.05

        // Size: starts tiny like dust, grows slightly (moving closer to viewer)
        this.startSize = 0.2 + Math.random() * 0.4
        this.endSize   = this.startSize + 0.35 + Math.random() * 0.65
        this.size = this.startSize

        // Lifetime
        this.maxLife = 180 + Math.random() * 240
        this.life    = scatter ? Math.random() * this.maxLife : 0

        // Max opacity — keep very subtle, like real dust
        this.maxAlpha = 0.07 + Math.random() * 0.20

        // Light gray, slightly varied per particle
        const s = 155 + Math.floor(Math.random() * 85)
        this.color = `${s},${s},${s}`
      }

      update() {
        this.life++
        this.x += this.vx
        this.y += this.vy

        // Gentle random float (dust drifting)
        this.vx += (Math.random() - 0.5) * 0.004
        this.vy += (Math.random() - 0.5) * 0.004

        const t = this.life / this.maxLife

        // Grow from start to end size over lifetime
        this.size = this.startSize + (this.endSize - this.startSize) * t

        // Fade in quickly, hold, then fade out in last 35% of life
        const fadeIn  = Math.min(this.life / 25, 1)
        const fadeOut = t > 0.65 ? 1 - (t - 0.65) / 0.35 : 1

        // Fade out as particles approach the name text (left ~42% of canvas)
        const nameBoundary = canvas.width * 0.42
        const xFade = this.x < nameBoundary
          ? Math.max(0, (this.x - canvas.width * 0.05) / (nameBoundary - canvas.width * 0.05))
          : 1

        this.alpha = this.maxAlpha * fadeIn * fadeOut * xFade

        // Reset when expired or out of canvas bounds
        if (
          this.life >= this.maxLife ||
          this.x < 0 || this.x > canvas.width ||
          this.y < 0 || this.y > canvas.height
        ) {
          this.reset(false)
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color},${this.alpha.toFixed(3)})`
        ctx.fill()
      }
    }

    // Create particles with staggered initial lifetimes so they don't all spawn at once
    const PARTICLE_COUNT = 110
    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(true))
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.update()
        p.draw()
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className='namecontainer'>
      <canvas ref={canvasRef} className='dustCanvas' />
      <div className='nameImgBkg'>
        <h1 className='nameTxt'>
          KENNETH<br />RAKENTINE
        </h1>
        <p className='nameSubtxt'>SECURITY · NETWORKING · SYSTEMS</p>
      </div>
    </div>
  )
}

export default Name