// Elementos a los que le aplicaremos el innerHTML o donde se ingresa el DOM
const primerTexto = document.getElementById('primer-texto');
const segundoTexto = document.getElementById('segundo-texto');
const color = document.getElementById('color');
const fondo = document.getElementById('fondo');
const colorText = document.getElementById('color-text');
const backColor = document.getElementById('back-color');
const centerText = document.getElementById('center-text');

// Elementos a los que se les aplicara los eventos
const topInput = document.getElementById('top-input');
const topCheck = document.getElementById('top-check');
const option = document.getElementById('option');
const inputSize = document.getElementById('input-size');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const centrar = document.getElementById('centrar');
const transparente = document.getElementById('transparente')
const urlImg = document.getElementById('url-img');

topInput.addEventListener('keyup', () => {
  primerTexto.innerHTML = topInput.value;
});


topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    primerTexto.style.display = 'none';
    primerTexto.classList.add('ocultar');
  } else {
    primerTexto.style.display = 'block';
    // primerTexto.style.color = 'red';
    primerTexto.style.backGround = 'blue';
    primerTexto.classList.remove('ocultar');
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
  segundoTexto.style.textAlign = 'left';
});

derecha.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(derecha.id);
  primerTexto.style.textAlign = 'right';
  segundoTexto.style.textAlign = 'right';
});

centrar.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(centrar.id);
  primerTexto.style.textAlign = 'center';
  segundoTexto.style.textAlign = 'center';
});

color.addEventListener('input', (e)=>{
  const textColor = e.target.value;
  primerTexto.style.color = textColor;
  segundoTexto.style.color = textColor;
  colorText.innerHTML = textColor.toUpperCase();
})

fondo.addEventListener('input', (e)=>{
  const textColor = e.target.value;
  primerTexto.style.backgroundColor = textColor;
  segundoTexto.style.backgroundColor = textColor;
  backColor.innerHTML = textColor.toUpperCase();
})
transparente.addEventListener('click', (e) => {
  if(e.target.checked){
    // primerTexto.style.backgroundColor = 'rgba(0,0,0, 0.0)'

  }
})

urlImg.addEventListener('keyup', ()=>{
  const src = urlImg.value;
  console.log(src);
  centerText.style.backgroundImage = `url('${src}')`;
  centerText.style.backgroundPosition = 'center';
  centerText.style.backgroundRepeat = 'no-repeat';
  centerText.style.backgroundSize = 'contain';
});




