function Product(id, productPicture, productText, productPrice) {
    this.id = id;
    this.img = productPicture;
    this.text = productText;
    this.price = productPrice;

    let productClosure = this;
    this.getProductPrice = function() {
        return productClosure.price;
    }
    this.createProductElementForAdmin = function(parentNode) {
        $("<div>", {class: "product opened admin", id: this.id}).appendTo(parentNode);
        $("<div>", {class: "productPicture"}).appendTo("#"+this.id+".product");
        $("<img>", {id: "productImg"+this.id, src: this.img}).appendTo($("#"+this.id).children(".productPicture"));
        $("<div>", {class: "productText"}).appendTo("#"+this.id+".product");
        $("<input>", {id: "productText"+this.id, value: this.text}).appendTo($("#"+this.id).children(".productText"));
        $("<div>", {class: "productPrice"}).appendTo("#"+this.id+".product");
        $("<input>", {id: "productPrice"+this.id, value: this.price}).appendTo($("#"+this.id).children(".productPrice"));
        $("<div>", {class: "saveChanges", text: "Сохранить изменения", onclick: "saveChangesOnClick(this)"}).appendTo("#"+this.id+".product");
        $("<div>", {class: "deleteProduct", text: "Удалить продукт", onclick: "deleteProductOnClick(this)"}).appendTo("#"+this.id+".product");
    }

    this.createProductElement = function(parentNode) {
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
function createProducts() {
    setVisibilityAllProductChildrenToFalse();
}
function replyClick(element) {
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
function setCloseStyle(element) {
    if (element.classList.contains("opened")) {
        element.classList.remove("opened");
    }
}
function setOpenStyle(element) {
    element.classList.add("opened");
}
function closeAnotherProducts() {
    let productsElementNodeList = document.querySelectorAll(".product.opened");
    productsElementNodeList.forEach(element => {
        if (calculatePercentsWidthOfElement(element) > 80) {
            setCloseStyle(element);
        }
    })
}
function setVisibilityAllProductChildrenToFalse() {
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
function setVisibilityProductChildren(element, value) {
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

function saveChangesOnClick(saveBtn) {
    let productElement = $("#"+saveBtn.parentNode.getAttribute("id"));

    let product = new Product(productElement.attr("id"),
        $("#"+("productImg"+productElement.attr("id"))).attr("src"),
        $("#"+("productText"+productElement.attr("id"))).val(),
        $("#"+("productPrice"+productElement.attr("id"))).val());

    saveChangesClick(product);
}
function saveChangesClick(product) {
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "products/update",
        data: JSON.stringify(product),
        dataType: "json",
        cache: false,
        timeout: 600000,
//        success: function (data) {
//        }
    });
}
function deleteProductOnClick(deleteBtn) {
    deleteProductClick(deleteBtn.parentNode.getAttribute("id"));
}
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
    $("<div>", {class: "createProductPopup"}).appendTo($("body"));
    $("<div>", {class: "createProductPopupContent"}).appendTo(".createProductPopup");
    $("<div>", {class: "newProductHeader"}).appendTo(".createProductPopupContent");
    $("<div>", {class: "headline", text: "Новый продукт:"}).appendTo(".newProductHeader");
    $("<div>", {class: "closeButton", text: "[X]"}).appendTo(".newProductHeader");
    $(".closeButton").click(function() {$(".createProductPopup").remove()});
    $("<form>", {id: "createProductForm"}).appendTo(".createProductPopupContent");

    $("<input>", {name: "img", type: "text", placeholder: "Путь до картинки"}).appendTo("#createProductForm");
    $("<input>", {name: "price", type: "text", placeholder: "Цена"}).appendTo("#createProductForm");
    $("<input>", {name: "text", type: "text", placeholder: "Описание"}).appendTo("#createProductForm");
    $("<input>", {id: "createProductSubmit", type: "button", value: "Создать товар", onclick:"createProductForm(event)"}).appendTo("#createProductForm");
}
function createProductForm(event) {
    event.preventDefault();
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
        dataType: "json",
        cache: false,
        timeout: 600000,
        success: function (data) {
            new Product(data.id, data.img, data.text, data.price).createProductElementForAdmin(document.querySelector(".category"));
            $(".createProductPopup").remove();
        }
    });
}

function getProductById(productId){
    let selectedProduct = productArrayCategory.find(product => product.id == productId);
    if (selectedProduct === undefined) {
        throw new RangeError(`Продукт с id ${productId} не найден!`);
    }
    return selectedProduct;
}