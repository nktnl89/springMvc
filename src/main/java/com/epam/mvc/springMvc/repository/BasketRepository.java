package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.Basket;
import com.epam.mvc.springMvc.entity.Product;

public interface BasketRepository {
    void addProductToBasket(Basket basket, Product product);
    void deleteProductFromBasket(Basket basket, Product product);
}
