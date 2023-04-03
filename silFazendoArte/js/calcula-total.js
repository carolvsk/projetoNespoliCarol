//Altera o título da tabela
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

//Captura os dados de todos os clientes
var clientes = document.querySelectorAll(".cliente");

for (var i=0; i < clientes.length; i++){
    
    /*================================================================
        ROTINA DE CÁLCULO DO VALOR TOTAL POR ENCOMENDA
    ==================================================================*/
    
    //Captura a QUANTIDADE encomendada por cada cliente
    var qtde = clientes[i].querySelector(".info-qtde").textContent;

    //Captura o VALOR UNITÁRIO de cada encomenda
    var unitario = clientes[i].querySelector(".info-valor").textContent;

    //Verifica se a QUANTIDADE recebida é válida
    if (!validaQtde(qtde)){
        clientes[i].querySelector(".info-total").textContent="Quantidade inválida!";
        //Colore a fonte dessa linha na cor vermelha
        clientes[i].style.color = "red";
    }
    else{
        //Verifica se o VALOR UNITÁRIO é válido
        if (!validaUnitario(unitario)){
            clientes[i].querySelector(".info-total").textContent="Valor unitário é inválido!";
            //Colore o fundo dessa linha na cor light coral
            clientes[i].style.backgroundColor = "lightcoral";
        }
        else{
                //Formata o VALOR UNITÁRIO
                clientes[i].querySelector(".info-valor").textContent = formataValor(unitario);

            //Calcula o VALOR TOTAL e exibe na tabela
            clientes[i].querySelector(".info-total").textContent= calculaTotal(qtde,unitario);

        }
    }
}

//Formatação de valor
function formataValor(valor){

    var valor = parseFloat(valor);

    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

//Função para calcular o VALOR TOTAL
function calculaTotal(qtde, unitario){
    var total = 0;

    //Faz o cálculo do valor total
    total = qtde * unitario;

    return formataValor(total);
}

//função que valida quantidade
function validaQtde(qtde){
    if(!isNaN(qtde) && (qtde)>0){
        return true;
    }else{
        return false;
    }
}

//função que valida o valor unitario
function validaUnitario (unitario){
    if (!isNaN(unitario) && (unitario)>0){
        return true;
    }else{
        return false;
    } 
}
