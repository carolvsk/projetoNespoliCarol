 //1° forma de alterar o titulo da pagina
 var titulo = document.querySelector(".titulo");
 titulo.textContent = "Lista de Encomendas";
//console.log("Estou executando em um arquivo externo")

 //2° forma de alterar o titulo da pagina
 //document.querySelector(".titulo").textContent = "Lista de Encomendas";


 //rotina de calculo do total
 //captura os dados do cliente

 var cliente = document.querySelector(".cliente");

 var qtde = cliente.querySelector(".qtde").textContent;
 var unid = cliente.querySelector(".unid").textContent;
var total = qtde * unid

 console.log(total);
 console.log(cliente.querySelector(".total").textContent);

