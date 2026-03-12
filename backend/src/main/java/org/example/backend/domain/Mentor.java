package org.example.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;
import java.util.ArrayList;
import java.util.List;

/**
 * [정처기 용어: 엔티티(Entity)]
 * 데이터베이스에 표현하려는 유무형의 객체로서 서로 구별되는 것
 */
@Entity
@Table(name = "MENTOR")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Mentor {

    /**
     * [정처기 용어: 식별자(Identifier) / 기본키(Primary Key)]
     * 릴레이션에서 튜플을 유일하게 식별할 수 있는 속성
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MENTOR_ID")
    private Long id;

    /**
     * [정처기 용어: 속성(Attribute)]
     * 데이터베이스를 구성하는 가장 작은 논리적 단위
     */
    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 100)
    private String specialty;

    /**
     * [정처기 용어: 도메인(Domain)]
     * 속성이 가질 수 있는 값의 범위 - 특정 카테고리로 제한
     */
    @Column(nullable = false, length = 20)
    private String category;

    @Column(columnDefinition = "TEXT")
    private String experience;

    @Column(precision = 2, scale = 1)
    private Double rating;

    private String imageUrl;

    /**
     * [정처기 용어: 관계(Relationship)]
     * 엔티티와 엔티티 사이의 논리적인 연결
     * 한 명의 멘토는 여러 세션을 가질 수 있음 (1:N 관계)
     */
    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL)
    private List<MentoringSession> sessions = new ArrayList<>();

    public Mentor(String name, String specialty, String category, String experience, Double rating, String imageUrl) {
        this.name = name;
        this.specialty = specialty;
        this.category = category;
        this.experience = experience;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }
}
