const form = document.getElementById('form-ex');

function validarFormulario() {
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
        alert ("Parabens o Numero 02 é Maior que o Numero 1");
        return true; // Formulário válido, pode ser submetido
    } else {
        alert("O número no Campo B deve ser maior que o número no Campo A.");
        return false; // Impede a submissão do formulário
    }
}


form.addEventListener('submit', function(e){
      e.preventDefault();
      validarFormulario();
  
     

})

//const numero1 = document.getElementById('numUm');
//const numero2 = document.getElementById('numDois');


//const mensagemSucesso = 'Está válido o numero 2 : ${numero2} é maior que o Numero 1: ${numero1}';



