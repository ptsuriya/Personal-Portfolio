'use client'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface TextTypeProps {
  texts: string[]        // array ของ text ที่จะ type วนซ้ำ
  className?: string
  speed?: number         // ms per character
  pauseDuration?: number // ms หยุดก่อน erase
  cursorChar?: string
}

export default function TextType({
  texts,
  className = '',
  speed = 60,
  pauseDuration = 1800,
  cursorChar = '|',
}: TextTypeProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView])

  useEffect(() => {
    if (!started) return
    const current = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1))
        } else {
          setIsDeleting(false)
          setTextIndex((i) => (i + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, textIndex, texts, speed, pauseDuration, started])

  return (
    <span ref={ref} className={className}>
      {displayed}
      <span className="animate-pulse opacity-70">{cursorChar}</span>
    </span>
  )
}
