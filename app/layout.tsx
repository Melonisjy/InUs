/**
 * 루트 레이아웃
 * 
 * 전체 앱의 최상위 레이아웃.
 * 향후 전역 스타일, 폰트, 메타데이터가 들어갈 자리.
 * 조용하고 미니멀한 톤을 유지하기 위한 기본 설정.
 */

import { ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
