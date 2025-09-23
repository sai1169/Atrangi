'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
  life: number
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)

  const colors = ['#FF6B9D', '#4ECDC4', '#FFD93D']

  useEffect(() => {
    // Detect mobile device
    setIsMobile(window.innerWidth < 768)
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      size: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1,
      life: 1
    })

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.008
        particle.opacity = particle.life * 0.5
        
        return particle.life > 0 && 
               particle.x > -20 && particle.x < canvas.width + 20 &&
               particle.y > -20 && particle.y < canvas.height + 20
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      
      // Reduce particle count on mobile
      const maxParticles = isMobile ? 15 : 25
      const spawnRate = isMobile ? 0.05 : 0.08
      
      if (Math.random() < spawnRate && particlesRef.current.length < maxParticles) {
        particlesRef.current.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        )
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize with fewer particles on mobile
    const initialCount = isMobile ? 8 : 12
    for (let i = 0; i < initialCount; i++) {
      particlesRef.current.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      )
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}