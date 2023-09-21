package com.radarprice.controller;

import com.radarprice.model.dto.ProductDto;
import com.radarprice.service.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/product")
public class ProductController {

    private final ProductService productService;

    @PostMapping(value = "/user")
    @ResponseStatus(HttpStatus.CREATED)
    private void addProductByUser(HttpServletRequest request, @RequestBody ProductDto productDto) {
        productService.saveProductByUser(request, productDto);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private void addProduct(HttpServletRequest request, @RequestBody ProductDto productDto) {
        productService.saveProductByUser(request, productDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    private List<ProductDto> getProducts() {
        return productService.getProducts();
    }
}
