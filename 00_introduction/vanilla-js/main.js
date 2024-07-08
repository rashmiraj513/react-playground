const adviceElement = document.getElementById('advice');
const buttonElement = document.getElementById('btn');
const countElement = document.getElementById('count');

// Initial Values
let count = 0;
let advice;

// Function to fetch the advice from the API
const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();

  // Updating Values
  advice = data.slip.advice;
  count += 1;

  adviceElement.textContent = advice;
  countElement.textContent = count;
};

// Event Listener
buttonElement.addEventListener('click', getAdvice);

// Simulate the click instead of calling the getAdvice function.
buttonElement.click();
