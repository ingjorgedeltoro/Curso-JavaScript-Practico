const valor1 = document.getElementById('calculo1');
const valor2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const respuesta = document.getElementById('result');
btn.addEventListener('click', btnClick);

function btnClick(){
    let suma = parseInt(valor1.value) + parseInt(valor2.value);
    result.innerText = "El resultado es: " + suma;
}