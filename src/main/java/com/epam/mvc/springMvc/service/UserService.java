package com.epam.mvc.springMvc.service;

import com.epam.mvc.springMvc.entity.User;

public interface UserService {
    void addUser(User user);

    User getUserByLogin(String login);
}
