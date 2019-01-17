let productArrayCategory = [];

const BASKET_PREVIEW_ELEMENT = document.querySelector(".basketPreview");
const PRODUCTS_SUM_ELEMENT = document.querySelector(".productSum");
const DISCOUNT_SUM_ELEMENT = document.querySelector(".discountSum");
const TOTAL_SUM_ELEMENT = document.querySelector(".totalSum");
const BASKET_PRODUCTS_ELEMENT = document.querySelector(".basketProducts");
const DISCOUNT_PERCENT = 10;

window.onload = function() {
    $(".saveChanges").click(function() {saveChangesOnClick(this)});
    $(".deleteProduct").click(function() {deleteProductOnClick(this)});
}