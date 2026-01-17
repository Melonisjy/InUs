/**
 * 온보딩 레이아웃
 * 
 * 온보딩 단계에서만 필요한 특별한 레이아웃이 있다면 여기에.
 * 기본적으로는 app/layout.tsx를 사용.
 */

import { ReactNode } from 'react'

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
