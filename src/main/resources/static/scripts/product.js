function Product(id, productPicture, productText, productPrice) {
    this.id = id;
    this.img = productPicture;
    this.text = productText;
    this.price = productPrice;

    let productClosure = this;
    this.getProductPrice = function() {
        return productClosure.price;
    }
    this.createProductElement = function (parentNode) {
        let newProductDiv = document.createElement("div");
        newProductDiv.className = "product";
        newProductDiv.setAttribute("id", productClosure.id);
        newProductDiv.setAttribute("onClick", "replyClick(this)");

        let newProductImg = document.createElement("div");
        newProductImg.className = "productPicture";
        let newImg = document.createElement("img");
        newImg.setAttribute("src", productClosure.img)
        newProductImg.appendChild(newImg);

        let newProductText = document.createElement("div");
        newProductText.className = "productText";
        newProductText.innerText = productClosure.text;

        let newProductPrice = document.createElement("div");
        newProductPrice.className = "productPrice";
        newProductPrice.innerText = productClosure.price + " р.";

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
    //if (calculatePercentsWidthOfElement(element) < 80) {
        closeAnotherProducts();
        setOpenStyle(element);
        setVisibilityAllProductChildrenToFalse();
        setVisibilityProductChildren(element, true);
        element.scrollIntoView(false);
//    } else {
//        closeAnotherProducts();
//        setVisibilityAllProductChildrenToFalse();
//        setCloseStyle(element);
//        element.scrollIntoView(false);
//    }
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

$(".saveChanges").click(function (event) {
    let productElement = $("#"+this.parentNode.getAttribute("id"));

    let product = new Product(productElement.attr("id"),
        $("#"+("productImg"+productElement.attr("id"))).attr("src"),
        $("#"+("productText"+productElement.attr("id"))).val(),
        $("#"+("productPrice"+productElement.attr("id"))).val());

    saveChangesClick(product);
});
function saveChangesClick(product) {
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "products/update",
        data: JSON.stringify(product),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
        }
    });
}
$(".deleteProduct").click(function (event) {
    deleteProductClick(this.parentNode.getAttribute("id"));
});
function deleteProductClick(productId) {
    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "products/delete/"+productId,
        cache: false,
        timeout: 600000,
        success: function (data) {
            let product = $("#"+productId);
            product.detach();
        }
    });
}
$(".createProduct").click(function (event) {
    createPopupForNewProduct();
});
function createPopupForNewProduct(){
    let popup = document.createElement("div");
    let content = document.createElement("div");
    let form = document.createElement("form");

    $(popup).addClass("createProductPopup")
        .appendTo($("body"));
    $(content)
        .addClass("createProductPopupContent")
        .appendTo($(popup));
    $("<form>", {id: "createProductForm"}).appendTo(".createProductPopupContent");
    $("<input>", {name: "img", type: "text"}).appendTo("#createProductForm");
    $("<input>", {name: "price", type: "text"}).appendTo("#createProductForm");
    $("<input>", {name: "text", type: "text"}).appendTo("#createProductForm");
    $("<input>", {id: "createProductSubmit", type: "button", value: "Создать товар", onclick:"createProductForm(event)"}).appendTo("#createProductForm");
}
function createProductForm(event) {
    event.preventDefault();
//    $(".createProductForm").find("");
    //тут должен быть результат формы
//    let product = new Product(productElement.attr("id"),
//            $("#"+("productImg"+productElement.attr("id"))).attr("src"),
//            $("#"+("productText"+productElement.attr("id"))).val(),
//            $("#"+("productPrice"+productElement.attr("id"))).val());

    let newProduct = new Product(0,
                             $("input[name='img']").val(),
                             $("input[name='text']").val(),
                             $("input[name='price']").val());
    createProductClick(newProduct);
    $(".createProductPopup").remove();
};

$("#createProductSubmit").click(function (event) {
    event.preventDefault();
});

function createProductClick(product) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "products/",
        data: JSON.stringify(product),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            //а тут нужно создать элемент хтмл
            product.createProductElement($(".category"));
            $(".createProductPopup").remove();
        }
    });
}

let getProductById = function(productId){
    let selectedProduct = productArrayCategory.find(product => product.id == productId);
    if (selectedProduct === undefined) {
        throw new RangeError(`Продукт с id ${productId} не найден!`);
    }
    return selectedProduct;
}