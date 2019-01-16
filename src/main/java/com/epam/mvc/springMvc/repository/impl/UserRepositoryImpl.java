package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.User;
import com.epam.mvc.springMvc.entity.UserRole;
import com.epam.mvc.springMvc.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {
    private List<User> userList = new ArrayList<>();

    public UserRepositoryImpl() {
        User admin = new User("Admin", "123");
        admin.setUserRole(UserRole.ADMIN);
        User user = new User("User", "123");
        user.setUserRole(UserRole.USER);
        userList.add(admin);
        userList.add(user);
    }

    @Override
    public List<User> getUserList() {
        return userList;
    }

    public UserRepositoryImpl(List<User> userList) {
        this.userList = userList;
    }

    @Override
    public User getUserByLogin(String login) {
        return userList.stream().filter(user -> user.getLogin().equals(login)).findFirst().orElse(null);
    }

    @Override
    public void addUser(User user) {
        userList.add(user);
    }
}
