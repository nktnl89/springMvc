package com.epam.mvc.springMvc.service.impl;

import com.epam.mvc.springMvc.entity.Product;
import com.epam.mvc.springMvc.repository.ProductRepository;
import com.epam.mvc.springMvc.service.ProductService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    private Gson gson = new Gson();

    @Override
    public List<Product> getProductList() {
        return productRepository.getProductList();
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.getProductById(id);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteProduct(id);
    }

    @Override
    public void createProduct(Product product) {
        productRepository.createProduct(product);
    }

    @Override
    public List<Product> getProductListByText(String text) {
        List<Product> result = new ArrayList<>();

        productRepository.getProductList().forEach(product -> {
            if (product.getText().contains(text)) {
                result.add(product);
            }
        });
        return result;

//        return (List<Product>) productRepository
//                .getProductList()
//                .stream()
//                .filter(product -> product.getText().equals(text))
//                .findAny()
//                .orElse(null);
    }

    @Override
    public Product copyPropertyValues(Product receiverProduct, Product sourceProduct) {
        receiverProduct.setText(sourceProduct.getText());
        receiverProduct.setPrice(sourceProduct.getPrice());
        receiverProduct.setImg(sourceProduct.getImg());
        return receiverProduct;
    }

    @Override
    public List<Product> getProductListByJsonText(String jsonText) {
        Type type = new TypeToken<Map<String, String>>() {
        }.getType();
        Map<String, String> searchMap = gson.fromJson(jsonText, type);
        return getProductListByText(searchMap.get("search"));
    }

    @Override
    public int getLastProductId() {
        Product maxIdProduct = Collections.max(productRepository.getProductList());
        return maxIdProduct.getId();
    }
}
