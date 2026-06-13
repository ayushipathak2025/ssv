import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = { threshold: 0.15 }) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        // Disconnect after it triggers once to avoid repeat transitions
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [options])

  return [ref, isIntersecting]
}
