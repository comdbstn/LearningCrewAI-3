import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Learning Crew AI - AI 기반 맞춤형 학습 플랫폼',
  description: 'AI 기반 맞춤형 학습 경로 설계, 실시간 피드백 제공, 자동 콘텐츠 업데이트를 통해 최적의 학습 경험을 제공합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 