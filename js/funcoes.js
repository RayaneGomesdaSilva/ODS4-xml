//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml", false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;
//Armazena as postagens do Xml em um array
x = xmlDoc.getElementsByTagName("postagem");

function teste(){
for(i=x.lenght-1; i>=0; i--){
        document.write(
            "<tr>" +
            "<td>"+ x[i].getAttribute("codigo") + "</td>" +
            "<td><img src = 'imgs/" + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></td>" +
            "<td><a href='http://localhost/blog/postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></td>" + 
            "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) + "...</td>" +
            "</tr>");
    }

}
function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //armazena a id , ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<tr>" + 
            "<td>" + x[i].getAttribute("codigo") + "</td>" + 
            "<td><img src='imgs/" + x[i].getElementByTagName("imagem")[0].childNodes[0].nodeValue+"'width='150'></td>" +
            "<td>"+ x[i].getElementByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
            "<td>"+ x[i].getElementByTagName("corpo")[0].childNodes[0].nodeValue + "</td>" +
            "</tr>");

}
