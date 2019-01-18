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
    $("<div>", {class: "issueButton", text: "Оформить", onClick: "issueOrder()"}).appendTo(".basketSum");
    $("<div>", {text: "Скидка 10%"}).appendTo(".basketSum");
    $("<div>", {class: "discountSum"}).appendTo(".basketSum");
    $("<div>", {text: "Итого"}).appendTo(".basketSum");
    $("<div>", {class: "totalSum"}).appendTo(".basketSum");

    createProductElement(document.querySelector(".basketProducts"));
}

function createProductElement(parentNode) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket",
        data: null,
        dataType: "json",
        cache: false,
        timeout: 600000,
        success: function (data) {
            data.forEach(function(product, i, data) {
                new Product(product.id, product.img, product.text, product.price).createProductElement(parentNode);
                increaseBasketSum(product.price);
            });
        }
    });
}

function basketClose() {
    $(".popupBasket").remove();
}
function decreaseBasketSum(productPrice) {
    $(".productSum").text(Number($(".productSum").text()) - productPrice);
    $(".discountSum").text(Number($(".discountSum").text()) - calculatePercent(Number(productPrice), DISCOUNT_PERCENT));
    $(".totalSum").text($(".productSum").text() - $(".discountSum").text());
}
function increaseBasketSum(productPrice) {
    $(".productSum").text(Number($(".productSum").text()) + productPrice);
    $(".discountSum").text(Number($(".discountSum").text())+calculatePercent(Number(productPrice), DISCOUNT_PERCENT));
    $(".totalSum").text($(".productSum").text() - $(".discountSum").text());
}
function increaseCounterBasket(count) {
    BASKET_PREVIEW_ELEMENT.innerText = parseInt(BASKET_PREVIEW_ELEMENT.innerText) + count;
}
function addProductToOrder(buttonAddElement) {
    addProductToOrderClick(buttonAddElement.parentNode.getAttribute("id"));
}
function addProductToOrderClick(productId) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket/add",
        data: productId,
        dataType: "json",
        cache: false,
        timeout: 600000,
        success: function (data) {
            increaseCounterBasket(1);
        }
    });
}
function deleteFromOrder(buttonAddElement) {
    deleteFromOrderClick(buttonAddElement.parentNode);
}
function deleteFromOrderClick(productNode) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket/delete",
        data: productNode.getAttribute("id"),
        dataType: "json",
        cache: false,
        timeout: 600000,
        success: function (data) {
            increaseCounterBasket(-1);
            decreaseBasketSum(data.price);
            productNode.remove();
        }
    });
}

function issueOrder() {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket/issue",
        cache: false,
        timeout: 600000,
        success: function () {
            alert("улюлюлю");
        }
    });
}