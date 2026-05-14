'use client'

import { useEffect, useState, useRef } from 'react'

interface ImageSequenceProps {
  frameCount?: number
  frameStart?: number
  frameEnd?: number
  pathPrefix?: string
  extension?: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
  onFrameChange?: (frame: number) => void
}

export default function ImageSequence({
  frameCount = 240,
  frameStart = 1,
  frameEnd = 240,
  pathPrefix = '/sequence/ezgif-frame-',
  extension = 'jpg',
  className = '',
  autoplay = true,
  loop = true,
  speed = 24,
  onFrameChange
}: ImageSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(frameStart)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const animationRef = useRef<number>()
  const lastFrameTimeRef = useRef<number>(0)

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = []
      
      for (let i = frameStart; i <= frameEnd; i++) {
        const img = new Image()
        const frameNumber = String(i).padStart(3, '0')
        const imgPath = `${pathPrefix}${frameNumber}.${extension}`
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages[i - frameStart] = img
            resolve(true)
          }
          img.onerror = () => {
            console.warn(`Failed to load: ${imgPath}`)
            resolve(false)
          }
          img.src = imgPath
        })
      }
      
      imagesRef.current = loadedImages
      setAllImagesLoaded(true)
      
      if (canvasRef.current && loadedImages[0]) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (ctx) {
          canvas.width = loadedImages[0].width
          canvas.height = loadedImages[0].height
          ctx.drawImage(loadedImages[0], 0, 0)
        }
      }
    }
    
    loadImages()
  }, [frameStart, frameEnd, pathPrefix, extension])

  useEffect(() => {
    if (!allImagesLoaded || !isPlaying) return

    const frameInterval = 1000 / speed
    let frameIndex = currentFrame - frameStart

    const animate = (timestamp: number) => {
      if (!isPlaying) return
      
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp
        requestAnimationFrame(animate)
        return
      }
      
      const elapsed = timestamp - lastFrameTimeRef.current
      
      if (elapsed >= frameInterval) {
        let nextFrame = frameIndex + 1
        lastFrameTimeRef.current = timestamp
        
        if (nextFrame >= (frameEnd - frameStart + 1)) {
          if (loop) {
            nextFrame = 0
          } else {
            setIsPlaying(false)
            return
          }
        }
        
        frameIndex = nextFrame
        const newFrame = frameStart + frameIndex
        setCurrentFrame(newFrame)
        
        if (canvasRef.current && imagesRef.current[frameIndex]) {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')
          if (ctx) {
            canvas.width = imagesRef.current[frameIndex].width
            canvas.height = imagesRef.current[frameIndex].height
            ctx.drawImage(imagesRef.current[frameIndex], 0, 0)
          }
        }
        
        if (onFrameChange) {
          onFrameChange(newFrame)
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [allImagesLoaded, isPlaying, loop, speed, frameStart, frameEnd])

  useEffect(() => {
    if (!allImagesLoaded || !canvasRef.current || !imagesRef.current[currentFrame - frameStart]) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const img = imagesRef.current[currentFrame - frameStart]
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
    }
  }, [currentFrame, allImagesLoaded, frameStart])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-xl shadow-lg"
        style={{ display: allImagesLoaded ? 'block' : 'none' }}
      />
      {!allImagesLoaded && (
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}