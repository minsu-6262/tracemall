package com.tracemall.user;

import com.tracemall.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    // 회원가입
    public User signup(SignupRequest request) {
        User user = new User();

        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setGender(request.getGender());
        user.setBirthDate(request.getBirthDate());
        user.setPoint(0);

        if ("SELLER".equals(request.getRole())) {
            user.setRole(Role.SELLER);
        } else {
            user.setRole(Role.BUYER);
        }

        return userRepository.save(user);
    }

    // 로그인
    public LoginResponse login(User request) {

        User dbUser = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("유저 없음"));

        if (!passwordEncoder.matches(request.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("비밀번호 틀림");
        }

        String token = jwtUtil.generateToken(
                dbUser.getEmail(),
                dbUser.getRole().name()
        );

        return new LoginResponse(token);
    }
}