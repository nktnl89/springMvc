package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.User;

public interface UserRepository {
    User getUserByLogin(String login);

    void addUser(User user);
}
