// System Intelligence - AI Assistant Logic Core
const siKnowledgeBase = {
    sectors: [
        "Agriculture", "Airline", "Banking", "Construction", 
        "Diplomacy", "E-commerce", "Education", "Energy", 
        "Food Service", "Hotel", "Insurance", "Manufacturing", 
        "Military", "Pharmaceuticals", "Real Estate", "Retail", 
        "Shipping", "Telecommunications", "Transportation"
    ],
    messageTemplates: {
        welcome: "I am the System Intelligence AI. I can guide you through our 2100+ optimization projects across 21 sectors. Which industry are you interested in?",
        not_found: "I couldn't find specific details for that. Please mention one of our core sectors like Education, Banking, or Manufacturing.",
        contact: "For pro access and deployment of these modules, please contact Ahsan Khan via the WhatsApp button."
    }
};

document.getElementById('si-send').addEventListener('click', function() {
    processChat();
});

document.getElementById('si-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        processChat();
    }
});

function processChat() {
    const inputField = document.getElementById('si-input');
    const messageContainer = document.getElementById('si-messages');
    const userText = inputField.value.trim().toLowerCase();

    if (userText === "") return;

    // Display User Message
    appendMessage("User", inputField.value, "rgba(255,255,255,0.1)");
    inputField.value = "";

    // AI Logic Response
    setTimeout(() => {
        let response = "";
        
        // Basic Sector Matching Logic
        let matchedSector = siKnowledgeBase.sectors.find(s => userText.includes(s.toLowerCase()));

        if (matchedSector) {
            response = `In the **${matchedSector}** sector, we offer over 100 specialized optimization tools including resource allocation, predictive analytics, and supply chain synchronization. Would you like to see the Pro Demo for this?`;
        } else if (userText.includes("hello") || userText.includes("hi")) {
            response = siKnowledgeBase.messageTemplates.welcome;
        } else {
            response = siKnowledgeBase.messageTemplates.not_found;
        }

        appendMessage("AI", response, "rgba(0,242,255,0.05)");
    }, 500);
}

function appendMessage(sender, text, bgColor) {
    const messageContainer = document.getElementById('si-messages');
    const msgDiv = document.createElement('div');
    msgDiv.style.padding = "10px";
    msgDiv.style.borderRadius = "8px";
    msgDiv.style.marginBottom = "10px";
    msgDiv.style.background = bgColor;
    msgDiv.style.border = "1px solid rgba(255,255,255,0.05)";
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messageContainer.appendChild(msgDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
