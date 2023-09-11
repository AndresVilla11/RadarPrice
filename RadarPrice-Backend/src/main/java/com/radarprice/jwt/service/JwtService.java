package com.radarprice.jwt.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    String getToken(UserDetails user);
}
