function addProduct() {
    var name = document.getElementById("productName").value;
    var unit = document.getElementById("productUnit").value;
    var price = document.getElementById("productPrice").value;
    if (name == ""){
        alert("Ops: Voce se esqueceu de preencher o campo nome.\n Por favor, refaça a operação preenchendo corretamente o campo nome.\n\n Exemplo: Coca-Cola");
    } else if (unit == ""){
        alert("Ops: Voce se esqueceu de preencher o campo unidade.\n Por favor, refaça a operação preenchendo corretamente o campo unidade.\n\nExemplo: Tipo 1 - 5kg");
    } else if (price == "") {
        alert("Ops: Voce se esqueceu de preencher o campo preço.\n Por favor, refaça a operação preenchendo corretamente o campo preço.\n\nExemplo: 5,99");
    } else {
        var newRow = document.getElementById("productsTable").insertRow(-1);
        var newCell01 = newRow.insertCell(0);
        var newCell02 = newRow.insertCell(1);
        var newCell03 = newRow.insertCell(2);
        var newCell04 = newRow.insertCell(3);
        var newCell05 = newRow.insertCell(4);
        newCell01.innerHTML = "<p title=\"ID: "+name+"\" alt=\"id do produto: "+name+"\">0</p>";
        newCell02.innerHTML = "<p title=\""+name+"\" alt=\"nome do produto: "+name+"\">"+name+"</p>";
        newCell03.innerHTML = "<p title=\"unidade do produto em "+unit+"\" alt=\"unidade do produto: "+unit+"\">"+unit+"</p>";
        newCell04.innerHTML = "<p title=\"preço do produto: "+price+"\" alt=\"preço do produto: "+price+"\">"+price+"</p>";
        newCell05.innerHTML = "<img onclick=\"viewPrint(this)\" src=\"img/eye.svg\" title=\"Clique para visualizar a impressão.\" alt=\"Botão para visualizar a impressão.\"/><img onclick=\"removeProduct(this)\" src=\"img/delete.svg\" title=\"Clique para remover este produto.\" alt=\"Botão para remover o produto.\"/>";
    }
    document.getElementById("productName").focus();
    document.getElementById("productPrice").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productUnit").value = "";
}

function removeProduct(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}

function execPrint() {
    var layoutSetting = document.getElementById("documentType").value;

    var name = document.getElementById("productName").value;
    var unit = document.getElementById("productUnit").value;
    var price = document.getElementById("productPrice").value;
    
    if (layoutSetting == "information") {

    } else {
        var table = document.getElementById("productsTable").rows;
        var tableSize = table.length;
        var products = [];
        var cell;
        for (i=0 ; i<tableSize ; i++) {
            cell = table[i].cells;
            cellSize = cell.length;
            products[i] = new Array(3);
            for (j=1 ; j<cellSize-1 ; j++) {
                products[i][j] = cell[j].firstChild.innerHTML;
            }
        }
        for (i=0 ; i<tableSize ; i++) {
            for (j=1 ; j<cellSize-1 ; j++) {
                console.log(products[i][j]);
            }
        }
        printCreation(layoutSetting, products[0][1], products[0][2], products[0][3]);
    }
}

function printCreation(layoutSetting, name, unit, price) {
    var page = window.open("","_blank");
    page.document.write(
        "<html>"+
            "<head>"+
                "<style>"+
                    "h2, h1, h3 {"+
                        "margin:0px;"+
                        "padding:0px;"+
                    "}"+
                    "span {"+
                        "font-size:60px;"+
                    "}"+
                    "h2 {"+
                        "margin-top:30%;"+
                        "font-size:90px;"+
                    "}"+
                    "h3 {"+
                        "font-size:50px;"+
                        "margin-top:5%;"+
                        "margin-bottom:20%;"+
                    "}"+
                    "h1 {"+
                        "font-size:110px;"+
                        "color:#F00;"+
                    "}"+
                    "body {"+
                        "width: 21cm;"+
                        "height: 29.7cm; "+
                    "}"+
                    "@media print {"+
                        "body {"+
                        "}"+
                    "}"+
                "</style>"+
            "</head>"+
            "<body>"+
                "<center>"+
                    "<h2>"+name+"</h1>"+
                    "<h3>"+unit+"</h1>"+
                    "<h1><span>R$</span> "+price+"</h1>"+
                "</center>"+
            "</body>"+
        "</html>"
    );
}