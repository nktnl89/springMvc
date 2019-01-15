package com.epam.mvc.springMvc.entity;

import java.util.List;

public class Category {
    private String name;
    private int id;
    private List<Product> productList;

    public int getId() {
        return id;
    }

    public Category(int id) {
        this.id = id;
        this.setName("Категория " + id);
    }

    public List<Product> getProductList() {
        return productList;
    }

    public Category setProductList(List<Product> productList) {
        this.productList = productList;
        return this;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Category() {
    }
}
