function addProduct() {
    var name = document.getElementById("productName").value;
    var unit = document.getElementById("productUnit").value;
    var price = document.getElementById("productPrice").value;
    var isOferta = document.getElementById("isOferta").checked;
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
        var newCell06 = newRow.insertCell(5);
        newCell01.innerHTML = "<p title=\"ID: "+name+"\" alt=\"id do produto: "+name+"\">0</p>";
        newCell02.innerHTML = "<p title=\""+name+"\" alt=\"nome do produto: "+name+"\">"+name+"</p>";
        newCell03.innerHTML = "<p title=\"unidade do produto em "+unit+"\" alt=\"unidade do produto: "+unit+"\">"+unit+"</p>";
        newCell04.innerHTML = "<p title=\"preço do produto: "+price+"\" alt=\"preço do produto: "+price+"\">"+price+"</p>";
        if (isOferta) {
            newCell05.innerHTML = "<input type=\"checkbox\" checked title=\"É uma oferta?\" alt=\"Este produto é uma oferta?\"/><label>É uma oferta.</label>";
        } else {
            newCell05.innerHTML = "<input type=\"checkbox\" title=\"É uma oferta?\" alt=\"Este produto é uma oferta?\"/><label>É uma oferta.</label>";
        }
        newCell06.innerHTML = "<img onclick=\"viewPrint(this)\" src=\"img/eye.svg\" title=\"Clique para visualizar a impressão.\" alt=\"Botão para visualizar a impressão.\"/><img onclick=\"removeProduct(this)\" src=\"img/delete.svg\" title=\"Clique para remover este produto.\" alt=\"Botão para remover o produto.\"/>";
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
            products[i] = new Array(4);
            for (j=1 ; j<cellSize-2 ; j++) {
                products[i][j] = cell[j].firstChild.innerHTML;
            }
            products[i][4] = cell[4].firstChild.checked;
        }
        for (i=0 ; i < tableSize ; i++) {
            printCreation(layoutSetting, products);
        }
    }
}

function characterCounter(element) {
    var value;
    document.getElementById("charCounter").innerHTML = element.maxLength - element.value.length;
}

