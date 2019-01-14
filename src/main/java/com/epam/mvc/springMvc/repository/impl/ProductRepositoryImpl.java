package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepositoryImpl implements com.epam.mvc.springMvc.repository.ProductRepository {
    private List<Product> productList = new ArrayList<>();

    public List<Product> getProductList() {
        return productList;
    }

    @Override
    public void createProduct(Product product) {
        productList.add(product);
    }

    @Override
    public void deleteProduct(int id) {
        productList.remove(getProductById(id));
    }

    @Override
    public int getLastProductId() {
        return productList.size() - 1;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public ProductRepositoryImpl() {
        productList.add(new Product(0, "../img/Computer-Guy.png", "Computer-guy", 100));
        productList.add(new Product(1, "../img/1317567954.png", "I know what you did", 100));
        productList.add(new Product(2, "../img/1317604469.png", "Why???", 100));
        productList.add(new Product(3, "../img/1369219032.png", "Poker-face", 100));
    }

    public ProductRepositoryImpl(List<Product> productList) {
        this.productList = productList;
    }


    @Override
    public Product getProductById(int id) {
        return productList.stream()
                .filter(product -> product.getId() == id)
                .findFirst()
                .orElseThrow(NullPointerException::new);
    }

    @Override
    public Product getProductByText(String text) {
        return productList.stream()
                .filter(product -> product.getText().contains(text))
                .findFirst()
                .orElseThrow(NullPointerException::new);
    }
}
