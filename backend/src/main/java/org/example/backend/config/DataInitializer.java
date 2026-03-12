package org.example.backend.config;

import lombok.RequiredArgsConstructor;
import org.example.backend.domain.Mentor;
import org.example.backend.repository.MentorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * [정처기 용어: 데이터 초기화 및 무결성 관리]
 * 개발 환경에서 자동으로 테스트 데이터를 구축하는 컴포넌트
 */
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final MentorRepository mentorRepository;

    @Override
    public void run(String... args) {
        if (mentorRepository.count() == 0) {
            mentorRepository.save(new Mentor("김코딩", "구글 시니어 개발자", "취업/진로", "실무에서 배우는 클린 코드", 4.9, ""));
            mentorRepository.save(new Mentor("이리액트", "메타 현직자", "전공 학습", "리액트 심화 마스터 클래스", 5.0, ""));
            mentorRepository.save(new Mentor("박스프링", "네이버 엔지니어", "자격증/어학", "백엔드 시스템 아키텍처", 4.8, ""));
            mentorRepository.save(new Mentor("최멘탈", "전문 상담사", "멘탈 케어", "취준생을 위한 자기 관리", 4.7, ""));
            mentorRepository.save(new Mentor("정대외", "글로벌 서포터즈장", "대외활동", "스펙을 높이는 활동 가이드", 4.5, ""));

            System.out.println(">>> [Success] 초기 멘토링 데이터가 성공적으로 주입되었습니다.");
        }
    }
}
