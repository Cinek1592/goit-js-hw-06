let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueElement = document.querySelector("#value");

decrementButton.addEventListener("click", function () {
  counterValue--;
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener("click", function () {
  counterValue++;
  valueElement.textContent = counterValue;
});
