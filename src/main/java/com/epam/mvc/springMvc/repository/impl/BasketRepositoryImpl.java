package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.Basket;
import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.manager.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BasketRepositoryImpl implements com.epam.mvc.springMvc.repository.BasketRepository {
    private List<Basket> basketList = new ArrayList<>();
    @Autowired
    private UserManager userManager;

    @Override
    public void addProductToBasket(Basket basket, Product product) {
        List<Product> tmpProducts = basket.getProductList();
        tmpProducts.add(product);
        //basket.setProductList(tmpProducts);
    }

    @Override
    public void deleteProductFromBasket(Basket basket, Product product) {
        List<Product> tmpProducts = basket.getProductList();
        tmpProducts.remove(product);
        basket.setProductList(tmpProducts);
    }

    @Override
    public Basket getBasketByUser(User user) {
        Basket tmpBasket = basketList.stream().filter(basket -> user.equals(basket.getUser())).findFirst().orElse(null);
        if (tmpBasket == null) {
            tmpBasket = new Basket();
            tmpBasket.setUser(user);
            basketList.add(tmpBasket);
        }
        return tmpBasket;
    }

    @Override
    public List<Product> getProductList(Basket basket) {
        return basket.getProductList();
    }
}
