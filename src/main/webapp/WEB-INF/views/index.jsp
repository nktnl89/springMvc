<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="styles/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/product.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/search.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/basket.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="styles/category.css" />
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
    <div class="popupSearch">
        <div class="popupSearchContent">
            <div class="searchHeader">
                <div class="headline">Поиск:</div>
                <div class="closeButton">[X]</div>
            </div>
            <form id="search-form">
                <input type="text" name="search" id="text-to-find" placeholder="Наименование товара...">
                <input id="btn-search" type="submit" value="Найти">
            </form>
            <div class="foundedProducts" id="foundedProducts"></div>
        </div>
    </div>
    <div class="popupBasket">
        <div class="popupBasketContent">
            <div class="basketHeader">
                <div class="headline">Корзина:</div>
                <div class="closeButton">[X]</div>
            </div>
            <div class="basketProducts"></div>
            <div class="basketSum">
                <div>Сумма товаров</div>
                <div class="productSum"></div>
                <div class="issueButton">Оформить</div>
                <div>Скидка 10%</div>
                <div class="discountSum"></div>
                <div>Итого</div>
                <div class="totalSum"></div>
            </div>
        </div>
    </div>

    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/product.js"></script>
    <script src="scripts/search.js"></script>
    <script src="scripts/basket.js"></script>
</body>
</html>