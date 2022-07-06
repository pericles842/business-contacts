// formulario loguin


var submitSingup = document.getElementById('submit-singup');
submitSingup.addEventListener('click',savePasword);



var nameSingup = document.getElementById('name-singup').value;
var passwordSingup = document.getElementById('password-singup').value;
var passwordAccountGlobal //contraseña de acceso
var userNameGlobal // usuario de acceso 




 function savePasword(){
    var userName = document.getElementById('user-name');
    var nameSingup = document.getElementById('name-singup').value;
    var lastNameSingup = document.getElementById('last-name-singup').value;
    var passwordConfirmSingup = document.getElementById('password-confirm-singup').value;
    var passwordSingup = document.getElementById('password-singup').value;

    if (nameSingup.length == 0) {
        alert('Campo nombre vacio');
    }else if( lastNameSingup.length == 0){
        alert('Campo apellido vacio');
    }else if(passwordSingup.length == 0){
        alert('Campo contraseña vacio');
    }else{
        if (passwordSingup == passwordConfirmSingup) {
            alert('Tu cuenta ha sido creada exitosamente');
            passwordAccountGlobal = passwordSingup;
            userNameGlobal = nameSingup;
            document.getElementById('hidden').style.display="block";
            document.getElementById('hidden-singup').style.display="none";
        } else {
            alert('La contraseña no coincide, intente nuevamente');
        }
    }

 }

 //formulario singup 
 var buttonSingupFalse = document.getElementById('button-login-false');
 buttonSingupFalse.addEventListener('click',validationData);

 function validationData() {
    var nameLogin = document.getElementById('name-login').value;
    var passwordLogin = document.getElementById('password-login').value;

    if (nameLogin == userNameGlobal && passwordLogin == passwordAccountGlobal ) {
        document.getElementById('button-login-true').style.display="block";
        document.getElementById('button-login-false').style.display="none";
        alert('entra')
    } else {
        alert('Contraseña incorrecta, intente de nuevo')
    }
 }
