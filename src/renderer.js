// 🤖 CodeOllie Desktop Renderer - Handles User Actions and Chat Logic
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    const folderButton = document.querySelector('.folder-btn');

    // 💬 Function to create and render a clean chat message bubble
    function appendMessage(text, sender) {
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message', sender);
        messageBubble.innerText = text;
        chatMessages.appendChild(messageBubble);
        
        // Automatically scroll down to the newest message entry
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 🚀 Execution rule for handling message dispatching
    function handleSendMessage() {
        const userPrompt = inputField.value.trim();
        if (userPrompt === '') return; // Skip execution if the box is blank

        // 1. Render user message bubble on the right side
        appendMessage(userPrompt, 'user');
        inputField.value = ''; // Clean the input text string box

        // 2. Simulate an automatic AI confirmation response bubble on the left
        setTimeout(() => {
            appendMessage("🤖 Thinking... Connecting to your configured local LLM provider engine context profile.", "bot");
        }, 600);
    }

    // 🖱️ Wire up interactive event listeners for clicks and keypresses
    sendButton.addEventListener('click', handleSendMessage);
    
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });

    // 📂 Visual indicator for folder opening selections
    folderButton.addEventListener('click', () => {
        const statusText = document.querySelector('.sidebar p');
        statusText.innerText = "📁 Loaded: codeollie-desktop";
        statusText.style.color = "#5A9EAA";
        appendMessage("📁 System Node: Connected workspace target folder environment path successfully.", "bot");
    });
});
