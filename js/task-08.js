document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
      alert("Wszystkie pola muszą zostać wypełnione");
      return;
    }
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    event.target.reset();
  });
