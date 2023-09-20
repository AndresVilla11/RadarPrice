package com.radarprice.service.impl;

import com.radarprice.config.jwt.service.JwtService;
import com.radarprice.model.auth.AuthResponse;
import com.radarprice.model.auth.Role;
import com.radarprice.model.auth.UserLoginRequest;
import com.radarprice.model.auth.UserRegisterRequest;
import com.radarprice.model.dao.User;
import com.radarprice.repository.UserRepository;
import com.radarprice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse login(UserLoginRequest userLoginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginRequest.getUserName(), userLoginRequest.getPassword()));
        UserDetails userDetails = userRepository.findByUserName(userLoginRequest.getUserName()).orElseThrow();
        final String token = jwtService.getToken(userDetails);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    @Override
    public AuthResponse register(UserRegisterRequest userRegisterRequest) {
        User user = User.builder()
                .firstName(userRegisterRequest.getFullName())
                .lastName("")
                .password(BCrypt.hashpw(userRegisterRequest.getPassword(), BCrypt.gensalt()))
                .userName(userRegisterRequest.getUserName())
                .role(Role.USER)
                .build();
        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}
