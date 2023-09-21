package com.radarprice.repository;

import com.radarprice.model.dao.ProductDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductDao, Long> {
    Optional<ProductDao> findByEan(String ean);
}
