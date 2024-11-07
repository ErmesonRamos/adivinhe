const myNumber = document.getElementById('myNumber');
const myButton = document.getElementById('myButton');
const numberRandom = Math.floor(Math.random() * 11);
let clickCount = 0;

myButton.addEventListener('click', (event) => {
  clickCount++;

  event.preventDefault();

  alert(`Você tem 3 tentativas: ${clickCount}`);
  
  const userNumber = parseInt(myNumber.value);

  if(userNumber === numberRandom) {
    alert('Parabéns você acertou o número aleátorio');
    myNumber.value = '';
    myButton.disabled = true;
  } else {
    myNumber.value = '';
  };

  if(clickCount === 3) {
    myButton.disabled = true;
    alert('Você perdeu, tente novamente');
  }
});