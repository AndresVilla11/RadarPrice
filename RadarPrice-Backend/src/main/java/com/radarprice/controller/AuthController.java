package com.radarprice.controller;

import com.radarprice.model.auth.AuthResponse;
import com.radarprice.model.auth.UserLoginRequest;
import com.radarprice.model.auth.UserRegisterRequest;
import com.radarprice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/auth")
@CrossOrigin(value = {"http://localhost:4200", "http://localhost:8080"})
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "/login")
    @ResponseStatus(HttpStatus.OK)
    private AuthResponse login(@RequestBody UserLoginRequest userLoginRequest) {
        return authService.login(userLoginRequest);
    }

    @PostMapping(value = "/register")
    @ResponseStatus(HttpStatus.CREATED)
    private AuthResponse register(@RequestBody UserRegisterRequest userRegisterRequest) {
        return authService.register(userRegisterRequest);
    }

    @PostMapping(value = "/logout")
    @ResponseStatus(HttpStatus.CREATED)
    private void logout(@RequestBody UserRegisterRequest userRegisterRequest) {
        authService.logout(userRegisterRequest);
    }
}
