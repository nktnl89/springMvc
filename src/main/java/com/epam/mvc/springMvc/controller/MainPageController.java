package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.exception.NotFoundException;
import com.epam.mvc.springMvc.repository.ProductRepository;
import com.epam.mvc.springMvc.service.ProductService;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController()
@RequestMapping("products")
public class MainPageController {
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;

    @RequestMapping("home")
    public ModelAndView hello(HttpServletRequest request) {
        //@PathVariable(name = "pageId", required = false) String pageId) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
//        User currentUser = userManager.getUser();

//        modelAndView.addObject("helloPhrase", "Привет, " + currentUser.getLogin());
//        modelAndView.addObject("currentUserRole", currentUser.getRole());
//        modelAndView.addObject("drinks", drinkService.getAllDrinks());
//        modelAndView.addObject("ingridients", ingridientService.getAllIngridients());
//        if (orderManager.getOrder() == null) {
//            modelAndView.addObject("currentOrderId", null);
//        } else {
//            modelAndView.addObject("currentOrderId", orderManager.getOrder().getId());
//            modelAndView.addObject("dwies", drinkWithIngridientService.getAllDWIByOrderId(orderManager.getOrder().getId()));
//        }
        return modelAndView;
    }

    @GetMapping
    public List<Product> products() {//@RequestParam(value="name") String name) {//, required=false, defaultValue="World"
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

    //@PutMapping("{id}")
    @GetMapping("/update/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product productForUpdate = productService.getProductById(id);
        productForUpdate.setText(product.getText());
        productForUpdate.setPrice(product.getPrice());
        productForUpdate.setCategory(product.getCategory());
        productForUpdate.setImg(product.getImg());
        return productForUpdate;
    }

    //@DeleteMapping("{id}")
    @GetMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        //return "redirect:/";
    }
}
