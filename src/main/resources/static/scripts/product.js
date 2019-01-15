function Product(id, productPicture, productText, productPrice) {
    this.id = id;
    this.productPicture = productPicture;
    this.productText = productText;
    this.productPrice = productPrice;

    let productClosure = this;
    this.getProductPrice = function() {
        return productClosure.productPrice;
    }
    this.createProductElement = function (parentNode) {
        let newProductDiv = document.createElement("div");
        newProductDiv.className = "product";
        newProductDiv.setAttribute("id", productClosure.id);
        newProductDiv.setAttribute("onClick", "replyClick(this)");

        let newProductImg = document.createElement("div");
        newProductImg.className = "productPicture";
        let newImg = document.createElement("img");
        newImg.setAttribute("src", productClosure.productPicture)
        newProductImg.appendChild(newImg);

        let newProductText = document.createElement("div");
        newProductText.className = "productText";
        newProductText.innerText = productClosure.productText;

        let newProductPrice = document.createElement("div");
        newProductPrice.className = "productPrice";
        newProductPrice.innerText = productClosure.productPrice + " р.";

        let newProductAddProductToOrder = document.createElement("div");
        newProductAddProductToOrder.className = "addProductToOrder";
        newProductAddProductToOrder.setAttribute("onClick", "addProductToOrder(this)");
        newProductAddProductToOrder.innerText = "В корзину";

        let newProductDeleteFromOrder = document.createElement("div");
        newProductDeleteFromOrder.className = "deleteFromOrder";
        newProductDeleteFromOrder.setAttribute("onclick", "deleteFromOrder(this)");
        newProductDeleteFromOrder.innerText = "[X]";

        newProductDiv.appendChild(newProductImg);
        newProductDiv.appendChild(newProductText);
        newProductDiv.appendChild(newProductPrice);
        newProductDiv.appendChild(newProductAddProductToOrder);
        newProductDiv.appendChild(newProductDeleteFromOrder);

        parentNode.appendChild(newProductDiv);
    }
}
let createProducts = function () {
    setVisibilityAllProductChildrenToFalse();
}
let replyClick = function (element) {
    if (calculatePercentsWidthOfElement(element) < 80) {
        closeAnotherProducts();
        setOpenStyle(element);
        setVisibilityAllProductChildrenToFalse();
        setVisibilityProductChildren(element, true);
        element.scrollIntoView(false);
    } else {
        closeAnotherProducts();
        setVisibilityAllProductChildrenToFalse();
        setCloseStyle(element);
        element.scrollIntoView(false);
    }
}
let setCloseStyle = function (element) {
    if (element.classList.contains("opened")) {
        element.classList.remove("opened");
    }
}
let setOpenStyle = function (element) {
    element.classList.add("opened");
}
let closeAnotherProducts = function () {
    let productsElementNodeList = document.querySelectorAll(".product.opened");
    productsElementNodeList.forEach(element => {
        if (calculatePercentsWidthOfElement(element) > 80) {
            setCloseStyle(element);
        }
    })
}
let setVisibilityAllProductChildrenToFalse = function () {
    let stringSelector = ".category .productPrice, \
        .category .addProductToOrder, \
        .category .deleteFromOrder,\
        .foundedProducts .productPrice, \
        .foundedProducts .addProductToOrder, \
        .foundedProducts .deleteFromOrder";
    let productChildrenNodeList = document.querySelectorAll(stringSelector);
    productChildrenNodeList.forEach(elementChild => {
        elementChild.style.cssText = "display: none;";
    });
}
let setVisibilityProductChildren = function (element, value) {
    let productChildrenNodeList = element.querySelectorAll(".productPrice, .addProductToOrder");
    productChildrenNodeList.forEach(elementChild => {
        if (value) {
            elementChild.style.cssText = "display: flex;\
                align-items: center;\
                justify-content: center;";
        } else {
            elementChild.style.cssText = "display: none;";
        }
    });
}
let addProductToOrder = function (buttonAddElement) {
    let productElement = buttonAddElement.parentNode;
    try {
        let selectedProduct = getProductById(productElement.getAttribute("id"));
        increaseCounterBasket(1);
        increaseBasketSum(selectedProduct);
        selectedProduct.createProductElement(BASKET_PRODUCTS_ELEMENT);
        BASKET_PRODUCTS_ELEMENT.querySelectorAll(".product").forEach(element => {
            element.setAttribute("onClick", null);
        });
    } catch (e) {
        alert(e.message);
    }
}
let getProductById = function(productId){
    let selectedProduct = productArrayCategory.find(product => product.id == productId);
    if (selectedProduct === undefined) {
        throw new RangeError(`Продукт с id ${productId} не найден!`);
    }
    return selectedProduct;
}