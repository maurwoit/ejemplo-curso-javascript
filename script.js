const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector('#formulario');


//form.addEventListener('submit', sumarInputValues);
form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  //event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  console.log(sumaInputs);
  resultado.innerHTML = "Resultado : " + sumaInputs;
}
