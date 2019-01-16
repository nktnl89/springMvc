package com.epam.mvc.springMvc.entity;

import java.lang.annotation.Target;

public class User {
    private String login;
    private String password;
    private UserRole userRole;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User() {
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }
}
