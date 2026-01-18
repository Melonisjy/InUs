/**
 * 지금 페이지 (인덱스)
 * 
 * /now 경로 직접 접근 시 랜덤으로 서브 페이지로 리다이렉트.
 * 실제 컨텐츠는 breathing, grounding, affirmation 서브 페이지에서 제공.
 */

import { redirect } from 'next/navigation'

const NOW_PAGES = [
  '/now/breathing',
  '/now/grounding',
  '/now/affirmation'
] as const

export default function NowPage() {
  // 랜덤으로 서브 페이지로 리다이렉트
  const randomPage = NOW_PAGES[Math.floor(Math.random() * NOW_PAGES.length)]
  redirect(randomPage)
}
