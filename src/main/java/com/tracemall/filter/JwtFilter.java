package com.tracemall.filter;

import com.tracemall.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    public JwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        // 토큰 없음 → 그냥 통과 (로그인 등)
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 토큰 꺼내기
        String token = authHeader.substring(7);

        try {
            // 검증 + 이메일 추출
            String email = jwtUtil.getEmail(token);

            System.out.println("인증된 사용자: " + email);

        } catch (Exception e) {
            // 토큰 이상하면 차단
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        // 정상 → 다음으로 넘김
        filterChain.doFilter(request, response);
    }
}
