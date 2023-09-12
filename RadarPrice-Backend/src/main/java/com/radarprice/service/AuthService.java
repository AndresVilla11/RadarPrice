package com.radarprice.service;

import com.radarprice.model.auth.AuthResponse;
import com.radarprice.model.auth.UserLoginRequest;
import com.radarprice.model.auth.UserRegisterRequest;

public interface AuthService {
    AuthResponse login(UserLoginRequest userLoginRequest);

    AuthResponse register(UserRegisterRequest userRegisterRequest);
}
