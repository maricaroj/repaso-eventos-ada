// Elemtos a los que le aplicaremos el innerHTML o donde se ingresa el DOM
const primerTexto = document.getElementById('primer-texto');

// Elementos a los que se les aplicara los eventos
const topInput = document.getElementById('top-input');
const topCheck = document.getElementById('top-check');
const option = document.getElementById('option');
const inputSize = document.getElementById('input-size');
const izquierda = document.getElementById('izquierda');

topInput.addEventListener('keyup', () => {
  primerTexto.innerHTML = topInput.value;
});


topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    // primerTexto.style.display = 'none';
    // primerTexto.classList.add('ocultar');
  } else {
    // primerTexto.style.display = 'block';
    // primerTexto.style.color = 'red';
    // primerTexto.style.backGround = 'blue';
    // primerTexto.classList.remove('ocultar');
  }
});

option.addEventListener('change', () => {
  primerTexto.style.fontFamily = `${option.value}`;
});

inputSize.addEventListener('keyup', () => {
  primerTexto.style.fontSize = `${inputSize.value}px`
});

inputSize.addEventListener('click', () => {
  primerTexto.style.fontSize = `${inputSize.value}px`
});

izquierda.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(izquierda.id);
  primerTexto.style.textAlign = 'left';
});




