package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository
@PropertySource("classpath:application.properties")
public class ProductRepositoryImpl implements ProductRepository {
    private List<Product> productList = new ArrayList<>();
    @Autowired
    private Environment environment;

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
    }

    @PostConstruct
    public void initProducts() {
        productList.add(new Product(0, "images/Computer-Guy.png", "Computer-guy", getRandomPrice()));
        productList.add(new Product(1, "images/1317567954.png", "I know what you did", getRandomPrice()));
        productList.add(new Product(2, "images/1317604469.png", "Why???", getRandomPrice()));
        productList.add(new Product(3, "images/1369219032.png", "Poker-face", getRandomPrice()));
        productList.add(new Product(4, "images/Ben-Chang-aka-Senor-Chang-bw-by-Rones.png", "Ben-Chang-meme", getRandomPrice()));
        productList.add(new Product(5, "images/1-2016011842.png", "I know that feel bro", getRandomPrice()));
        productList.add(new Product(6, "images/Facepalm.png", "Facepalm", getRandomPrice()));
        productList.add(new Product(7, "images/feels.png", "Pepe the frog", getRandomPrice()));
        productList.add(new Product(8, "images/forever-alone-bw.png", "Forever alone", getRandomPrice()));
        productList.add(new Product(9, "images/FryazinoWitness.png", "Fryazino witness", getRandomPrice()));
        productList.add(new Product(10, "images/Meme-me-gusta.png", "Me gusta", getRandomPrice()));
        productList.add(new Product(11, "images/Untitled-1.png", "Okay-guy", getRandomPrice()));
        productList.add(new Product(12, "images/YaoMing-meme.png", "Yao Ming-meme", getRandomPrice()));
    }

    private int getRandomPrice() {
        return new Random().nextInt(Integer.parseInt(environment.getProperty("MAXRANDOMPRICE")));
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
