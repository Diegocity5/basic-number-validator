const resultsDiv = document.getElementById('results-div');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');


checkBtn.onclick = ()=>{
  if(userInput.value.trim() === ''){
    alert('Please provide a phone number');
  }
};

clearBtn.onclick = ()=>{
  resultsDiv.textContent = '';
}
