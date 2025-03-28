'use client'

import { useEffect } from 'react'

const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach((item) => observer.observe(item))

    // Cyber card animation
    const cyberCards = document.querySelectorAll('.cyber-card')
    cyberCards.forEach((card) => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
      })
    })

    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollAnimation 