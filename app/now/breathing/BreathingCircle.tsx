'use client'

/**
 * BreathingCircle
 * 
 * 호흡 가이드 애니메이션 컴포넌트.
 * 
 * 경로:
 * 1. inhale: 왼쪽 → 오른쪽 위 (대각선 상승)
 * 2. hold: 오른쪽 위 → 오른쪽 (수평 이동)
 * 3. exhale: 오른쪽 → 왼쪽 (시작점 복귀)
 * 
 * CSS transform 선택 이유:
 * - 단순한 위치 이동에 적합
 * - GPU 가속으로 부드러운 애니메이션
 * - SVG보다 구현이 간결
 */

import { useState, useEffect } from 'react'
import { BreathingPhase, PHASE_DURATION } from './useBreathingState'
import styles from './BreathingCircle.module.css'

interface BreathingCircleProps {
  phase: BreathingPhase
  isRunning: boolean
}

export default function BreathingCircle({ phase, isRunning }: BreathingCircleProps) {
  const [isReady, setIsReady] = useState(false)

  // 마운트 후 약간의 딜레이를 주어 시작 위치에서 애니메이션 시작
  useEffect(() => {
    if (isRunning && !isReady) {
      const timer = requestAnimationFrame(() => {
        setIsReady(true)
      })
      return () => cancelAnimationFrame(timer)
    }
  }, [isRunning, isReady])

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.circle} ${isReady ? styles[phase] : styles.start}`}
        style={{
          transitionDuration: isReady ? `${PHASE_DURATION[phase]}ms` : '0ms'
        }}
      />
    </div>
  )
}
