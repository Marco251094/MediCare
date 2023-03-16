// let btnRegistro = document.getElementById("btnRegistro");
// const email = document.getElementById("email").value;
// const password=document.getElementById("password");
// const password2=document.getElementById("password2");

// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



// function validarEmail(){
// if (regex.test(email)) {
    
// } else {
//   // El email no es válido
// }};



// btnRegistro.addEventListener("click", function(event){
//     event.preventDefault();


// })
const btnRegistro = document.getElementById("btnRegistro");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const especialidad = document.getElementById("especialidad");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const cedula = document.getElementById("cedula");
btnRegistro.addEventListener("click", function(event){
event.preventDefault()
validarFormulario();
});

function validarFormulario() {
  let valido = true;

  if (!nombre.value.match(/^[A-Z][a-z]*$/)) {
    nombre.style.borderColor = "red";
    valido = false;
  } else {
    nombre.style.borderColor = "initial";
  }

  if (!apellido.value.match(/^[A-Z][a-z]*$/)) {
    apellido.style.borderColor = "red";
    valido = false;
  } else {
    apellido.style.borderColor = "initial";
  }
  if (!cedula.value.match(/^(?!0{7})\d{7}$/)){
    cedula.style.borderColor= "red";
    valido = false;
  }else{
    cedula.style.borderColor= "initial"
  }

  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    email.style.borderColor = "red";
    valido = false;
  } else {
    email.style.borderColor = "initial";
  }

  if (especialidad.value === "Speciality") {
    especialidad.style.borderColor = "red";
    valido = false;
  } else {
    especialidad.style.borderColor = "initial";
  }

  if (password.value !== password2.value) {
    password.style.borderColor = "red";
    password2.style.borderColor = "red";
    valido = false;
  } else {
    password.style.borderColor = "initial";
    password2.style.borderColor = "initial";
  }

  if (valido) {
    alert("Formulario válido, ¡gracias por registrarte!");
  } else {
    alert("Por favor, completa los campos correctamente.");
  }
}
