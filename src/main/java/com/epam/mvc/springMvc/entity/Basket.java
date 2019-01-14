package com.epam.mvc.springMvc.entity;

import java.util.ArrayList;
import java.util.List;

public class Basket {
    private User owner;
    private List<Product> productList = new ArrayList<>();

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public Basket(User owner, List<Product> productList) {
        this.owner = owner;
        this.productList = productList;
    }

    public Basket() {
    }
}
