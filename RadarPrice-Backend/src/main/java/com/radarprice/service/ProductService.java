package com.radarprice.service;

import com.radarprice.model.dto.ProductDto;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface ProductService {
    void saveProductByUser(HttpServletRequest request, ProductDto productDto);
    List<ProductDto> getProducts();
}
