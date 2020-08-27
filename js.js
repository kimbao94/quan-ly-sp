let productLish = ["Sony", "Samsung", "Nokia", "Xiaomi", "Apple", "Oppo"];

function showAllProduct() {
    let data = "<table border='1px'>";
    data += "<tr>" +
        "<td>Product Name</td>" +
        "<td></td>" +
        "</tr>";
    for (let i = 0; i < productLish.length; i++) {
        data += "<tr>" +
            "<td id='productName" + i + "'>" + productLish[i] + "</td>" +
            "<td>" +
            "<button onclick='editProduct(" + i + ")' style='background-color: greenyellow'>Edit</button>" +
            "<button onclick='deleteProduct(" + i + ")' style='background-color: greenyellow'>Delete</button>" +
            "</td>" +
            "</tr>";
    }
    data += "</table>"

    document.getElementById("listProdcut").innerHTML = data;
}

function addNewProduct() {
    let newProductName = document.getElementById("newProduct").value;
    productLish.push(newProductName);
    showAllProduct();
}

function deleteProduct(index) {
    if (confirm("bạn có chắc sẽ xóa ?")) {
        productLish.splice(index, 1);
        showAllProduct();
    }
}

function editProduct(id) {
    productLish[id] = prompt("nhập vào tên muốn sửa");
    showAllProduct();
}
