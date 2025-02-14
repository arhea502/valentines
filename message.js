function changeMessage() {
  const messages = [
    "You really do make me happy, hope you're okay.",
    "Remember to take care of yourself.",
    "I am/was really lucky to have you in my life, it really means a lot.",
    "You're my favorite reason to smile. So, just be okay please.",
    "Gosh, we're being too emotional when making this. You know how we are. It's funny."
  ];

  const messageElement = document.getElementById('message');
  const currentMessage = messageElement.textContent;

  let newMessage;
  do {
    newMessage = messages[Math.floor(Math.random() * messages.length)];
  } while (newMessage === currentMessage);

  // Fade effect for smooth transition
  messageElement.style.opacity = 0;
  setTimeout(() => {
    messageElement.textContent = newMessage;
    messageElement.style.opacity = 1;
  }, 300);
}

function goToPage() {
  // Replace the URL below with the link to the page you want to go to
  window.location.href = "talking.html";  // Replace with your desired URL
}
