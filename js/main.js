$(document).ready(function(){
    const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas nao sao iguais. Digite novamente");
    } else {
    confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


    $("[name=nome]").keyup(function () { 
    	let $this = $( this ); //armazeno o ponteiro em uma variavel
		let valor = $this.val().replace(/[^a-z0-9 ]+/gi,'');
		while (valor.indexOf('  ') != -1) valor = valor.replace('  ', ' ');
		$this.val( valor );
    });
    
    $('#tel').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask("00.000-000");
    
    
    $('form').validate({
        rules:{
            nome:{
                required:true,

            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true,
            },
            cep:{
                required:true,
            },
            cpf:{
                required:true,
            
            },
        },
        
        messages:{
            nome:"Por favor, insira o seu nome completo",
            email:"Verifique se digitou seu e-mail corretamente",
            telefone:"Este campo é obrigatório",
            cep:"Este campo é obrigatório",
            cpf:"Este campo é obrigatório",
        },
    })
})
form.addEventListener('submit', function(e){
    e.preventDefault();
    const modalExemplo = new bootstrap.Modal('#login');
    setTimeout(function(){
        modalExemplo.show();
    },2000);
})

