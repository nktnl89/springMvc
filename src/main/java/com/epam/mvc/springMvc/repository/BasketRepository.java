package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.Basket;
import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.entity.User;

import java.util.List;

public interface BasketRepository {
    void addProductToBasket(Basket basket, Product product);

    void deleteProductFromBasket(Basket basket, Product product);

    Basket getBasketByUser(User user);

    List<Product> getProductList(Basket basket);

}
