const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  if (trimmedEmail === '' || trimmedPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };

  console.log(formData);

  registerForm.reset();
}
