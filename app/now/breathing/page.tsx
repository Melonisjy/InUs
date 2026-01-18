'use client'

/**
 * 호흡 페이지
 * 
 * 사용자가 잠시 멈추고 호흡에 집중할 수 있는 공간.
 * 천천히 숨을 쉬며 현재 순간에 머무르도록 안내.
 */

import { useEffect } from 'react'
import { Screen } from '@/shared/ui/layouts'
import BreathingCircle from './BreathingCircle'
import { useBreathingState, PHASE_DURATION, PHASE_TEXT } from './useBreathingState'
import styles from './BreathingPage.module.css'

export default function BreathingPage() {
  const { phase, isRunning, goToNextPhase, start } = useBreathingState()

  // 페이지 진입 시 자동 시작
  useEffect(() => {
    start()
  }, [start])

  // 상태 전환 타이머
  useEffect(() => {
    if (!isRunning) return

    const timer = setTimeout(() => {
      goToNextPhase()
    }, PHASE_DURATION[phase])

    return () => clearTimeout(timer)
  }, [phase, isRunning, goToNextPhase])

  return (
    <Screen className={styles.breathingScreen}>
      {/* 상단: 안내 문구 영역 */}
      <header className={styles.header}>
        <p className={styles.guideText}>{PHASE_TEXT[phase]}</p>
      </header>

      {/* 중앙: 애니메이션 컨테이너 */}
      <main className={styles.main}>
        <div className={styles.animationContainer}>
          <BreathingCircle phase={phase} isRunning={isRunning} />
        </div>
      </main>

      {/* 하단: 여백 */}
      <footer className={styles.footer} />
    </Screen>
  )
}
