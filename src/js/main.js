//Selecionando elementos del DOM
const resultsDiv = document.getElementById('results-div');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

//Manejando el evento de presion de tecla abajo "Enter".
document.addEventListener('keypress', (event)=> {
  if(event.code === "Enter") {
    checking();
  }
})

//Manejando el evento click del boton "CheckBtn".
checkBtn.onclick = ()=> checking();

//Manejando el evento click del boton "Clear".
clearBtn.onclick = ()=> resultsDiv.textContent = '';


const checking = () =>{
  const value = userInput.value.trim();
  if(value === ''){
    alert('Please provide a phone number');
  }else {
    //Si es un numero hay que validarlo
    const isValid = validateFormatePhoneNumber(value);
    renderNumbers(value, isValid);
  }
}

//Funcion encargada de validar el numero de telefono.
const validateFormatePhoneNumber  = (str)=> {
const  patternNumbers = /^1?\s?(\([\d]{3}\)|[\d]{3})[-\s]?[\d]{3}[-\s]?[\d]{4}$/;
return patternNumbers.test(str);
}

//Funcion encargada de renderizar los numeros en el DOM.
const renderNumbers = (str, isValid) => {
  const p = document.createElement('p');
  p.textContent = isValid ? `Valid US number: ${str}` : `Invalid US number: ${str}`;
  p.className = isValid ? 'valid-number' : 'invalid-number';
  resultsDiv.appendChild(p);
  userInput.value = '';
}