function searchClose() {
    $(".popupSearch").remove();
}
function createPopupForSearch(){
    $("<div>", {class: "popupSearch"}).appendTo($("body"));
    $("<div>", {class: "popupSearchContent"}).appendTo(".popupSearch");
    $("<div>", {class: "searchHeader"}).appendTo(".popupSearchContent");
    $("<div>", {class: "headline", text: "Поиск:"}).appendTo(".searchHeader");
    $("<div>", {class: "closeButton", text: "[X]"}).appendTo(".searchHeader");
    $(".closeButton").click(function() {searchClose()});
    $("<form>", {id: "searchForm"}).appendTo(".popupSearchContent");
    $("<input>", {type: "text", name: "search", id: "text-to-find", placeholder: "Наименование товара..."}).appendTo("#searchForm");
    $("<input>", {type: "submit", id: "btn-search", value: "Найти"}).appendTo("#searchForm");
    $("<div>", {class: "foundedProducts", id: "foundedProducts"}).appendTo(".popupSearchContent");
    $("#searchForm").submit(function (event) {
            event.preventDefault();
            findProductsSubmit();
        });
}

function findProductsSubmit() {
    let search = {}
    search["search"] = $("#text-to-find").val();
    $("#btn-search").prop("disabled", true);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: "text",
        cache: false,
        timeout: 600000,
        success: function (data) {
            let foundedProducts = document.querySelector("#foundedProducts");
            data.forEach(product => {
                new Product(product.id, product.img, product.text, product.price).createProductElement(foundedProducts);
            });
            $("#btn-search").prop("disabled", false);
        }
    });
}