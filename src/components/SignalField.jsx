import { useEffect, useRef } from 'react'

// A quiet field of drifting nodes connected by faint signal lines.
// Nodes brighten near the cursor, evoking an active neural network —
// a nod to Nexus AI without being a literal illustration of it.
export default function SignalField() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes, animationId
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.scale(DPR, DPR)
      const count = Math.min(70, Math.floor((width * height) / 18000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(124, 92, 255, ${0.12 * (1 - dist / 130)})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const dx = n.x - mouse.current.x
        const dy = n.y - mouse.current.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        const glow = distToMouse < 160 ? 1 - distToMouse / 160 : 0
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + glow * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = glow > 0
          ? `rgba(67, 229, 255, ${0.5 + glow * 0.5})`
          : 'rgba(139, 144, 179, 0.45)'
        ctx.fill()
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step)
      }
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    function onMouseLeave() {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    resize()
    step()
    if (prefersReducedMotion) {
      // draw a single static frame
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
