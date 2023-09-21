package com.radarprice.service.impl;

import com.radarprice.mapper.ProductMapper;
import com.radarprice.model.dao.ProductByUser;
import com.radarprice.model.dao.ProductDao;
import com.radarprice.model.dao.User;
import com.radarprice.model.dto.ProductDto;
import com.radarprice.repository.ProductByUserRepository;
import com.radarprice.repository.ProductRepository;
import com.radarprice.repository.UserRepository;
import com.radarprice.service.ProductService;
import com.radarprice.util.Utils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductMapper productMapper;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final ProductByUserRepository productByUserRepository;
    private final Utils utils;

    @Override
    public void saveProductByUser(HttpServletRequest request, ProductDto productDto) {
        String userNameFromToken = utils.getTokenFromRequest(request);
        User user = userRepository.findByUsername(userNameFromToken)
                .orElseThrow(() -> new RuntimeException("Doesn't exist user"));
        ProductDao productDao = productRepository.findByEan(productDto.getEan())
                .orElseThrow(() -> new RuntimeException("Doesn't exist product"));
        ProductByUser productByUser = ProductByUser.builder()
                .user(user)
                .product(productDao)
                .build();
        productByUserRepository.save(productByUser);
    }

    @Override
    public List<ProductDto> getProducts() {
        List<ProductDao> productRepositoryAll = productRepository.findAll();
        return productRepositoryAll
                .stream()
                .map(productMapper::productDaoToProductDto)
                .collect(Collectors.toList());
    }
}