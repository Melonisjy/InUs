'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Screen } from '@/shared/ui/layouts'
import styles from './OnboardingPage.module.css'

// 랜덤으로 이동할 페이지 목록
const NOW_PAGES = [
  '/now/breathing',
  '/now/grounding', 
  '/now/affirmation'
] as const

export default function OnboardingPage() {
  const router = useRouter()
  const [showButton, setShowButton] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  
  const fullText = '지금 혼자 버티고 있나요?'

  useEffect(() => {
    let currentIndex = 0
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // 텍스트 애니메이션 완료 후 버튼 표시
        setTimeout(() => {
          setShowButton(true)
        }, 500) // 0.5초 딜레이 후 버튼 표시
      }
    }, 100) // 100ms 간격으로 한 글자씩

    return () => clearInterval(typingInterval)
  }, [])

  const handleButtonClick = () => {
    // 랜덤으로 페이지 선택
    const randomPage = NOW_PAGES[Math.floor(Math.random() * NOW_PAGES.length)]
    router.push(randomPage)
  }

  return (
    <Screen>
      <div className={styles.container}>
        <p className={styles.text}>{displayedText}</p>
        <button 
          className={`${styles.button} ${showButton ? styles.visible : styles.hidden}`}
          onClick={handleButtonClick}
        >
          네, 조금 버거워요
        </button>
      </div>
    </Screen>
  )
}