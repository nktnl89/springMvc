package com.epam.mvc.springMvc.service;

import com.epam.mvc.springMvc.entity.Category;

import java.util.List;

public interface CategoryService {
    Category getCategoryById(int id);

    List<Category> getCategoryList();

    void addCategory(Category category);
}
