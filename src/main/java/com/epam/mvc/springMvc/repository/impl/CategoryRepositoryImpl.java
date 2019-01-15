package com.epam.mvc.springMvc.repository.impl;

import com.epam.mvc.springMvc.entity.Category;
import com.epam.mvc.springMvc.repository.CategoryRepository;
import com.epam.mvc.springMvc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository {
    private List<Category> categoryList = new ArrayList<>();

    @Autowired
    private ProductRepository productRepository;

    @PostConstruct
    public void initCategory() {
        categoryList.add(new Category(1).setProductList(productRepository.getProductList()));
    }

    @Override
    public Category getCategoryById(int id) {
        return categoryList.stream()
                .filter(category -> category.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @Override
    public List<Category> getListCategory() {
        return categoryList;
    }

    @Override
    public void addCategory(Category category) {
        categoryList.add(category);
    }
}
