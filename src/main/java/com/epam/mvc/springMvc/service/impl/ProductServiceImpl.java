package com.epam.mvc.springMvc.service.impl;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.repository.ProductRepository;
import com.epam.mvc.springMvc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getProductList() {
        return productRepository.getProductList();
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.getProductById(id);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteProduct(id);
    }

    @Override
    public void createProduct(Product product) {
        product.setId(productRepository.getLastProductId());
        productRepository.createProduct(product);
    }
}
