/* Sidebar toggle */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');

  if (sidebar.classList.contains('open')) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
}

function closeSidebarOnOverlay() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('open');
  overlay.style.display = 'none';
}

/* Contact Form Submission */
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
}

/* AI Chat – basic placeholder */
let mode = "friendly";

function addMessage(content, sender) {
  const chatWindow = document.getElementById("chatWindow");
  if (!chatWindow) return;

  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = content;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(userText) {
  const responses = {
    friendly: [
      "Hey there! How can I help you today?",
      "I'm here to assist you with a smile!",
      "Feel free to ask me anything, friend!"
    ],
    professional: [
      "Greetings. How may I assist you?",
      "I'm here to provide accurate and reliable information.",
      "Feel free to inquire about any topic."
    ],
    funny: [
      "What's up? Need some giggles?",
      "I don't know why the chicken crossed the road either!",
      "Ask me something! I'll try to be funny."
    ]
  };
  const resArray = responses[mode] || [];
  return resArray[Math.floor(Math.random() * resArray.length)];
}

function changeMode(newMode) {
  mode = newMode;
  addMessage(`Bot mode changed to ${newMode}`, "bot");
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  if (!userInput) return;

  const text = userInput.value.trim();
  if (text) {
    addMessage(text, "user");
    userInput.value = "";
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      addMessage(botResponse, "bot");
    }, 600);
  }
}
