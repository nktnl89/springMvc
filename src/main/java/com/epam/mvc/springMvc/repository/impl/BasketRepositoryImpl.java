package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.Basket;
import com.epam.mvc.springMvc.entity.Product;
import org.springframework.stereotype.Repository;

@Repository
public class BasketRepositoryImpl implements com.epam.mvc.springMvc.repository.BasketRepository {
    private Basket basket = new Basket();

    public BasketRepositoryImpl() {
    }

    public BasketRepositoryImpl(Basket basket) {
        this.basket = basket;
    }

    public Basket getBasket() {
        return basket;
    }

    public void setBasket(Basket basket) {
        this.basket = basket;
    }

    @Override
    public void addProductToBasket(Basket basket, Product product) {
        System.out.println("");
    }

    @Override
    public void deleteProductFromBasket(Basket basket, Product product) {
        System.out.println("");
    }
}
