package com.epam.mvc.springMvc.entity;

public class Product {
    private int id;
    private String img;
    private String text;
    private int price;
    private Category category;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Product(int id, String img, String text, int price) {
        this.id = id;
        this.img = img;
        this.text = text;
        this.price = price;
    }
    public Product(String img, String text, int price) {
        this.img = img;
        this.text = text;
        this.price = price;
    }

    public Product() {
    }
}
