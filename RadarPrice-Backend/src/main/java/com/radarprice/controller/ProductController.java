package com.radarprice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(value = {"http://localhost:4200", "http://localhost:8080"})
public class ProductController {
}
