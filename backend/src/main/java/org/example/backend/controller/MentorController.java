package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.domain.Mentor;
import org.example.backend.service.MentorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * [정처기 용어: 클라이언트/서버 구조]
 * 프론트엔드 요청을 처리하는 인터페이스 포트
 */
@RestController
@RequestMapping("/api/mentors")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // Vite 기본 포트 허용
public class MentorController {

    private final MentorService mentorService;

    @GetMapping
    public List<Mentor> getMentors(@RequestParam(required = false) String category) {
        return mentorService.findMentorsByCategory(category);
    }

    @GetMapping("/premium")
    public List<Mentor> getPremiumMentors() {
        return mentorService.findPremiumMentors();
    }
}
