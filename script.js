function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);

document.getElementById("meuFormulario").addEventListener("submit", function(event){
    // Prevenir o envio padrão do formulário
    event.preventDefault();
  
    // Redirecionar para outra página
    window.location.href = "../index.html";
  });