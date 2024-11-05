// hooks/useVideo.ts
import { useRef, useState } from 'react'

const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isEnlarged, setIsEnlarged] = useState(false)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleClick = () => {
    setIsEnlarged((prev) => !prev)
  }

  return {
    videoRef,
    isEnlarged,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  }
}

export default useVideo
