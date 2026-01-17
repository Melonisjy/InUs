/**
 * AppLayout
 * 
 * 전체 앱을 감싸는 최상위 레이아웃 컨테이너.
 * 모바일 화면 기준으로 중앙 정렬된 컨테이너 구조를 제공.
 * 
 * 역할:
 * - 모바일 화면에 맞는 최대 너비 설정
 * - 중앙 정렬로 앱처럼 보이는 구조 제공
 * - PC에서도 깨지지 않는 최소한의 대응
 * - 전체 앱의 배경과 기본 구조 담당
 */

import { ReactNode } from 'react'
import styles from './AppLayout.module.css'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.appLayout}>
      {children}
    </div>
  )
}
