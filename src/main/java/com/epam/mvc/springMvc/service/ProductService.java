package com.epam.mvc.springMvc.service;

import com.epam.mvc.springMvc.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProductList();

    Product getProductById(int id);

    void deleteProduct(int id);

    void createProduct(Product product);
}
