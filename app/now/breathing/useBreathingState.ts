/**
 * useBreathingState
 * 
 * 호흡 가이드의 상태 흐름을 관리하는 훅.
 * 
 * 상태 순환:
 * inhale(4초) → hold(4초) → exhale(4초) → inhale...
 * 
 * useState 선택 이유:
 * - 페이지 로컬 상태로 충분
 * - 다른 컴포넌트와 공유 불필요
 * - 페이지 이탈 시 초기화가 적절
 */

import { useState, useCallback } from 'react'

/** 호흡 단계 */
export type BreathingPhase = 'inhale' | 'hold' | 'exhale'

/** 각 단계별 지속 시간 (밀리초) */
export const PHASE_DURATION: Record<BreathingPhase, number> = {
  inhale: 4000,
  hold: 4000,
  exhale: 4000,
}

/** 각 단계별 안내 문구 */
export const PHASE_TEXT: Record<BreathingPhase, string> = {
  inhale: '공 올라가는 동안 숨 들이쉬기',
  hold: '잠깐 멈추기',
  exhale: '공 내려가는 동안 숨 내쉬기',
}

/** 상태 전환 순서 */
const PHASE_SEQUENCE: BreathingPhase[] = ['inhale', 'hold', 'exhale']

/** 다음 단계 반환 */
function getNextPhase(current: BreathingPhase): BreathingPhase {
  const currentIndex = PHASE_SEQUENCE.indexOf(current)
  const nextIndex = (currentIndex + 1) % PHASE_SEQUENCE.length
  return PHASE_SEQUENCE[nextIndex]
}

interface BreathingState {
  /** 현재 호흡 단계 */
  phase: BreathingPhase
  /** 호흡 가이드 실행 중 여부 */
  isRunning: boolean
  /** 다음 단계로 전환 */
  goToNextPhase: () => void
  /** 호흡 가이드 시작 */
  start: () => void
  /** 호흡 가이드 정지 */
  stop: () => void
  /** 초기 상태로 리셋 */
  reset: () => void
}

const INITIAL_PHASE: BreathingPhase = 'inhale'

export function useBreathingState(): BreathingState {
  const [phase, setPhase] = useState<BreathingPhase>(INITIAL_PHASE)
  const [isRunning, setIsRunning] = useState(false)

  const goToNextPhase = useCallback(() => {
    setPhase((current) => getNextPhase(current))
  }, [])

  const start = useCallback(() => {
    setIsRunning(true)
  }, [])

  const stop = useCallback(() => {
    setIsRunning(false)
  }, [])

  const reset = useCallback(() => {
    setPhase(INITIAL_PHASE)
    setIsRunning(false)
  }, [])

  return {
    phase,
    isRunning,
    goToNextPhase,
    start,
    stop,
    reset,
  }
}
