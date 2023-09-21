package com.radarprice.mapper.impl;

import com.radarprice.mapper.ProductMapper;
import com.radarprice.model.dao.ProductDao;
import com.radarprice.model.dto.ProductDto;
import org.springframework.stereotype.Service;

@Service
public class ProductMapperImpl implements ProductMapper {
    @Override
    public ProductDao productDtoToProductDao(ProductDto productDto) {
        return ProductDao.builder()
                .ean(productDto.getEan())
                .productName(productDto.getProductName())
                .productPrice(productDto.getProductPrice())
                .build();
    }

    @Override
    public ProductDto productDaoToProductDto(ProductDao productDao) {
        return ProductDto.builder()
                .ean(productDao.getEan())
                .productName(productDao.getProductName())
                .productPrice(productDao.getProductPrice())
                .build();
    }
}
