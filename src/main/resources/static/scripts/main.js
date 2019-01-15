let productArrayCategory = [];

const BASKET_PREVIEW_ELEMENT = document.querySelector(".basketPreview");
const PRODUCTS_SUM_ELEMENT = document.querySelector(".productSum");
const DISCOUNT_SUM_ELEMENT = document.querySelector(".discountSum");
const TOTAL_SUM_ELEMENT = document.querySelector(".totalSum");
const BASKET_PRODUCTS_ELEMENT = document.querySelector(".basketProducts");
const DISCOUNT_PERCENT = 10;

window.onload = function() {
    //createProducts();
    $(".product").click(function() {replyClick(this)});
    $(".search, .basket").click(function() {popupClick(this)});
    $(".searchHeader .closeButton").click(function() {searchClose()});
    $(".issueButton, .basketHeader .closeButton").click(function() {basketClose()});
    $(".addProductToOrder").click(function() {addProductToOrder(this)});
    $(".deleteFromOrder").click(function() {deleteFromOrder(this)});
    $(".popupSearchContent [type=button]").click(function() {findProductByName(this)});
}

$(document).ready(function () {
    $("#search-form").submit(function (event) {
        event.preventDefault();
        findProductsSubmit();
    });
});

function findProductsSubmit() {
    var search = {}
    search["search"] = $("#text-to-find").val();
    $("#btn-search").prop("disabled", true);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            let foundedProducts = document.querySelector("#foundedProducts");
            data.forEach(product => {
                let productObject = new Product(product.id, product.img, product.text, product.price)
                productObject.createProductElement(foundedProducts);
            });
            $("#btn-search").prop("disabled", false);
        }
    });
}

let addToBasketAddListener = function(){
    let addProductToOrderElementNodeList = document.querySelectorAll(".addProductToOrder");
    addProductToOrderElementNodeList.forEach(element => {
        element.addEventListener("click", function() {addProductToOrder(element);}, false);
    });
}
let popupClick = function (element) {
    let selectedElement;
    if (element.className == "search") {
        selectedElement = document.querySelector(".popupSearch");
    }
    if (element.className == "basket") {
        selectedElement = document.querySelector(".popupBasket");
    }
    selectedElement.style.cssText = "z-index: 10;";
}
let calculatePercentsWidthOfElement = function (element) {
    let parent = element.parentNode;
    let widthPercents = Math.floor((element.offsetWidth / parent.offsetWidth) * 100);
    return widthPercents;
}
let calculatePercent = function (num, percent) {
    return Math.floor(num * (percent / 100));
}