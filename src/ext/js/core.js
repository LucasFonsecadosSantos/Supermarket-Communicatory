function addProduct() {
    var name = document.getElementById("productName").value;
    var unit = document.getElementById("productUnit").value;
    var price = document.getElementById("productPrice").value;
    var isOferta = document.getElementById("isOferta").value;
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
        alert(tableSize);
        for (i=0 ; i < tableSize ; i++) {
            printCreation(layoutSetting, products);
        }
    }
}

function printCreation(layoutSetting, products) {
    switch (layoutSetting) {
        case "price_a4_portrait":
            var productsStr = "";
            for (i=0;i<products.length;i++) {
                productsStr += "<div class=\"page\">"+
                    "<center>"+
                        "<h4><b>OFERTA</b></h4>"+
                        "<h2>"+products[i][1]+"</h1>"+
                        "<h3><i>"+products[i][2]+"</i></h1>"+
                        "<h1>"+products[i][3]+"</h1>"+
                    "</center>"+
                "</div>";
            }
            var page = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=600px,height=400px");            ;
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
                                "position: absolute;"+
                                "left: 20%;"+
                                "margin-bottom: 5%;"+
                            "}"+
                            "h2 {"+
                                "margin-top:-9%;"+
                                "font-size:90px;"+
                                "min-height:324px !important;"+
                                "max-height:324px !important;"+
                                "overflow:hidden;"+
                            "}"+
                            "h4 {"+
                                "font-size:100px;"+
                                "padding-left: 30%"+
                                "padding-right: 30%"+
                            "}"+
                            "h4:first-letter {"+
                                "text-transform: uppercase;"+
                            "}"+
                            "h4:after {"+
                                "content:\"◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "h4:before {"+
                                "content:\"◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "b {"+
                                "margin: 0px 1cm 0px 1cm;"+
                            "}"+
                            "h3 {"+
                                "font-size:50px;"+
                                "margin-top:2.5%;"+
                                "margin-bottom:20%;"+
                                "max-height:60px;"+
                                "min-height:60px;"+
                                "overflow:hidden;"+
                            "}"+
                            "h1 {"+
                                "overflow: hidden;"+
                                "font-size:230px;"+
                                "display:inline-block;"+
                                "transform:scale(1,1.4); /* W3C */"+
                                "-webkit-transform:scale(1,1.4); /* Safari and Chrome */"+
                                "-moz-transform:scale(1,1.4); /* Firefox */"+
                                "-ms-transform:scale(1,1.4); /* IE 9 */"+
                                "-o-transform:scale(1,1.4); /* Opera */"+
                                "color:#F00;"+
                            "}"+
                            "h1:before {"+
                                "content: \" R$\";"+
                                "font-size: 60px;"+
                            "}"+
                            "body {"+
                                "width: 21cm;"+
                            "}"+
                            ".page {"+
                                "height: 29.7cm; "+
                            "}"+
                            "@media print {"+
                                "body {"+
                                "}"+
                            "}"+
                        "</style>"+
                    "</head>"+
                    "<body>"+
                        productsStr+
                    "</body>"+
                "</html>"
            );
            break;
        case "price_a4_landscape":
            var productsStr = "";
            for (i=0;i<products.length;i++) {
                productsStr += "<div class=\"page\">"+
                    "<center>"+
                        "<h4><b>OFERTA</b></h4>"+
                        "<h2>"+products[i][1]+"</h1>"+
                        "<h3><i>"+products[i][2]+"</i></h1>"+
                        "<h1>"+products[i][3]+"</h1>"+
                    "</center>"+
                "</div>";
            }
            var page = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=600px,height=400px");            ;
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
                                "position: absolute;"+
                                "left: 20%;"+
                                "margin-bottom: 5%;"+
                            "}"+
                            "h2 {"+
                                "margin-top:-5%;"+
                                "font-size:70px;"+
                                "min-height:160px !important;"+
                                "max-height:160px !important;"+
                                "max-width: 95%;"+
                                "overflow:hidden;"+
                            "}"+
                            "h4 {"+
                                "font-size:70px;"+
                                "padding-left: 30%"+
                                "padding-right: 30%"+
                            "}"+
                            "h4:first-letter {"+
                                "text-transform: uppercase;"+
                            "}"+
                            "h4:after {"+
                                "content:\"◼◼◼◼◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "h4:before {"+
                                "content:\"◼◼◼◼◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "b {"+
                                "margin: 0px 1cm 0px 1cm;"+
                            "}"+
                            "h3 {"+
                                "font-size:50px;"+
                                "margin-top:1.5%;"+
                                "margin-bottom:1.5%;"+
                                "max-height:60px;"+
                                "min-height:60px;"+
                                "overflow:hidden;"+
                            "}"+
                            "h1 {"+
                                "overflow: hidden;"+
                                "font-size:230px;"+
                                "display:inline-block;"+
                                "transform:scale(1,1.2); /* W3C */"+
                                "-webkit-transform:scale(1,1.2); /* Safari and Chrome */"+
                                "-moz-transform:scale(1,1.2); /* Firefox */"+
                                "-ms-transform:scale(1,1.2); /* IE 9 */"+
                                "-o-transform:scale(1,1.2); /* Opera */"+
                                "color:#F00;"+
                            "}"+
                            "h1:before {"+
                                "content: \" R$\";"+
                                "font-size: 60px;"+
                            "}"+
                            "body {"+
                                "width: 29.7cm;"+
                            "}"+
                            ".page {"+
                                "height: 18cm; "+
                            "}"+
                            "@media print {"+
                                "body {"+
                                "}"+
                            "}"+
                        "</style>"+
                    "</head>"+
                    "<body>"+
                        productsStr+
                    "</body>"+
                "</html>"
            );
            break;
    }
    return;
}

function get_price_a4_portrait_settings() {
    return 
}