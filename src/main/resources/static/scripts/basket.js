function createPopupForBasket() {
    $("<div>", {class: "popupBasket"}).appendTo($("body"));
    $("<div>", {class: "popupBasketContent"}).appendTo(".popupBasket");
    $("<div>", {class: "basketHeader"}).appendTo(".popupBasketContent");
    $("<div>", {class: "headline", text: "Корзина:"}).appendTo(".basketHeader");
    $("<div>", {class: "closeButton", text: "[X]"}).appendTo(".basketHeader");
    $(".closeButton").click(function() {basketClose()});
    $("<div>", {class: "basketProducts"}).appendTo(".popupBasketContent");
    $("<div>", {class: "basketSum"}).appendTo(".popupBasketContent");
    $("<div>", {text: "Сумма товаров"}).appendTo(".basketSum");
    $("<div>", {class: "productSum"}).appendTo(".basketSum");
    $("<div>", {class: "issueButton", text: "Оформить"}).appendTo(".basketSum");
    $("<div>", {text: "Скидка 10%"}).appendTo(".basketSum");
    $("<div>", {class: "discountSum"}).appendTo(".basketSum");
    $("<div>", {text: "Итого"}).appendTo(".basketSum");
    $("<div>", {class: "totalSum"}).appendTo(".basketSum");
}

let basketClose = function () {
    $(".popupBasket").remove();
}
let deleteFromOrder = function (buttonDeleteElement) {
    let productElement = buttonDeleteElement.parentNode;
    try {
        let selectedProduct = getProductById(productElement.getAttribute("id"));
        increaseCounterBasket(-1);
        decreaseBasketSum(selectedProduct);
        BASKET_PRODUCTS_ELEMENT.removeChild(productElement);
    }catch (e) {
        alert(e.message);
    }
}
let decreaseBasketSum = function (element) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) - element.getProductPrice();
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText) - calculatePercent(element.getProductPrice(), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
}
let increaseBasketSum = function (productPrice) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) + productPrice;
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText)+calculatePercent(Number(productPrice), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
}
let increaseCounterBasket = function (count) {
    BASKET_PREVIEW_ELEMENT.innerText = parseInt(BASKET_PREVIEW_ELEMENT.innerText) + count;
}