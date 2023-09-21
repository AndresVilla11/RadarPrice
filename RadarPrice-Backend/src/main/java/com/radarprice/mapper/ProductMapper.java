package com.radarprice.mapper;

import com.radarprice.model.dao.ProductDao;
import com.radarprice.model.dto.ProductDto;

public interface ProductMapper {
    ProductDao productDtoToProductDao(ProductDto productDto);

    ProductDto productDaoToProductDto(ProductDao productDao);
}
