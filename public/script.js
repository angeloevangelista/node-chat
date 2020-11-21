const socket = io();

function renderMessage(message, myMessage = true) {
  const childElement = document.createElement('div');

  childElement.classList.add('message');
  childElement.classList.add(myMessage ? 'my-message' : 'partner-message');
  childElement.innerHTML = `<strong>${message.author}</strong>: ${message.message}`;

  document.querySelector('.messages').appendChild(childElement);
}

socket.on('previousMessages', (messages) => {
  messages.forEach((message) => renderMessage(message, false));
});

socket.on('receivedMessage', (message) => renderMessage(message, false));

document.getElementById('chat').addEventListener('submit', (event) => {
  event.preventDefault();

  var author = document.querySelector('input[name=username]').value;
  var message = document.querySelector('input[name=message]').value;

  if (!(author.length && message.length)) return;

  var messageObject = {
    author,
    message,
  };

  renderMessage(messageObject);

  socket.emit('sendMessage', messageObject);
});
