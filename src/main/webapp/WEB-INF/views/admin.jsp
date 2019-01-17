<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>Page Title</title>
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
        </div>

        <div class="products">
            <c:forEach var="category" items="${categories}">
                <div class="category" id="category"+"${category.getId()}">
                    <div class="categoryHeader">
                        <div class="categoryName">${category.getName()}</div>
                        <div class="createProduct">Создать новый продукт</div>
                    </div>
                    <c:forEach var="product" items="${category.getProductList()}">
                        <div class="product opened admin" id="${product.getId()}">
                            <div class="productPicture"><img id="productImg${product.getId()}" src="${product.getImg()}"/></div>
                            <div class="productText"><input id="productText${product.getId()}" value=${product.getText()}></div>
                            <div class="productPrice"><input id="productPrice${product.getId()}" value=${product.getPrice()}></div>
                            <div class="saveChanges">Сохранить изменения</div>
                            <div class="deleteProduct">Удалить продукт</div>
                        </div>
                    </c:forEach>
                </div>
            </c:forEach>
        </div>
    </div>

    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="scripts/mainAdmin.js"></script>
    <script src="scripts/product.js"></script>
    <script src="scripts/search.js"></script>
    <script src="scripts/basket.js"></script>
</body>
</html>