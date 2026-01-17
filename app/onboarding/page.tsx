/**
 * 온보딩 페이지
 * 
 * "지금 혼자 버티고 있나요?"라는 질문으로 시작하는 첫 경험.
 * 사용자를 서비스의 흐름으로 자연스럽게 안내.
 */

import { Screen } from '@/shared/ui/layouts'
import styles from './OnboardingPage.module.css'

export default function OnboardingPage() {
  return (
    <Screen>
      <div className={styles.container}>
        <p className={styles.text}>지금 혼자 버티고 있나요?</p>
      </div>
    </Screen>
  )
}
