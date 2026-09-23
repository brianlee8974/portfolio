import { useLayoutEffect, useRef } from 'react'
import './SlideIn.css'

export default function SlideIn({ as: Tag = 'div', delay = 0, style, ...props }) {
  const elementRef = useRef(null)

  useLayoutEffect(() => {
    const element = elementRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Content stays visible when motion is disabled or observation is unavailable.
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          element.dataset.slideIn === 'pending' &&
          entries.some((entry) => entry.isIntersecting)
        ) {
          element.dataset.slideIn = 'visible'
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )

    function showImmediately() {
      element.dataset.slideIn = 'static'
      observer.disconnect()
    }

    function handleMotionChange(event) {
      if (event.matches) showImmediately()
    }

    element.dataset.slideIn = 'pending'
    observer.observe(element)
    // Keyboard users never have to wait for a focused control to appear.
    element.addEventListener('focusin', showImmediately)
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      element.removeEventListener('focusin', showImmediately)
      reducedMotion.removeEventListener('change', handleMotionChange)
      delete element.dataset.slideIn
    }
  }, [])

  return (
    <Tag
      ref={elementRef}
      style={{ ...style, '--slide-delay': `${delay}ms` }}
      {...props}
    />
  )
}
