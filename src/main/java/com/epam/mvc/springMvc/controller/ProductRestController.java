package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.manager.UserManager;
import com.epam.mvc.springMvc.service.BasketService;
import com.epam.mvc.springMvc.service.ProductService;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("products")
public class ProductRestController {
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;
    @Autowired
    private UserManager userManager;
    @Autowired
    private BasketService basketService;
    @Autowired
    private HttpServletRequest httpServletRequest;

    @GetMapping
    public List<Product> products() {
        return productService.getProductList();
    }

    @GetMapping("{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        int newProductId = productService.getLastProductId();
        product.setId(++newProductId);
        productService.createProduct(product);
        return product;
    }

    @PutMapping("update")
    public Product updateProduct(@RequestBody Product product) {
        return productService.copyPropertyValues(productService.getProductById(product.getId()), product);
    }

    @DeleteMapping("delete/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }

    @PostMapping("basket/add")
    public Product addToBasket(@RequestBody int productId) {
        User currentUser = userManager.getUser();
        if (currentUser != null) {
            basketService.addProductToBasket(
                    basketService.getBasketByUser(currentUser),
                    productService.getProductById(productId));
            return productService.getProductById(productId);
        }
        return null;
    }

    @PostMapping("basket/delete")
    public Product deleteFromBasket(@RequestBody int productId) {
        basketService.deleteProductFromBasket(
                basketService.getBasketByUser(userManager.getUser()),
                productService.getProductById(productId));
        return productService.getProductById(productId);
    }

    @PostMapping("basket/issue")
    public void issueOrder() {
        //надо записывать состояние кудато
    }

    @PostMapping("basket")
    public List<Product> getBasketProductList() {
        return basketService.getProductList(
                basketService.getBasketByUser(
                        userManager.getUser()));
    }
}
