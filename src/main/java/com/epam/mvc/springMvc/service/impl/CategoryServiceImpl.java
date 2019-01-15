package com.epam.mvc.springMvc.service.impl;

import com.epam.mvc.springMvc.entity.Category;
import com.epam.mvc.springMvc.repository.CategoryRepository;
import com.epam.mvc.springMvc.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category getCategoryById(int id) {
        return categoryRepository.getCategoryById(id);
    }

    @Override
    public List<Category> getCategoryList() {
        return categoryRepository.getListCategory();
    }

    @Override
    public void addCategory(Category category) {
        categoryRepository.addCategory(category);
    }
}
