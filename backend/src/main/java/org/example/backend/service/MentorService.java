package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.domain.Mentor;
import org.example.backend.repository.MentorRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * [정처기 용어: 비즈니스 로직 및 트랜잭션 관리]
 * 원자성(Atomicity)을 보장하기 위한 서비스 레이어
 */
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MentorService {

    private final MentorRepository mentorRepository;

    public List<Mentor> findAllMentors() {
        return mentorRepository.findAll();
    }

    public List<Mentor> findMentorsByCategory(String category) {
        if (category == null || category.equals("전체")) {
            return mentorRepository.findAll();
        }
        return mentorRepository.findByCategory(category);
    }

    public List<Mentor> findPremiumMentors() {
        return mentorRepository.findTop3ByOrderByRatingDesc();
    }
}
