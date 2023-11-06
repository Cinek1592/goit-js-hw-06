document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const input = this;
    const length = input.getAttribute("data-length");
    if (input.value.length == length) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
