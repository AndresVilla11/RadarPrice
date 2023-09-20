package com.radarprice.controller;

import com.radarprice.model.auth.AuthResponse;
import com.radarprice.model.auth.UserLoginRequest;
import com.radarprice.model.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductController {
    @PostMapping(value = "/product")
    @ResponseStatus(HttpStatus.OK)
    private void login(@RequestBody ProductDto productDto) {
        productDto.getProductName();
    }
}
