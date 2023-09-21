package com.radarprice.repository;

import com.radarprice.model.dao.ProductByUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductByUserRepository extends JpaRepository<ProductByUser, Long> {
}
