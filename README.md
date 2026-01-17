# InUs

불안을 "해결해야 할 문제"가 아니라 "공유되는 경험"으로 다루는 서비스.

## 프로젝트 구조

### `/app`
Next.js App Router 기반 페이지 구조. 서비스의 흐름이 그대로 드러남:
- `onboarding/` - 첫 경험
- `now/` - 상태 선언 및 기능 제공
- `response/` - 상태 확인

### `/features`
의미 단위로 구성된 기능 모음:
- `passing-through/` - '지금 넘기기' 기능들 (추가/교체 용이)
- `state-declaration/` - 상태 선언 로직
- `state-check/` - 상태 확인 로직

### `/shared`
공통 요소들이 들어갈 자리:
- `ui/` - 디자인 시스템 기초 컴포넌트
- `animations/` - 애니메이션 유틸리티
- `constants/` - 상수 정의

### `/stores`
Zustand 기반 전역 상태 관리 (최소한):
- `flow.ts` - 페이지 흐름 상태

### `/types`
TypeScript 타입 정의

## 설계 원칙

1. **의미 단위 중심**: 기능이 아닌 의미로 폴더를 구성
2. **흐름 명확성**: 페이지 구조가 서비스 흐름을 드러냄
3. **확장 용이성**: '지금 넘기기' 기능 추가가 쉬움
4. **미니멀**: 조용함과 여백을 고려한 구조
5. **최소 상태**: 전역 상태는 흐름 관리에만 집중

## 향후 확장

- **디자인 시스템**: `shared/ui/`에 컴포넌트 추가
- **애니메이션**: `shared/animations/`에 효과 추가
- **기능 추가**: `features/passing-through/`에 새 기능 폴더 생성
- **스타일링**: Tailwind CSS 등 도입 시 `shared/ui/`와 통합
