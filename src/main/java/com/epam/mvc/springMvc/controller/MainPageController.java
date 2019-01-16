package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.entity.UserRole;
import com.epam.mvc.springMvc.manager.UserManager;
import com.epam.mvc.springMvc.service.CategoryService;
import com.epam.mvc.springMvc.service.ProductService;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainPageController {
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserManager userManager;

    @RequestMapping("/home")
    public String home(Model model) {//ModelAndView
//      @PathVariable(name = "pageId", required = false) String pageId) {
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.setViewName("index");
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

        model.addAttribute("categories", categoryService.getCategoryList());
        model.addAttribute("currentUser", userManager.getUser());
        if (userManager.getUser().getUserRole().equals(UserRole.ADMIN)) {
            return "admin";
        }
        return "index";
    }

    @RequestMapping("/")
    public String index(Model model) {
        return "login";
    }
}
