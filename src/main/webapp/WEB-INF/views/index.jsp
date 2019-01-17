<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>ПОКУПАЙ!!!</title>
    <link rel="stylesheet" type="text/css" media="screen" href="styles/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/product.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/search.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/basket.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/category.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/newProductPopup.css" />
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="login">
                <c:out value="Привет, ${currentUser.getLogin()}"><a href="/authorization">Вход</a></c:out>
                <a href="/logout">Выход</a>
            </div>
            <div class="placeForBanner">мемасики для важных переговоров</div>
            <div class="search">Поиск</div>
            <div class="basket">
                <div class="basketRef">Корзина</div>
                <div class="basketPreview">0</div>
            </div>
        </div>
        <div class="products">
            <c:forEach var="category" items="${categories}">
                <div class="category" id="category"+"${category.getId()}">
                    <div class="categoryName">${category.getName()}</div>
                    <c:forEach var="product" items="${category.getProductList()}">
                        <div class="product" id="${product.getId()}">
                            <div class="productPicture"><img src="${product.getImg()}"/></div>
                            <div class="productText">${product.getText()}</div>
                            <div class="productPrice">${product.getPrice()}</div>
                            <div class="addProductToOrder">В корзину</div>
                            <div class="deleteFromOrder">[X]</div>
                        </div>
                    </c:forEach>
                </div>
            </c:forEach>
        </div>
    </div>
    <div class="footer">тут футер</div>

    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="scripts/product.js"></script>
    <script src="scripts/search.js"></script>
    <script src="scripts/basket.js"></script>
    <script src="scripts/main.js"></script>
</body>
</html>