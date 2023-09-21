package com.radarprice.util;

import com.radarprice.config.jwt.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import static com.radarprice.util.Constants.PREFIX;

@Service
@RequiredArgsConstructor
public class Utils {

    private final JwtService jwtService;

    public String getTokenFromRequest(HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (StringUtils.hasText(authHeader) && authHeader.startsWith(PREFIX)) {
            return getUserNameFromToken(authHeader);
        }
        return null;
    }

    private String getUserNameFromToken(String authHeader) {
        return jwtService.getUserNameFromToken(authHeader.substring(7));
    }
}
