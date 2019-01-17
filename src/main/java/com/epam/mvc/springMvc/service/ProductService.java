package com.epam.mvc.springMvc.service;

import com.epam.mvc.springMvc.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProductList();

    Product getProductById(int id);

    void deleteProduct(int id);

    void createProduct(Product product);

    List<Product> getProductListByText(String text);

    Product copyPropertyValues(Product receiverProduct, Product sourceProduct);

    List<Product> getProductListByJsonText(String jsonText);

    int getLastProductId();
}
