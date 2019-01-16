package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.User;

import java.util.List;

public interface UserRepository {
    User getUserByLogin(String login);

    void addUser(User user);

    List<User> getUserList();
}
