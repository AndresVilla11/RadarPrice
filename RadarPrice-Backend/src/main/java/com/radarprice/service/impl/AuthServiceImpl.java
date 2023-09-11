package com.radarprice.service.impl;

import com.radarprice.jwt.service.JwtService;
import com.radarprice.model.auth.AuthResponse;
import com.radarprice.model.auth.Role;
import com.radarprice.model.auth.UserLoginRequest;
import com.radarprice.model.auth.UserRegisterRequest;
import com.radarprice.model.dao.User;
import com.radarprice.repository.UserRepository;
import com.radarprice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    @Override
    public AuthResponse login(UserLoginRequest userLoginRequest) {
        return null;
    }

    @Override
    public AuthResponse register(UserRegisterRequest userRegisterRequest) {
        User user = User.builder()
                .firstName(userRegisterRequest.getFullName())
                .lastName("")
                .password(userRegisterRequest.getPassword())
                .email(userRegisterRequest.getEmail())
                .role(Role.USER)
                .build();
        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}