function printCreation(layoutSetting, products) {
    switch (layoutSetting) {
        case "price_a4_portrait":
            var productsStr = "";
            var oferta = "";
            var limit = products.length;
            for (i=0 ; i<limit ; i++) {
                if (products[i][4]) {
                    oferta = "OFERTA";
                } else {
                    oferta = "◼◼◼◼";
                }
                productsStr += "<div class=\"page\">"+
                    "<center>"+
                        "<h4><b>"+oferta+"</b></h4>"+
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
                                "font-family:Arial, sans-serif;"+
                                "margin-top:-9%;"+
                                "font-size:90px;"+
                                "min-height:324px !important;"+
                                "max-height:324px !important;"+
                                "overflow:hidden;"+
                            "}"+
                            "h4 {"+
                                "font-family:Arial, sans-serif;"+
                                "font-size:100px;"+
                                "padding-left: 30%"+
                                "padding-right: 30%"+
                            "}"+
                            "h4:first-letter {"+
                                "text-transform: uppercase;"+
                            "}"+
                            "h4:after {"+
                                "font-family:Arial, sans-serif;"+
                                "content:\"\\25AE\\25AE\\25AE\\25AE\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -20px;"+
                            "}"+
                            "h4:before {"+
                                "font-family:Arial, sans-serif;"+
                                "content:\"\\25AE\\25AE\\25AE\\25AE\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -20px;"+
                            "}"+
                            "b {"+
                                "margin: 0px 1cm 0px 1cm;"+
                            "}"+
                            "h3 {"+
                                "font-family:Arial, sans-serif;"+
                                "font-size:50px;"+
                                "margin-top:2.5%;"+
                                "margin-bottom:20%;"+
                                "max-height:60px;"+
                                "min-height:60px;"+
                                "overflow:hidden;"+
                            "}"+
                            "h1 {"+
                                "font-family:Arial, sans-serif;"+
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
                                "font-family:Arial, sans-serif;"+
                                "content: \" R$\";"+
                                "font-size: 60px;"+
                            "}"+
                            "body {"+
                                "width: 21cm;"+
                            "}"+
                            ".page {"+
                                "height: 27cm; "+
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
                    "<script>print();</script>"+
                "</html>"
            );
            break;
        case "price_a4_landscape":
            var productsStr = "";
            var oferta = "";
            var limit = products.length;
            for (i=0 ; i<limit ; i++) {
                if (products[i][4]) {
                    oferta = "OFERTA";
                } else {
                    oferta = "◼◼◼◼";
                }
                productsStr += "<div class=\"page\">"+
                    "<center>"+
                        "<h4><b>"+oferta+"</b></h4>"+
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
                    "<script>print();</script>"+
                "</html>"
            );
            break;
        case "price_a4_4x":
            var productsStr = "";
            var ogerta = "";
            var limit = products.length;
            productsStr += "<div class=\"page\"><center>";

            for (i=0 ; i<limit ; ++i) {
                
                if (products[i][4]) {
                    oferta = "OFERTA";
                } else {
                    oferta = "◼◼◼◼";
                }
                
                productsStr += "<div class=\"subPage\">"+
                            "<h4><b>"+oferta+"</b></h4>"+
                            "<h2>"+products[i][1]+"</h1>"+
                            "<h3><i>"+products[i][2]+"</i></h1>"+
                            "<h1>"+products[i][3]+"</h1>"+
                        "</div>";
            }
            productsStr += "</center></div>";
            var page = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=600px,height=400px");
            page.document.write(
                "<html>"+
                    "<head>"+
                        "<style>"+
                            ".page:first-child .subPage {"+
                                "width: 14cm;"+
                                "height: 9cm;"+
                                "overflow: hidden;"+
                                "float: left;"+
                                "border: dashed 1px #afafaf;"+
                                "text-align: center;"+
                                "margin-top: 0px !important;"+
                            "}"+
                            ".subPage:nth-child(1), .subPage:nth-child(2) {"+
                                "margin-top: 2.2cm;"+
                            "}"+
                            ".subPage {"+
                                "width: 14cm;"+
                                "height: 9cm;"+
                                "overflow: hidden;"+
                                "float: left;"+
                                "border: dashed 1px #afafaf;"+
                                "text-align: center;"+
                            "}"+
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
                                "font-size:40px;"+
                                "min-height:95px !important;"+
                                "max-height:95px !important;"+
                                "max-width: 95%;"+
                                "overflow:hidden;"+
                            "}"+
                            "h4 {"+
                                "font-size:30px;"+
                                "padding-left: 30%"+
                                "padding-right: 30%"+
                            "}"+
                            "h4:first-letter {"+
                                "text-transform: uppercase;"+
                            "}"+
                            "h4:after {"+
                                "content:\"◼◼◼◼◼◼◼◼◼◼◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "h4:before {"+
                                "content:\"◼◼◼◼◼◼◼◼◼◼◼◼\";"+
                                "background:#000;"+
                                
                                "letter-spacing: -10px;"+
                            "}"+
                            "b {"+
                                "margin: 0px 1cm 0px 1cm;"+
                            "}"+
                            "h3 {"+
                                "font-size:30px;"+
                                "margin-top:1%;"+
                                "margin-bottom:1%;"+
                                "max-height:35px;"+
                                "min-height:35px;"+
                                "overflow:hidden;"+
                            "}"+
                            "h1 {"+
                                "overflow: hidden;"+
                                "font-size:90px;"+
                                "display:inline-block;"+
                                "transform:scale(1,0.8); /* W3C */"+
                                "-webkit-transform:scale(1,0.8); /* Safari and Chrome */"+
                                "-moz-transform:scale(1,0.8); /* Firefox */"+
                                "-ms-transform:scale(1,0.8); /* IE 9 */"+
                                "-o-transform:scale(1,0.8); /* Opera */"+
                                "color:#F00;"+
                            "}"+
                            "h1:before {"+
                                "content: \" R$\";"+
                                "font-size: 30px;"+
                            "}"+
                            "body {"+
                                "width: 29.7cm;"+
                            "}"+
                            ".page {"+
                                "display: inline;"+
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
                    "<script>print();</script>"+
                "</html>"
            );
            break;
    }
    return;
}

function get_price_a4_portrait_settings() {
    return 
}