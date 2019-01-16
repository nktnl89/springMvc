package com.epam.mvc.springMvc.service;

import com.epam.mvc.springMvc.entity.User;

import java.util.List;

public interface UserService {
    void addUser(User user);

    User getUserByLogin(String login);

    List<User> getUserList();
}
