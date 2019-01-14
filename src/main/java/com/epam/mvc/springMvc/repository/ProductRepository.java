package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.Product;

import java.util.List;

public interface ProductRepository {
    Product getProductById(int id);

    Product getProductByText(String text);

    List<Product> getProductList();

    void createProduct(Product product);

    void deleteProduct(int id);

    int getLastProductId();
}
