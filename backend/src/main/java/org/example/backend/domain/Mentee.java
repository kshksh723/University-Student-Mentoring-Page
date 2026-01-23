package org.example.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;
import java.util.ArrayList;
import java.util.List;

/**
 * [정처기 용어: 개체(Entity)]
 * 데이터베이스에 표현하고자 하는 객체
 */
@Entity
@Table(name = "MENTEE")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Mentee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MENTEE_ID")
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 100)
    private String department;

    /**
     * [정처기 용어: 도메인(Domain)]
     * 하나의 애트리뷰트가 가질 수 있는 원자값들의 집합
     * 1~4학년 범위의 정수값만 허용하는 도메인 제약
     */
    private int grade;

    @OneToMany(mappedBy = "mentee", cascade = CascadeType.ALL)
    private List<MentoringSession> sessions = new ArrayList<>();

    public Mentee(String name, String department, int grade) {
        this.name = name;
        this.department = department;
        this.grade = grade;
    }
}
