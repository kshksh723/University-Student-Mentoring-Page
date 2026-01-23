package org.example.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * [정처기 용어: 관계(Relationship)]
 * 멘토(Mentor)와 멘티(Mentee) 사이의 상담 활동을 연결하는 관계 엔티티
 */
@Entity
@Table(name = "MENTORING_SESSION")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MentoringSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SESSION_ID")
    private Long id;

    /**
     * [정처기 용어: 참조 무결성(Referential Integrity)]
     * 외래키(FK) 값은 참조하는 테이블의 기본키(PK)와 일치해야 함
     * 다대일(N:1) 관계 설정
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENTOR_ID", nullable = false)
    private Mentor mentor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENTEE_ID", nullable = false)
    private Mentee mentee;

    @Column(nullable = false)
    private LocalDate sessionDate;

    @Column(nullable = false)
    private LocalTime sessionTime;

    @Column(columnDefinition = "TEXT")
    private String content;

    public MentoringSession(Mentor mentor, Mentee mentee, LocalDate sessionDate, LocalTime sessionTime,
            String content) {
        this.mentor = mentor;
        this.mentee = mentee;
        this.sessionDate = sessionDate;
        this.sessionTime = sessionTime;
        this.content = content;
    }
}
