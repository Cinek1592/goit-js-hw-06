document.addEventListener("DOMContentLoaded", (event) => {
  const input = document.querySelector("#name-input");
  const output = document.querySelector("#name-output");

  input.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value.trim() === "") {
      output.textContent = "Anonymous";
    } else {
      output.textContent = value;
    }
  });
});
