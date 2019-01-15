package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.service.ProductService;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductRestController {
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> products() {
        return productService.getProductList();
    }

    @GetMapping("{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @PostMapping()
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
        //return "redirect:/";
    }

    @PutMapping("update/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return productService.copyPropertyValues(productService.getProductById(id), product);
    }

    @DeleteMapping("delete/{id}")
    //@GetMapping("/products/delete/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        //return "redirect:/";
    }
}
