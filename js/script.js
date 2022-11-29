var result = document.querySelector('#id-result');

var idHeight = document.querySelector('#id-height');
var idWeight = document.querySelector('#id-weight');

var btnClear = document.querySelector('#btn-clear');

var imgResult = document.querySelector('#img-result');

const calcIMC = () => {
  if (idHeight.value !== '' && idWeight.value !== '') {
    const imc = (idWeight.value / (idHeight.value * idHeight.value)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
      classification = 'Abaixo do peso';
      imgResult.innerHTML = "<img src='img/low_weight.png'>";
    } else if (imc < 25) {
      classification = 'Peso normal';
      imgResult.innerHTML = "<img src='img/normal_weight.png'>";
    } else if (imc < 30) {
      classification = 'Sobrepeso/Acima do peso';
      imgResult.innerHTML = "<img src='img/over_weight.png'>";
    } else if (imc < 35) {
      classification = 'Obesidade Grau I';
      imgResult.innerHTML = "<img src='img/obese.png'>";
    } else if (imc < 41) {
      classification = 'Obesidade Grau II';
      imgResult.innerHTML = "<img src='img/too_weight.png'>";
    } else {
      classification = 'Obesidade Grau III';
    }
    
    result.innerHTML = `IMC: ${imc} (${classification})`;
  } else {
    alert('Certifique-se de preencher todos os campos!');
  }
}

btnClear.addEventListener('click', () => {
    idHeight.value = "";
    idWeight.value = "";
    result.innerHTML = "";
    imgResult.innerHTML = "";
    // imgResult.setAttribute('src', '');
    // imgResult.style.display = 'none';
    // imgResult.style.visibility = 'hidden';
});