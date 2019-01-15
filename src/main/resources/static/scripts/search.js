let searchClose = function () {
    let searchElement = document.querySelector(".popupSearch");
    searchElement.style.cssText = "z-index: 0;";
}
let findProductByName = function (element) {
    let form = element.form;
    let searchQuery = form.elements.search.value.toLowerCase();
    let foundedProductsElement = document.querySelector(".foundedProducts");
    let foundedProductsList = foundedProductsElement.querySelectorAll(".product");
    foundedProductsList.forEach(element => {
        foundedProductsElement.removeChild(element);
    });
    productArrayCategory.forEach(element => {
        if (element.productText.toLowerCase().indexOf(searchQuery) > -1) {
            element.createProductElement(foundedProductsElement);
        }
    });
    setVisibilityProductChildren(form.parentNode, false);
}