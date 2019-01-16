package com.epam.mvc.springMvc.service.impl;

import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.repository.UserRepository;
import com.epam.mvc.springMvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.addUser(user);
    }

    @Override
    public User getUserByLogin(String login) {
        return userRepository.getUserByLogin(login);
    }

    @Override
    public List<User> getUserList() {
        return userRepository.getUserList();
    }
}
