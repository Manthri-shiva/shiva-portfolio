import { useEffect, useRef } from 'react'

// A fixed, full-viewport canvas that paints the page background and
// expands soft violet rings outward from wherever the cursor moves.
export default function RippleField() {
  const canvasRef = useRef(null)
  const ripples = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, animationId
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
    }

    function addRipple(x, y) {
      ripples.current.push({ x, y, radius: 0, alpha: 0.45 })
      if (ripples.current.length > 40) ripples.current.shift()
    }

    let lastSpawn = 0
    function onMouseMove(e) {
      const now = performance.now()
      if (now - lastSpawn > 90) {
        addRipple(e.clientX, e.clientY)
        lastSpawn = now
      }
    }
    function onClick(e) {
      addRipple(e.clientX, e.clientY)
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      ripples.current.forEach((r) => {
        r.radius += 1.4
        r.alpha -= 0.008
      })
      ripples.current = ripples.current.filter((r) => r.alpha > 0)

      for (const r of ripples.current) {
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(124, 92, 255, ${r.alpha})`
        ctx.lineWidth = 1.2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius * 0.7, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(67, 229, 255, ${r.alpha * 0.6})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step)
      }
    }

    resize()
    step()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}