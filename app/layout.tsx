/**
 * 루트 레이아웃
 * 
 * Next.js App Router의 최상위 레이아웃.
 * HTML 문서 구조와 메타데이터를 담당.
 * 
 * 역할:
 * - HTML 문서 기본 구조 (html, head, body)
 * - 모바일 뷰포트 메타 태그 설정
 * - 전역 CSS 연결
 * - AppLayout으로 전체 앱 구조 감싸기
 */

import { ReactNode } from 'react'
import { AppLayout } from '@/shared/ui/layouts'
import './globals.css'

export const metadata = {
  title: 'InUs',
  description: '불안을 공유되는 경험으로',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  )
}
