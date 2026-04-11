/**
 * SYSTEM INTELLIGENCE - NEURAL CORE LOGIC
 * Architect: Ahsan Khan (Systems Architect & OR Analyst)
 * Purpose: Conversion Engine for Enterprise Pro ($499)
 */

const siKnowledge = {
    // 1. HARDCODED PROPRIETARY Q&A
    customQA: {
        "who created you": "I am a proprietary neural interface of the **System Intelligence** framework, engineered exclusively by **Ahsan Khan**. I am not a third-party AI; I am a deterministic logic guide.",
        "is this gemini": "Negative. This is the **SI-Turbo Core Interface**. My logic is based on Ahsan Khan's proprietary Operations Research (OR) models and industrial architecture.",
        "is ahsan khan famous": "Ahsan Khan is a globally recognized Systems Architect and OR Analyst, particularly noted for his expertise in institutional efficiency and industrial optimization in South Korea and Pakistan.",
        "enterprise pro": "The **Enterprise Pro Plan ($499/Year)** is our elite tier. It offers 24/7 dedicated support, custom development integration, and complete suite access to 3 industrial sectors.",
        "payment": "Payments are processed via our **Secure Payment Gateway**. We support NayaPay, Western Union, Wise, and Payoneer. Instant activation follows verification."
    },

    // 2. INDUSTRIAL SECTOR DATABASE (Aligned with your HTML Cards)
    sectors: {
        "agriculture": "SEC-TURBO-01: Resource & harvest yield optimization.",
        "banking": "SEC-TURBO-04: Financial risk & portfolio optimization models.",
        "education": "SEC-TURBO-07: Institutional timetabling & resource allocation.",
        "manufacturing": "SEC-TURBO-12: Production line balancing & OR models.",
        "military": "SEC-TURBO-14: Logistics & strategic deployment analytics.",
        "telecom": "SEC-TURBO-19: Network capacity & coverage planning."
        // You can add more from your HTML grid here
    },

    // 3. SYSTEM RESPONSES
    responses: {
        "greeting": "System Intelligence Neural Core Online. Identification verified. Proceed with your industrial query.",
        "restricted": "<strong>ACCESS RESTRICTED.</strong> This advanced query requires **Enterprise-Level Authorization**. Please locate the <strong>Enterprise Pro</strong> card below and click <strong>'Select Elite'</strong> to unlock this capability.",
        "contact": "For direct coordination with Ahsan Khan, use the WhatsApp link or request a payment link via the Secure Gateway."
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

        // STEP 1: Check Custom Q&A
        for (let question in siKnowledge.customQA) {
            if (query.includes(question)) {
                response = siKnowledge.customQA[question];
                found = true;
                break;
            }
        }

        // STEP 2: Sector Recognition (HTML Grid Match)
        if (!found) {
            for (let sector in siKnowledge.sectors) {
                if (query.includes(sector)) {
                    response = `<strong>Sector Identified:</strong> ${siKnowledge.sectors[sector]}<br><br>Detailed optimization logic for this sector is exclusive to **Enterprise Pro** users.`;
                    found = true;
                    break;
                }
            }
        }

        // STEP 3: Fallback / Marketing Logic
        if (!found) {
            if (query.includes("hello") || query.includes("hi")) {
                response = siKnowledge.responses.greeting;
            } else if (query.includes("price") || query.includes("buy") || query.includes("cost")) {
                response = "Our tiers range from $49 to $499. For professional multi-sector needs, we recommend the **Enterprise Pro** plan.";
            } else {
                // This forces the "Buy" intent for any complex question
                response = siKnowledge.responses.restricted;
            }
        }

        appendMessage("System", response, "rgba(0,242,255,0.03)");
    }, 600);
}

function appendMessage(sender, text, bgColor) {
    const container = document.getElementById('si-messages');
    if(!container) return;

    const div = document.createElement('div');
    // Using your CSS variables for styling
    div.style.cssText = `padding:15px; border-radius:4px; margin-bottom:15px; background:${bgColor}; border-left:2px solid var(--cyan); font-size:13px; color:#e0e0e0; line-height:1.6;`;
    
    const senderColor = sender === "System" ? "var(--cyan)" : "var(--gold)";
    div.innerHTML = `<strong style="color:${senderColor}; text-transform:uppercase; font-size:10px; letter-spacing:2px; display:block; margin-bottom:5px;">[ ${sender} ]</strong>${text}`;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

