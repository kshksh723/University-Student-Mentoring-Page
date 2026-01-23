-- [정처기 용어 설명]
-- 스키마(Schema): 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세를 기술한 것
-- 도메인(Domain): 하나의 애트리뷰트가 취할 수 있는 같은 타입의 원자값들의 집합 (예: 학년은 1~4 사이의 정수)

-- 1. Mentor 테이블 (개체/Entity)
-- 제1정규화(1NF) 준수: 모든 속성이 원자값(Atomic Value)을 가짐
-- 제2정규화(2NF) 준수: 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속됨
-- 제3정규화(3NF) 준수: 이행적 함수 종속(Transitive Functional Dependency)을 제거함
CREATE TABLE MENTOR (
    MENTOR_ID BIGINT AUTO_INCREMENT PRIMARY KEY, -- 기본키 (Primary Key): 튜플을 유일하게 식별
    NAME VARCHAR(50) NOT NULL,                    -- 성명
    SPECIALTY VARCHAR(100) NOT NULL,              -- 전문 분야
    EXPERIENCE TEXT,                              -- 경력 사항 (개별 튜플의 속성/Attribute)
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) COMMENT='멘토 정보를 저장하는 테이블';

-- 2. Mentee 테이블 (개체/Entity)
CREATE TABLE MENTEE (
    MENTEE_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
    DEPARTMENT VARCHAR(100) NOT NULL,            -- 학과
    GRADE INT CHECK (GRADE BETWEEN 1 AND 4),     -- 학년 (도메인 제약 조건 적용)
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) COMMENT='멘티 정보를 저장하는 테이블';

-- 3. MentoringSession 테이블 (관계/Relationship)
-- 참조 무결성(Referential Integrity): 외래키 값은 참조하는 테이블의 기본키 값과 동일하거나 NULL이어야 함
CREATE TABLE MENTORING_SESSION (
    SESSION_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
    MENTOR_ID BIGINT NOT NULL,                   -- 외래키 (Foreign Key): 다른 릴레이션의 기본키를 참조
    MENTEE_ID BIGINT NOT NULL,                   -- 외래키
    SESSION_DATE DATE NOT NULL,                  -- 상담 날짜
    SESSION_TIME TIME NOT NULL,                  -- 상담 시간
    CONTENT TEXT,                                -- 상담 내용
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- 외래키 제약 조건 설정 (참조 무결성 보장)
    CONSTRAINT FK_SESSION_MENTOR FOREIGN KEY (MENTOR_ID) REFERENCES MENTOR(MENTOR_ID),
    CONSTRAINT FK_SESSION_MENTEE FOREIGN KEY (MENTEE_ID) REFERENCES MENTEE(MENTEE_ID)
) COMMENT='멘토링 세션/상담 기록을 저장하는 테이블';
