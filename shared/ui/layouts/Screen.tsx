/**
 * Screen
 * 
 * 개별 화면(페이지)의 콘텐츠를 감싸는 컨테이너.
 * 페이지별 콘텐츠 영역의 기본 구조를 제공.
 * 
 * 역할:
 * - 화면 콘텐츠의 패딩과 여백 관리
 * - 세로 스크롤 가능한 영역 제공
 * - 페이지 전환 시 애니메이션이 들어갈 자리 확보
 * - 각 페이지의 독립적인 레이아웃 영역
 */

import { ReactNode } from 'react'
import styles from './Screen.module.css'

interface ScreenProps {
  children: ReactNode
  className?: string
}

export default function Screen({ children, className = '' }: ScreenProps) {
  return (
    <div className={`${styles.screen} ${className}`}>
      {children}
    </div>
  )
}
