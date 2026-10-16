document.addEventListener('DOMContentLoaded', () => {
    // Layout pointers
    const inputField = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    const folderButton = document.querySelector('.folder-btn');
    
    // Dynamic settings hooks
    const settingsBtn = document.querySelector('.settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const saveConfigBtn = document.getElementById('save-config-btn');
    const providerSelect = document.getElementById('provider-select');
    const apiKeyInput = document.getElementById('api-key-input');
    const activeBadge = document.getElementById('active-badge');

    // Local runtime identity space variables
    let savedProvider = "None";
    let savedKey = "";

    function appendMessage(text, sender) {
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message', sender);
        messageBubble.innerHTML = text;
        chatMessages.appendChild(messageBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // ⚙️ Modal Open / Close operations
    settingsBtn.addEventListener('click', () => {
        settingsModal.style.visibility = 'visible';
        settingsModal.style.opacity = '1';
    });

    saveConfigBtn.addEventListener('click', () => {
        savedProvider = providerSelect.value;
        savedKey = apiKeyInput.value.trim();

        if(savedKey !== "") {
            activeBadge.innerText = `Provider: ${savedProvider}`;
            appendMessage(`⚙️ <b>System Profile Loaded:</b> Switched active workspace pipeline engine targets to use <b>${savedProvider}</b> dynamically.`, "bot");
        }
        
        // Hide the layout pop-up card window view overlay context
        settingsModal.style.visibility = 'hidden';
        settingsModal.style.opacity = '0';
    });

    // Close modal if user clicks outside the inner card window grid bounding zone boundary
    settingsModal.addEventListener('click', (e) => {
        if(e.target === settingsModal) {
            settingsModal.style.visibility = 'hidden';
            settingsModal.style.opacity = '0';
        }
    });

    function handleSendMessage() {
        const userPrompt = inputField.value.trim();
        if (userPrompt === '') return;

        appendMessage(userPrompt, 'user');
        inputField.value = '';

        setTimeout(() => {
            if(savedKey === "") {
                appendMessage("❌ <b>Authentication Alert:</b> Please launch your <b>⚙️ API Settings</b> tab and append a valid API key token string sequence before invoking code prompts.", "bot");
            } else {
                appendMessage(`🤖 <b>Thinking...</b> Routing your file generation instruction request packet straight into the active <b>${savedProvider}</b> pipeline stream execution framework.`, "bot");
            }
        }, 600);
    }

    sendButton.addEventListener('click', handleSendMessage);
    inputField.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendMessage(); });

    folderButton.addEventListener('click', () => {
        const statusText = document.querySelector('.sidebar p');
        statusText.innerText = "📁 Loaded: codeollie-desktop";
        statusText.style.color = "#5A9EAA";
        appendMessage("📁 Connected workspace folder repository profile path target context environment.", "bot");
    });
});
