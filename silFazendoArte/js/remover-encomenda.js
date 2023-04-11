var encomendas = document.querySelectorAll("table");

encomendas.forEach(function(encomenda){

    encomenda.addEventListener("dblclick", function(event){
    setTimeout(function() {
         event.target.parentNode.remove(); 
    }, 500);
    event.target.parentNode.classList.add("fadeOut");
    });
});
