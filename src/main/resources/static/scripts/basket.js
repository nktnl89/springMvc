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

    createProductElement($(".basketProducts"));
}

function createProductElement(parentNode) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket",
        data: null,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            data.forEach(new Product(currentValue.id,currentValue.img,currentValue.text,currentValue.price).createProductElement(parentNode));
        }
    });
}


function basketClose() {
    $(".popupBasket").remove();
}
function deleteFromOrder(buttonDeleteElement) {
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
function decreaseBasketSum(element) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) - element.getProductPrice();
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText) - calculatePercent(element.getProductPrice(), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
}
function increaseBasketSum(productPrice) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) + productPrice;
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText)+calculatePercent(Number(productPrice), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
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
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {
            increaseCounterBasket(1);

            //        increaseBasketSum(selectedProduct);
            //        selectedProduct.createProductElement(BASKET_PRODUCTS_ELEMENT);
            //        BASKET_PRODUCTS_ELEMENT.querySelectorAll(".product").forEach(element => {
            //            element.setAttribute("onClick", null);
            //        });
        }
    });
}
function deleteFromOrder(buttonAddElement) {
    deleteFromOrderClick(buttonAddElement.parentNode.getAttribute("id"));
}
function deleteFromOrderClick(productId) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/basket/delete",
        data: productId,
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {
            increaseCounterBasket(-1);

            //        increaseBasketSum(selectedProduct);
            //        selectedProduct.createProductElement(BASKET_PRODUCTS_ELEMENT);
            //        BASKET_PRODUCTS_ELEMENT.querySelectorAll(".product").forEach(element => {
            //            element.setAttribute("onClick", null);
            //        });
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
            //increaseCounterBasket(-1);
            alert("улюлюлю");

            //        increaseBasketSum(selectedProduct);
            //        selectedProduct.createProductElement(BASKET_PRODUCTS_ELEMENT);
            //        BASKET_PRODUCTS_ELEMENT.querySelectorAll(".product").forEach(element => {
            //            element.setAttribute("onClick", null);
            //        });
        }
    });
}