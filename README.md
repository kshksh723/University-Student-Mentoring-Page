# 🚀 ENSUE: AI 기반 대학생 멘토링 페이지
>  AI 매칭을 활용한 멘토 추천, 멘토가 멘티에게 정보를 공유하고 개인별 학습 역량을 성장 시킬 수 있도록 관리 해주는 페이지입니다.

---

## ✨ 프로젝트 소개 (Project Overview)

| 항목 | 상세 내용 |
| :--- | :--- |
| **프로젝트 목표** | 단과대별 특화 인터페이스 및 LLM 기반 가이드를 통한 대학생 멘토링 생태계 구축 |
| **핵심 차별점** | **AI Matching Score**를 통한 최적 매칭 및 **활동 일지(Activity Log)** 기반의 데이터 관리 |
| **UI/UX 설계** | [Figma](https://www.figma.com/proto/dd3ECSpNXxNJ8eU5Bt4yll/%EB%8C%80%ED%95%99%EC%83%9D-%EB%A9%98%ED%86%A0%EB%A7%81-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-2&t=0sOzl26nnDJhQONb-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) |
| **SRS**| [NOTION](https://relieved-robin-887.notion.site/2c59b33188528066bd3dcc715283ea0a?source=copy_link)
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

## ⚙️ 핵심 구현 기능 (Key Features)

### 1. 지능형 매칭 및 고도화된 검색
* **AI Matching Score:** 사용자의 관심사와 멘토의 전문 분야를 AI가 분석하여 적합도를 백분율(%)로 산출합니다.
* **QueryDSL 동적 필터:** 단과대 선택과 주제별 태그를 조합한 복합 검색 기능을 안정적으로 처리합니다.

### 2. 신뢰성 있는 예약 및 활동 시스템
* **Concurrency Control:** 중복 예약 방지를 위해 DB 트랜잭션 격리 수준을 고려한 견고한 예약 로직을 구현했습니다.
* **Activity Tracking:** 멘토링 종료 후 상호 피드백 및 활동 일지를 작성하여 이력을 체계적으로 관리합니다.

### 3. 실시간 AI 상담 가이드 (ENSUE-Bot)
* 서비스 이용 안내 및 질문 기반 멘토 추천을 담당하는 대화형 AI 인터페이스를 제공합니다.

---

## 🏗️ 시스템 아키텍처 (Architecture)

<img width="645" height="520" alt="image" src="https://github.com/user-attachments/assets/60d2d6aa-c0bd-44c3-aee3-dfab5cdd9e1c" />


---

## 📝 커밋 메시지 규약 (Git Commit Convention)

| Type | Description |
| :--- | :--- |
| **feat** | 새로운 기능 추가 (예: QueryDSL 필터 로직 추가) |
| **fix** | 버그 수정 |
| **refactor** | 코드 구조 개선 (JPA 쿼리 최적화 등) |
| **docs** | README, API 명세서 등 문서 수정 |
| **style** | UI 레이아웃 변경 및 CSS 포맷팅 |
| **chore** | 의존성 라이브러리 추가 및 설정 파일 변경 |
| **test** | 테스트 코드 작성 및 수정 |
