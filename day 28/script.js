document.addEventListener("DOMContentLoaded", () => {
  const chatContainers = document.querySelectorAll(".chat-container");

  chatContainers.forEach((container) => {
    const chatMessages = container.querySelector(".chat-messages");
    const userInput = container.querySelector(".user-input");
    const sendButton = container.querySelector(".send-button");

    function addMessage(message, isSent) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.classList.add(isSent ? "sent" : "received");
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
      const message = userInput.value.trim();
      if (message) {
        addMessage(message, true);
        userInput.value = "";

        // Send message to the other chat container
        const otherContainer =
          container.id === "user1"
            ? document.getElementById("user2")
            : document.getElementById("user1");
        const otherChatMessages =
          otherContainer.querySelector(".chat-messages");
        const receivedMessage = document.createElement("div");
        receivedMessage.classList.add("message", "received");
        receivedMessage.textContent = message;
        otherChatMessages.appendChild(receivedMessage);
        otherChatMessages.scrollTop = otherChatMessages.scrollHeight;
      }
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  });
});
