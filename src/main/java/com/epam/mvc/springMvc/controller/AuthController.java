package com.epam.mvc.springMvc.controller;

import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.exception.NotFoundException;
import com.epam.mvc.springMvc.manager.UserManager;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class AuthController {
    @Autowired
    private UserManager userManager;
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ModelAndView getLoginPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @GetMapping("/logout")
    public ModelAndView logout(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        request.getSession().invalidate();
        return modelAndView;
    }

    @GetMapping("/registration")
    public ModelAndView registration(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("registration");
        return modelAndView;
    }

    @PostMapping("/registration")
    public ModelAndView getNewUser(@Validated User user, BindingResult result) {
        ModelAndView modelAndView = new ModelAndView();
        if (result.hasErrors()) {
            //modelAndView.addObject("errors", result.getAllErrors());
        } else {
            userService.addUser(user);
            modelAndView.setViewName("redirect:/login");
        }
        return modelAndView;
    }

    @PostMapping("/login")
    public ModelAndView login(User user) {
        ModelAndView modelAndView = new ModelAndView();
        User currentUser = userService.getUserByLogin(user.getLogin());
        if (currentUser == null) {
            throw new NotFoundException("Пользователя с таким логином не найдено");
        } else {
            if (currentUser.getPassword().equals(user.getPassword())) {
                userManager.setUser(currentUser);
//                if (orderService.getIdActiveOrder(currentUser.getId()) != 0) {
//                    orderManager.setOrder(orderService.getOrderById(orderService.getIdActiveOrder(currentUser.getId())));
//                }
                modelAndView.setViewName("redirect:/home");
            } else {
                modelAndView.addObject("errorMsg", "Пароль неверен");
            }
        }
        return modelAndView;
    }
}
