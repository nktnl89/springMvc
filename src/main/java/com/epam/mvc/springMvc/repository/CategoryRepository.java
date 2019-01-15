package com.epam.mvc.springMvc.repository;

import com.epam.mvc.springMvc.entity.Category;

import java.util.List;

public interface CategoryRepository {
    Category getCategoryById(int id);

    List<Category> getListCategory();

    void addCategory(Category category);
}
