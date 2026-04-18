package com.tracemall.user;

import lombok.Data;

import java.time.LocalDate;

@Data
public class SignupRequest {
    private String email;
    private String password;
    private String gender;
    private LocalDate birthDate;
    private String role; // 선택용
}