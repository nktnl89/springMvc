let productArrayCategory = [];
//productArrayCategory[0] = new Product(0, "../3/img/Computer-Guy.png", "Computer-guy", Math.floor(Math.random() * 100));
//productArrayCategory[1] = new Product(1, "../3/img/1317567954.png", "I know what you did", Math.floor(Math.random() * 100));
//productArrayCategory[2] = new Product(2, "../3/img/1317604469.png", "Why???", Math.floor(Math.random() * 100));
//productArrayCategory[3] = new Product(3, "../3/img/1369219032.png", "Poker-face", Math.floor(Math.random() * 100));
//productArrayCategory[4] = new Product(4, "../3/img/Ben-Chang-aka-Senor-Chang-bw-by-Rones.png", "Ben-Chang-meme", Math.floor(Math.random() * 100));
//productArrayCategory[5] = new Product(5, "../3/img/1-2016011842.png", "I know that feel bro", Math.floor(Math.random() * 100));
//productArrayCategory[6] = new Product(6, "../3/img/Facepalm.png", "Facepalm", Math.floor(Math.random() * 100));
//productArrayCategory[7] = new Product(7, "../3/img/feels.png", "Pepe the frog", Math.floor(Math.random() * 100));
//productArrayCategory[8] = new Product(8, "../3/img/forever-alone-bw.png", "Forever alone", Math.floor(Math.random() * 100));
//productArrayCategory[9] = new Product(9, "../3/img/FryazinoWitness.png", "Fryazino witness", Math.floor(Math.random() * 100));
//productArrayCategory[10] = new Product(10, "../3/img/Meme-me-gusta.png", "Me gusta", Math.floor(Math.random() * 100));
//productArrayCategory[11] = new Product(11, "../3/img/Untitled-1.png", "Okay-guy", Math.floor(Math.random() * 100));
//productArrayCategory[12] = new Product(12, "../3/img/YaoMing-meme.png", "Yao Ming-meme", Math.floor(Math.random() * 100));

const BASKET_PREVIEW_ELEMENT = document.querySelector(".basketPreview");
const PRODUCTS_SUM_ELEMENT = document.querySelector(".productSum");
const DISCOUNT_SUM_ELEMENT = document.querySelector(".discountSum");
const TOTAL_SUM_ELEMENT = document.querySelector(".totalSum");
const BASKET_PRODUCTS_ELEMENT = document.querySelector(".basketProducts");
const DISCOUNT_PERCENT = 10;

window.onload = function() {
    createProducts();
    $(".product").click(function() {replyClick(this)});
    $(".search, .basket").click(function() {popupClick(this)});
    $(".searchHeader .closeButton").click(function() {searchClose()});
    $(".issueButton, .basketHeader .closeButton").click(function() {basketClose()});
    $(".addProductToOrder").click(function() {addProductToOrder(this)});
    $(".deleteFromOrder").click(function() {deleteFromOrder(this)});
    $(".popupSearchContent [type=button]").click(function() {findProductByName(this)});
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