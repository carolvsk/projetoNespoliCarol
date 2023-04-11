var campoFiltro = document.querySelector("#filtrar-tabela")
campoFiltro.addEventListener("input", function () {
    //Captura os nomes dos clientes
    var clientes = document.querySelectorAll(".cliente");


    if (this.value.length > 0) {
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            var tdNome = cliente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // var expressao = new RegExp(this.value, "i");
            var expressao = this.value.toLowerCase();
            var table = nome.substring(0, this.value.length);

            //if (nome !=this.value){
            //usando expressões regulares
            if (!(expressao == table.toLowerCase())) {
                cliente.classList.add("invisivel")
            } else {
                cliente.classList.remove("invisivel")
            }
        }
    } else {
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            cliente.classList.remove("invisivel")
        }
    }
})