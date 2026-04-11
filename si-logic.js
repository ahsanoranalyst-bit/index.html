/**
 * SYSTEM INTELLIGENCE - NEURAL CORE LOGIC
 * Architect: Ahsan Khan (Systems Architect & OR Analyst)
 * Purpose: Proprietary Industrial Tool & Sales Conversion
 */

const siKnowledge = {
    // 1. HARDCODED Q&A (No "AI" mentioned)
    customQA: {
        "who created you": "I am a proprietary interface of **System Intelligence**, engineered by **Ahsan Khan**. I am a deterministic logic engine built for industrial optimization.",
        "who are you": "I am the **SI Neural Interface**, a specialized guide for exploring Ahsan Khan's 2100+ industrial optimization frameworks.",
        "is ahsan khan famous": "Ahsan Khan is a premier Systems Architect and OR Analyst with a recognized track record in South Korea and Pakistan for institutional efficiency.",
        "tell me about pro": "The **Enterprise Pro Plan ($499/Year)** is our elite license. It provides custom development, 24/7 support, and full suite access. Click 'Select Elite' for activation.",
        // آپ یہاں مزید سوال اور جواب اسی فارمیٹ میں ڈال سکتے ہیں
    },

    // 2. INDUSTRIAL SECTOR DATABASE
    sectors: {
        "education": "SEC-TURBO-07: Institutional timetabling & resource allocation.",
        "banking": "SEC-TURBO-04: Financial risk & portfolio optimization.",
        "manufacturing": "SEC-TURBO-12: Production line balancing models.",
        "agriculture": "SEC-TURBO-01: Resource & harvest yield optimization."
    },

    // 3. SYSTEM RESPONSES
    responses: {
        "greeting": "System Intelligence Neural Core Online. Identification verified. How can I assist with your industrial query?",
        "restricted": "<strong>ACCESS RESTRICTED.</strong> This query requires **Enterprise-Level Authorization**. Please upgrade to <strong>Enterprise Pro</strong> to unlock this module.",
        "contact": "For direct coordination with Ahsan Khan, use the WhatsApp link or Secure Gateway."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('si-send');
    const inputField = document.getElementById('si-input');

    const handleAction = () => {
        const query = inputField.value.trim().toLowerCase();
        if (query) {
            processRequest(query);
            inputField.value = "";
        }
    };

    if (sendBtn) sendBtn.onclick = handleAction;
    if (inputField) {
        inputField.onkeypress = (e) => { if (e.key === 'Enter') handleAction(); };
    }
});

function processRequest(userText) {
    appendMessage("User", userText, "rgba(255,255,255,0.05)");
    
    setTimeout(() => {
        let response = "";
        let found = false;
        const query = userText.toLowerCase();

        // STEP 1: Check Custom Q&A (Highest Priority)
        for (let question in siKnowledge.customQA) {
            if (query.includes(question)) {
                response = siKnowledge.customQA[question];
                found = true;
                break;
            }
        }

        // STEP 2: Sector Match
        if (!found) {
            for (let sector in siKnowledge.sectors) {
                if (query.includes(sector)) {
                    response = `<strong>Status:</strong> ${siKnowledge.sectors[sector]}<br><br>Detailed logic deployment is exclusive to **Enterprise Pro** users.`;
                    found = true;
                    break;
                }
            }
        }

        // STEP 3: Fallback (Marketing Pitch)
        if (!found) {
            if (query.includes("hello") || query.includes("hi")) {
                response = siKnowledge.responses.greeting;
            } else {
                response = siKnowledge.responses.restricted;
            }
        }

        appendMessage("System", response, "rgba(0,242,255,0.03)");
    }, 450);
}

function appendMessage(sender, text, bgColor) {
    const container = document.getElementById('si-messages');
    if(!container) return;

    const div = document.createElement('div');
    div.style.cssText = `padding:12px; border-radius:4px; margin-bottom:12px; background:${bgColor}; border-left:2px solid var(--cyan); font-size:13px; color:#e0e0e0; line-height:1.5;`;
    
    const senderColor = sender === "System" ? "var(--cyan)" : "var(--gold)";
    div.innerHTML = `<strong style="color:${senderColor}; text-transform:uppercase; font-size:10px; letter-spacing:1px; display:block; margin-bottom:4px;">[ ${sender} ]</strong>${text}`;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
