document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('input[name=username]')?.value;

  window.location += `chat/${username}`;
});
