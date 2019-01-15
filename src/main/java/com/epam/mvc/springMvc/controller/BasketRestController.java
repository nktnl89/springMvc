package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("basket")
public class BasketRestController {
    @Autowired
    private ProductService productService;

    @GetMapping("{id}")
    public void addProductToBasket(@PathVariable int id) {

    }

    //delete from basket*
}
