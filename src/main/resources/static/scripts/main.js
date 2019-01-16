let productArrayCategory = [];

const BASKET_PREVIEW_ELEMENT = document.querySelector(".basketPreview");
const PRODUCTS_SUM_ELEMENT = document.querySelector(".productSum");
const DISCOUNT_SUM_ELEMENT = document.querySelector(".discountSum");
const TOTAL_SUM_ELEMENT = document.querySelector(".totalSum");
const BASKET_PRODUCTS_ELEMENT = document.querySelector(".basketProducts");
const DISCOUNT_PERCENT = 10;

window.onload = function() {
    $(".product").click(function() {replyClick(this)});
    //$(".issueButton, .basketHeader .closeButton").click(function() {basketClose()});
    $(".basket").click(function() {createPopupForBasket()});
    $(".addProductToOrder").click(function() {addProductToOrder(this)});
    $(".deleteFromOrder").click(function() {deleteFromOrder(this)});
    $(".search").click(function() {createPopupForSearch()})
}

let addToBasketAddListener = function(){
    let addProductToOrderElementNodeList = document.querySelectorAll(".addProductToOrder");
    addProductToOrderElementNodeList.forEach(element => {
        element.addEventListener("click", function() {addProductToOrder(element);}, false);
    });
}
let calculatePercentsWidthOfElement = function (element) {
    let parent = element.parentNode;
    let widthPercents = Math.floor((element.offsetWidth / parent.offsetWidth) * 100);
    return widthPercents;
}
let calculatePercent = function (num, percent) {
    return Math.floor(num * (percent / 100));
}