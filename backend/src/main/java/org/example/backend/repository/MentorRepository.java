package org.example.backend.repository;

import org.example.backend.domain.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

/**
 * [정처기 용어: 데이터 조작어 (DML - Data Manipulation Language)]
 * SELECT, INSERT, DELETE, UPDATE 등 데이터를 조작하는 역할을 JPA 인터페이스로 추상화
 */
public interface MentorRepository extends JpaRepository<Mentor, Long> {

    /**
     * [정처기 용어: 조건 검색]
     * 카테고리별로 멘토를 필터링하는 쿼리 메서드
     */
    List<Mentor> findByCategory(String category);

    /**
     * 상위 평점 멘토 조회 (AI'S PICKS 용)
     */
    List<Mentor> findTop3ByOrderByRatingDesc();
}
