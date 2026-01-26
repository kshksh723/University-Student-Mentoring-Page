# 🚀 ENSUE: AI 기반 대학생 멘토링 페이지
>  AI 매칭을 활용한 멘토 추천, 멘토가 멘티에게 정보를 공유하고 개인별 학습 역량을 성장 시킬 수 있도록 관리 해주는 페이지입니다.

---
# 1. 프로젝트 개요 (Overview)
- **서비스명**: Ensue (Seeking for Mentorship)
- **슬로건**: Connecting Minds, Building Futures
- **로고 의미**
    - **책 아이콘**: 배움(Learning)과 지식의 토대 상징
    - **위로 향하는 화살표**: 멘토링을 통한 실력 향상과 미래 지향적(Future-oriented) 성장
    - **푸른색 계열 (파란색/녹색)**: 신뢰감, 젊은 에너지, 그리고 시각적인 안정감 제공
      <img width="744" height="253" alt="image" src="https://github.com/user-attachments/assets/e8b3bcc9-41fe-41ae-a8af-4b2b807a7dd4" />

---

## ✨ 프로젝트 소개 (Project Overview)

| 항목 | 상세 내용 |
| :--- | :--- |
| **프로젝트 목표** | 단과대별 특화 AI 멘토링 추천 및 대학생 멘토링 구축 |
| **핵심 차별점** | **AI Matching Score**를 통한 최적 매칭 및 **활동 일지(Activity Log)** 기반의 데이터 관리 |
| **UI/UX 설계** | [Figma](https://www.figma.com/proto/dd3ECSpNXxNJ8eU5Bt4yll/%EB%8C%80%ED%95%99%EC%83%9D-%EB%A9%98%ED%86%A0%EB%A7%81-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-2&p=f&t=kkabGK8LZoSlwSgy-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2) |
| **SRS**| [NOTION](https://relieved-robin-887.notion.site/2f39b331885280e6bff8df85c739a733?source=copy_link)
---

## 💻 기술 스택 (Tech Stack)

| 분야 | 핵심 기술 | 사용 목적 및 이유 |
| :--- | :--- | :--- |
| **Frontend** | **React, TS, Tailwind** | 컴포넌트 기반 설계로 Figma 디자인 정밀 구현 및 타입 안정성 확보 |
| **Backend** | **Spring Boot 3.x** | RESTful API 설계 및 비즈니스 로직의 모듈화와 확장성 고려 |
| **ORM** | **Spring Data JPA** | 객체 지향적 도메인 모델링 및 **N+1 문제 최적화**를 통한 조회 성능 개선 |
| **Dynamic Query** | **QueryDSL** | 컴파일 시점의 문법 체크 및 다중 필터(단과대/주제) 동적 쿼리 구현 |
| **Database** | **MariaDB** | 관계형 데이터 무결성 보장 및 효율적인 예약 트랜잭션 관리 |
| **AI 연동** | **Spring AI (OpenAI)** | LLM API 연동을 통한 **ENSUE-Bot** 추천 서비스 및 데이터 분석 |
| **Security** | **Spring Security** | JWT 기반 인증 및 **Role(멘토/멘티/관리자)**별 접근 권한 통제 |

---


# 2. 요구사항 명세서 (SRS)
### 2.1 사용자 기능 (UX Focus)
- **회원 관리**: OAuth 2.0(Kakao) 기반 간편 로그인 및 단과대/학번 프로필 설정
- **지능형 멘토링 매칭**: 
    - 단과대별 특화 필터링 시스템
    - AI 매칭 스코어 알고리즘을 통한 최적의 멘토 추천 가이드
- **활동 관리**: 
    - 멘토링 신청/수락/거절의 체계적인 워크플로우 구성
    - 이미지 최적화 업로드가 포함된 활동 일지 작성 기능
- **AI 챗봇 서비스**: 실시간 질문 답변 및 사용자 관심사 기반 해시태그 랭킹 집계
### 2.2 비기능 요구사항 (Technical Excellence)
- **가독성 & 디자인**: Pretendard 폰트와 모던한 디자인 시스템을 적용하여 세련된 UI/UX 제공
- **확장성**: Docker 컨테이너 기반 배포 및 컴포넌트 기반 아키텍처로 기능 확장 용이성 확보
- **성능 최적화**: Redis 캐싱을 통한 고빈도 조회(인기 멘토 등) 데이터 응답 속도 최적화
---
# 3. 시스템 설계서 (STS)
### 3.1 기술 스택 (Frontend Depth)
- **Frontend**: 
    - **React (Vite)**: 최신 번들러를 통한 빠른 HMR 및 개발 생산성 확보
    - **TypeScript**: 엄격한 타입 정의로 런타임 에러 방지 및 코드 안정성 강화
    - **Tailwind CSS**: 유틸리티 우선 방식을 활용한 일관된 디자인 시스템 및 반응형 UI 구현
- **Backend**: Spring Boot 3.x, Spring Data JPA, Spring Security
- **Database**: MariaDB, Redis (Cache)
- **AI & Infra**: Spring AI (OpenAI), AWS EC2/S3, Docker
### 3.2 데이터베이스 설계 (ERD Summary)
- `User` / `MentorProfile`: 역할(Mentor/Mentee) 중심의 프로필 관리
- `MentoringPost` / `Application`: 매칭 상태(Status) 기반 워크플로우 관리
- `ActivityLog`: 증빙 데이터 및 활동 이력 관리
---
# 4. 프론트엔드 아키텍처 (Frontend Engineering)
### 4.1 컴포넌트 설계 전략 (Folder Structure)
재사용성과 유지보수성을 극대화하기 위해 역할을 기준으로 폴더 구조를 엄격히 분리했습니다.
- **`common`**: SearchBar, Button 등 서비스 전역에서 사용되는 독립적인 UI 조각
- **`layout`**: Header, Sidebar 등 화면의 틀을 구성하고 반응형 레이아웃을 제어하는 뼈대 컴포넌트
- **`features`**: AiPickCard, MentorGrid 등 특정 비즈니스 로직과 데이터가 결합된 기능 단위 컴포넌트
### 4.2 반응형 인터페이스 (Responsive Design)
- **Hybrid Sidebar**: 데스크탑에서는 Sticky 방식으로 고정되어 편의성을 높이고, 모바일에서는 Overlay 방식으로 전환되어 화면 공간을 효율적으로 활용
- **Flexbox Layout 시스템**: 정적 높이 계산(`calc`) 대신 유연한 Flex 구조를 채택하여 다양한 기기 해상도(Mobile/Tablet/Desktop)에서 UI 깨짐 현상 방지
### 4.3 UI/UX 기술 포인트
- **Micro-interactions**: 부드러운 사이드바 슬라이드, 호버 애니메이션 등을 통한 사용자 피드백 강화
- **Accessibility**: 시맨틱 HTML 태그 준수 및 웹 접근성 고려

--- 
## 🏗️ 시스템 아키텍처 (Architecture)

<img width="645" height="520" alt="image" src="https://github.com/user-attachments/assets/60d2d6aa-c0bd-44c3-aee3-dfab5cdd9e1c" />


---
