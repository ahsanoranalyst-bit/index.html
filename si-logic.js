/**
 * SYSTEM INTELLIGENCE - NEURAL ENGINE CORE
 * Global Industrial Optimization & AI Support
 * Architect: Ahsan Khan
 */

const GEMINI_API_KEY = "AIzaSyDJFL8zre9pgoK8BDZyMuw1XBO_UIDurbk"; 

async function askGemini(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: `
                    System Identity: You are the 'System Intelligence Neural Assistant'.
                    Lead Developer: Ahsan Khan, a renowned Operations Research (OR) Analyst and Systems Architect.
                    Core Mission: Provide professional, technical, and strategic insights about industrial optimization.
                    Context: Ahsan Khan has developed over 2100+ projects across 21 sectors including Education, Banking, Manufacturing, and Military.
                    Tone: Corporate, precise, and highly intelligent. 
                    
                    Instructions: 
                    1. Always maintain a professional English tone.
                    2. If asked about the founder, mention Ahsan Khan's expertise in deterministic logic and efficiency models.
                    3. For industry-specific queries, explain how optimization can solve complex problems in that sector.
                    4. Keep responses concise but comprehensive.

                    User Query: ${prompt}` 
                }]
            }]
        })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.candidates[0].content.parts[0].text;
}

async function processChat() {
    const inputField = document.getElementById('si-input');
    const userText = inputField.value.trim();
    
    if (!userText) return;

    // Render User Message
    appendMessage("User", userText, "rgba(255,255,255,0.1)");
    inputField.value = "";

    // Neural Processing State
    const loadingId = "ai-node-" + Date.now();
    appendMessage("System Intelligence", "Analyzing via Neural Core...", "rgba(0,242,255,0.05)", loadingId);

    try {
        const aiResponse = await askGemini(userText);
        const aiDiv = document.getElementById(loadingId);
        
        // Clean and Format the AI output
        const formattedResponse = aiResponse
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<b style="color:#ffd700">$1</b>') // Gold highlighting for bold text
            .replace(/\* /g, '• '); // Cleaner bullet points

        aiDiv.innerHTML = `<strong style="color:#00f2ff; text-transform:uppercase; font-size:10px; letter-spacing:1px;">System Intelligence AI</strong><br><div style="margin-top:5px;">${formattedResponse}</div>`;
    } catch (error) {
        document.getElementById(loadingId).innerHTML = `<strong style="color:#ff4d4d">Critical Error:</strong> Synchronizing with Neural Core failed. Please verify network status.`;
        console.error("Core Exception:", error);
    }
}

function appendMessage(sender, text, bgColor, id = "") {
    const container = document.getElementById('si-messages');
    const div = document.createElement('div');
    if(id) div.id = id;
    
    div.style.cssText = `
        padding: 15px; 
        border-radius: 10px; 
        margin-bottom: 15px; 
        background: ${bgColor}; 
        border: 1px solid rgba(255,255,255,0.05); 
        font-size: 14px; 
        line-height: 1.6; 
        color: #e0e0e0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    
    div.innerHTML = `<strong style="color:#00f2ff; text-transform:uppercase; font-size:10px; letter-spacing:1px;">${sender}</strong><br><div style="margin-top:5px;">${text}</div>`;
    container.appendChild(div);
    
    // Smooth scroll to bottom
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('si-send');
    const inputField = document.getElementById('si-input');

    if(sendBtn) sendBtn.onclick = processChat;
    if(inputField) {
        inputField.onkeypress = (e) => {
            if (e.key === 'Enter') processChat();
        };
    }
});
