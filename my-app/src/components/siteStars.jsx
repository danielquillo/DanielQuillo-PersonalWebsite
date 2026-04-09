import { useEffect, useRef } from "react"

export default function SiteStars() {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let reduceMotion = mediaQuery.matches

    const handleMotionPreferenceChange = (e) => {
      reduceMotion = e.matches
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionPreferenceChange)
    } else {
      mediaQuery.addListener(handleMotionPreferenceChange)
    }

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    let animationFrameId = 0
    let stars = []
    let width = 0
    let height = 0
    let lastTime = 0
    let nextCometAt = 0

    const field = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      targetX: 0,
      targetY: 0,
    }

    const comet = {
      active: false,
      startTime: 0,
      duration: 0,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      headRadius: 0,
      tailLength: 0,
    }

    const STAR_COLOR = "255,255,255"
    const ACCENT_COLOR = "122,162,255"

    function scheduleNextComet(now) {
      nextCometAt = now + 16000 + Math.random() * 18000
    }

    function shouldShowComets() {
      return window.scrollY < Math.min(window.innerHeight * 0.9, 900)
    }

    function spawnComet(now) {
      const startX = width * (0.72 + Math.random() * 0.18)
      const startY = height * (0.06 + Math.random() * 0.16)

      const travelX = width * (0.2 + Math.random() * 0.14)
      const travelY = height * (0.12 + Math.random() * 0.14)

      comet.active = true
      comet.startTime = now
      comet.duration = 950 + Math.random() * 300
      comet.startX = startX
      comet.startY = startY
      comet.endX = startX - travelX
      comet.endY = startY + travelY
      comet.headRadius = 1.4 + Math.random() * 1.0
      comet.tailLength = 70 + Math.random() * 35
    }

    function createStars() {
      const density = window.innerWidth < 768 ? 1 / 5200 : 1 / 4300
      const count = Math.floor(width * height * density)

      stars = Array.from({ length: count }, () => ({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: Math.random() * 1.8 + 0.45,
        // alpha: Math.random() * 0.38 + 0.14,
        alpha: Math.random() * 0.65 + 0.3,
        speed: Math.random() * 0.12 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        // accent: Math.random() < 0.08,
        accent: Math.random() < 0.14,
        depth: 0.35 + Math.random() * 0.95,
        // depth: 0.18 + Math.random() * 0.55,
      }))
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      createStars()
    }

    function setTargetFromPointer(clientX, clientY) {
      const nx = (clientX / width - 0.5) * 2
      const ny = (clientY / height - 0.5) * 2

      field.targetX = Math.max(-1, Math.min(1, nx)) * 8
      field.targetY = Math.max(-1, Math.min(1, ny)) * 5
    }

    function handlePointerMove(e) {
      setTargetFromPointer(e.clientX, e.clientY)
    }

    function handlePointerLeave() {
      field.targetX = 0
      field.targetY = 0
    }

    function drawComet(now) {
      if (!comet.active) return

      const t = (now - comet.startTime) / comet.duration
      if (t >= 1) {
        comet.active = false
        return
      }

      const eased = 1 - Math.pow(1 - t, 3)
      const x = comet.startX + (comet.endX - comet.startX) * eased
      const y = comet.startY + (comet.endY - comet.startY) * eased

      const dx = comet.endX - comet.startX
      const dy = comet.endY - comet.startY
      const len = Math.hypot(dx, dy) || 1
      const ux = dx / len
      const uy = dy / len

      const tailX = x - ux * comet.tailLength
      const tailY = y - uy * comet.tailLength

      let alpha = 1
      if (t < 0.15) alpha = t / 0.15
      else if (t > 0.8) alpha = (1 - t) / 0.2
      alpha *= 0.45

      const gradient = ctx.createLinearGradient(x, y, tailX, tailY)
      gradient.addColorStop(0, `rgba(255,255,255,${alpha})`)
      gradient.addColorStop(0.3, `rgba(190,220,255,${alpha * 0.55})`)
      gradient.addColorStop(1, "rgba(122,162,255,0)")

      ctx.save()
      ctx.lineCap = "round"
      ctx.lineWidth = comet.headRadius * 1.2
      ctx.strokeStyle = gradient
      ctx.shadowBlur = 8
      ctx.shadowColor = `rgba(190,220,255,${alpha})`

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(tailX, tailY)
      ctx.stroke()

      ctx.beginPath()
      ctx.fillStyle = `rgba(255,255,255,${Math.min(1, alpha + 0.12)})`
      ctx.arc(x, y, comet.headRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    function draw(time) {
      if (!lastTime) {
        lastTime = time
        nextCometAt = time + 3500
      }

      const dt = Math.min((time - lastTime) / 1000, 0.033)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      if (reduceMotion) {
        field.x += (field.targetX - field.x) * 0.05
        field.y += (field.targetY - field.y) * 0.05
        field.vx = 0
        field.vy = 0
      } else {
        const stiffness = 65
        const damping = 14

        const ax = (field.targetX - field.x) * stiffness - field.vx * damping
        const ay = (field.targetY - field.y) * stiffness - field.vy * damping

        field.vx += ax * dt
        field.vy += ay * dt
        field.x += field.vx * dt
        field.y += field.vy * dt
      }

      for (const star of stars) {
        const driftY = reduceMotion
          ? 0
          : Math.sin(time * 0.00018 + star.twinkleOffset) * star.speed * 3.5

        const x = star.baseX + field.x * star.depth
        const y = star.baseY + driftY + field.y * star.depth

        if (x < -10 || x > width + 10 || y < -10 || y > height + 10) continue

        const twinkle = reduceMotion
          ? 1
          : 0.92 + Math.sin(time * 0.0012 + star.twinkleOffset) * 0.08

        const alpha = star.alpha * twinkle
        const color = star.accent ? ACCENT_COLOR : STAR_COLOR

        if (star.accent) {
          ctx.shadowBlur = 6
          ctx.shadowColor = `rgba(${ACCENT_COLOR}, ${alpha * 0.45})`
        } else {
          ctx.shadowBlur = 0
        }

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${alpha})`
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 0

      if (
        !reduceMotion &&
        shouldShowComets() &&
        !comet.active &&
        time >= nextCometAt
      ) {
        spawnComet(time)
        scheduleNextComet(time)
      }

      if (!reduceMotion && shouldShowComets()) {
        drawComet(time)
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    function triggerComet() {
        const now = performance.now()
        spawnComet(now)
        scheduleNextComet(now)
    }
    function handleKeyDown(e) {
        const tag = document.activeElement?.tagName
        if (tag === "INPUT" || tag === "TEXTAREA") return
        if (e.repeat) return
        if (e.key.toLowerCase() === "c") {
            triggerComet()
        }
    }

    resize()
    animationFrameId = requestAnimationFrame(draw)

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("resize", resize)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("resize", resize)
      window.removeEventListener("keydown", handleKeyDown)

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionPreferenceChange)
      } else {
        mediaQuery.removeListener(handleMotionPreferenceChange)
      }
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(122,162,255,0.08),transparent_28%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.08),rgba(2,6,23,0.2)_45%,rgba(2,6,23,0.32))]" />
    </div>
  )
}
