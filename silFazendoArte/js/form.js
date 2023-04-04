var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    //Captura o formulário
    var form = document.querySelector("#form-adiciona");

    var validacao = validaEncomenda(obtemEncomenda(form));

    if (validacao.length > 0) {
        exibeMensagensErro(validacao);
        return;
    }

    //Captura a tabela de encomendas

    var tabela = document.querySelector("#tabela-clientes");

    //Prepara e insere a nova linha na tabela

    tabela.appendChild(montaTr(obtemEncomenda(form)));

    //Limpa o formulario

    form.reset();

})


//Captura os dados da encomenda
function obtemEncomenda(form) {

    var encomenda = {
        nome: form.nome.value,
        produto: form.produto.value,
        qtde: form.qtde.value,
        unitario: form.unitario.value,
    }

    return encomenda;
}

function montaTr(encomenda) {
    //Cria a nova linha da tabela
    var encomendaTr = document.createElement("tr");

    //Monta a nova linha
    encomendaTr.appendChild(montaTd(encomenda.nome));
    encomendaTr.appendChild(montaTd(encomenda.produto));
    encomendaTr.appendChild(montaTd(encomenda.qtde));
    encomendaTr.appendChild(montaTd(formataValor(encomenda.unitario)));
    encomendaTr.appendChild(montaTd(calculaTotal(encomenda.qtde, encomenda.unitario)));

    return encomendaTr;
}

function montaTd(dados) {

    var td = document.createElement("td");
    td.textContent = dados;

    return td;
}

var erros = [];

function validaEncomenda(encomenda) {

    if (erros.length > 0) {
        erros.length = 0;
    }

    if (!validaNome(encomenda.nome)) {
        erros.push("Nome inválido");
    }

    if (!validaProduto(encomenda.produto)) {
        erros.push("Produto inválido");
    }

    if (!validaQtde(encomenda.qtde)) {
        erros.push("Quantidade inválida");
    }

    if (!validaUnitario(encomenda.unitario)) {
        erros.push("Valor unitário inválido");
    }
    return erros
}

//função para exibir os erros de preenchimento de formulario

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    if (erros.length > 1) {
        ul.innerHTML = "";
    }

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.style.color = "red";
        ul.appendChild(li);
    });
}