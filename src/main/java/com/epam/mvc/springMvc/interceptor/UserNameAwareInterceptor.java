package com.epam.mvc.springMvc.interceptor;

import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.manager.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserNameAwareInterceptor implements HandlerInterceptor {
    @Autowired
    private UserManager userManager;

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
        User currentUser = userManager.getUser();
    }
}
