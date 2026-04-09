import { useEffect, useRef } from "react"

export default function HeroStars() {
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
      nextCometAt = now + 12000 + Math.random() * 12000
    }

    function spawnComet(now) {
        // CHANGE:  width * (0.72 + Math.random() * 0.22)   -> width * (0.72 + Math.random() * 0.2)
        //          height * (0.08 + Math.random() * 0.22)  -> height * (0.08 + Math.random() * 0.2)
      const startX = width * (0.72 + Math.random() * 0.2)
      const startY = height * (0.08 + Math.random() * 0.22)

      // CHANGE:    width * (0.22 + Math.random() * 0.18)   -> width * (0.22 + Math.random() * 0.16)
      //            height * (0.16 + Math.random() * 0.2)   -> height * (0.16 + Math.random() * 0.2)
      const travelX = width * (0.22 + Math.random() * 0.16)
      const travelY = height * (0.16 + Math.random() * 0.18)

      comet.active = true
      comet.startTime = now
      // CHANGE: 1100 + Math.random() * 450 -> 1000 + Math.random() * 350
      comet.duration = 1000 + Math.random() * 350
      comet.startX = startX
      comet.startY = startY
      comet.endX = startX - travelX
      comet.endY = startY + travelY
      // CHANGE: 1.8 + Math.random() * 1.3 -> 1.6 + Math.random() * 1.2
      comet.headRadius = 1.6 + Math.random() * 1.2
      // CHANGE: 90 + Math.random() * 50 -> 80 + Math.random() * 40
      comet.tailLength = 80 + Math.random() * 40
    }

    function createStars() {
        // CHANGE: window.innerWidth < 768 ? 1 / 5200 : 1 / 4000 -> window.innerWidth < 768 ? 1 / 5600 : 1 / 4300
      const density = window.innerWidth < 768 ? 1 / 5600 : 1 / 4300
      const count = Math.floor(width * height * density)

      stars = Array.from({ length: count }, () => {
        const biasRight = Math.random() < 0.65
        const x = biasRight
          ? width * 0.35 + Math.random() * width * 0.65
          : Math.random() * width

        // const y = Math.random() * height
        // const radius = Math.random() * 2.2 + 0.5
        // const alpha = Math.random() * 0.7 + 0.3
        // const speed = Math.random() * 0.12 + 0.02
        // const twinkleOffset = Math.random() * Math.PI * 2
        // const accent = Math.random() < 0.18
        // const depth = 0.35 + Math.random() * 1.0

        return {
          baseX: x,
          baseY: Math.random() * height,
          radius: Math.random() * 1.8 + 0.45,
          alpha: Math.random() * 0.65 + 0.3,
          speed: Math.random() * 0.12 + 0.02,
          twinkleOffset: Math.random() * Math.PI * 2,
          accent: Math.random() < 0.14,
          depth: 0.35 + Math.random() * 0.95,
        }
      })
    }

    function resize() {
      const rect = wrapper.getBoundingClientRect()
      width = rect.width
      height = rect.height

      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      createStars()
    }

    function setTargetFromPointer(clientX, clientY) {
      const rect = wrapper.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      const nx = ((clientX - rect.left) / rect.width - 0.5) * 2
      const ny = ((clientY - rect.top) / rect.height - 0.5) * 2

    // const clampedX = Math.max(-1, Math.min(1, nx))
    // const clampedY = Math.max(-1, Math.min(1, ny))
    // field.targetX = clampedX * 14
    // field.targetY = clampedY * 10

      field.targetX = Math.max(-1, Math.min(1, nx)) * 12
      field.targetY = Math.max(-1, Math.min(1, ny)) * 8
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
      alpha *= 0.7

      const gradient = ctx.createLinearGradient(x, y, tailX, tailY)
      gradient.addColorStop(0, `rgba(255,255,255,${alpha})`)
      gradient.addColorStop(0.25, `rgba(190,220,255,${alpha * 0.7})`)
      gradient.addColorStop(1, "rgba(122,162,255,0)")

      ctx.save()
      ctx.lineCap = "round"
      ctx.lineWidth = comet.headRadius * 1.35
      ctx.strokeStyle = gradient
      // CHANGE: ctx.shadowBlur = 12 -> ctx.shadowBlur = 10
      ctx.shadowBlur = 10
      ctx.shadowColor = `rgba(190,220,255,${alpha})`

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(tailX, tailY)
      ctx.stroke()

      ctx.beginPath()
      ctx.fillStyle = `rgba(255,255,255,${Math.min(1, alpha + 0.2)})`
      ctx.arc(x, y, comet.headRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    function draw(time) {
      if (!lastTime) {
        lastTime = time
        nextCometAt = time + 3000 + Math.random() * 1500
      }

      const dt = Math.min((time - lastTime) / 1000, 0.033)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      if (reduceMotion) {
        field.x += (field.targetX - field.x) * 0.08
        field.y += (field.targetY - field.y) * 0.08
        field.vx = 0
        field.vy = 0
      } else {
        // CHANGE:  const stiffness = 110   -> const stiffness = 95
        //          const damping = 18      -> const damping = 16  
        const stiffness = 110
        const damping = 18

        const ax = (field.targetX - field.x) * stiffness - field.vx * damping
        const ay = (field.targetY - field.y) * stiffness - field.vy * damping

        field.vx    += ax * dt
        field.vy    += ay * dt
        field.x     += field.vx * dt
        field.y     += field.vy * dt
      }

      for (const star of stars) {
        const driftY = reduceMotion
          ? 0
          : Math.sin(time * 0.00025 + star.twinkleOffset) * star.speed * 5

        const x = star.baseX + field.x * star.depth
        const y = star.baseY + driftY + field.y * star.depth

        const twinkle = reduceMotion
          ? 1
          : 0.82 + Math.sin(time * 0.0017 + star.twinkleOffset) * 0.14

        const alpha = star.alpha * twinkle
        const color = star.accent ? ACCENT_COLOR : STAR_COLOR

        if (star.accent) {
            ctx.shadowBlur = 8
            ctx.shadowColor = `rgba(${ACCENT_COLOR}, ${alpha * 0.75})`
        } else {
            ctx.shadowBlur = 0
        }

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${alpha})`
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 0

      if (!reduceMotion && !comet.active && time >= nextCometAt) {
        spawnComet(time)
        scheduleNextComet(time)
      }

      if (!reduceMotion) {
        drawComet(time)
      }

      animationFrameId = requestAnimationFrame(draw)
    }
    
    // TEMPORARY: Trigger a comet on "C" key press for testing purposes. Can be removed later.
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

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(wrapper)

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("resize", resize)

    //TEMPORARY: Add keydown listener for triggering comet with "C" key. Can be removed later.
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()

      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("resize", resize)
      window.removeEventListener("keydown", handleKeyDown) // TEMPORARY: Remove keydown listener on cleanup

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
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(122,162,255,0.08),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.18),transparent_22%,transparent_78%,rgba(2,6,23,0.22))]" />
    </div>
  )
}
