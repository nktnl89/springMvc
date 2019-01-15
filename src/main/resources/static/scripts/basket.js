let basketClose = function () {
    let basketElement = document.querySelector(".popupBasket");
    basketElement.style.cssText = "z-index: 0;";
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