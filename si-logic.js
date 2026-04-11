/**
 * SYSTEM INTELLIGENCE - AI LOGIC CORE
 * Architect: Ahsan Khan (OR Analyst)
 * Purpose: Professional Industry Support & Project Guidance
 */

const siKnowledge = {
    // Sector-specific Database
    sectors: {
        "education": {
            title: "Educational Institution Optimization",
            details: "Managing 100+ specialized modules for schools and universities.",
            projects: ["Institute Timetabling Suite", "Student Behavioral Analytics", "Automated Resource Allocation", "Faculty Workload Optimizer"]
        },
        "banking": {
            title: "Banking & Financial Intelligence",
            details: "Advanced OR models for risk mitigation and asset management.",
            projects: ["Credit Risk Heuristics", "Portfolio Rebalancing Engine", "Fraud Pattern Recognition", "Branch Operational Analytics"]
        },
        "manufacturing": {
            title: "Manufacturing & Production Intelligence",
            details: "Streamlining assembly lines and supply chain synchronization.",
            projects: ["Production Line Balancer", "Inventory Buffer Optimizer", "Quality Control Dashboards", "Maintenance Predictor"]
        },
        "agriculture": {
            title: "Agri-Industrial Optimization",
            details: "Data-driven harvest and resource management models.",
            projects: ["Crop Yield Maximizer", "Soil Health Analytics", "Supply Chain Logistix", "Irrigation Efficiency Engine"]
        }
        // Add other 17 sectors here using the same format
    },

    // Standard Professional Responses
    standardAnswers: {
        "about_ai": "I am the **System Intelligence Guide**, a dedicated AI framework designed to facilitate clients in exploring Ahsan Khan's 2100+ industrial optimization projects.",
        "about_founder": "**Ahsan Khan** is a Systems Architect and Operations Research (OR) Analyst based in Pakistan. He specializes in building deterministic logic models for global institutional efficiency.",
        "contact": "For deployment inquiries or custom development, please use the **WhatsApp** link or the **Secure Payment Gateway** section to initiate activation.",
        "not_found": "I apologize, I couldn't find a direct match for that query. Please specify an industry (e.g., Telecom, Military, Retail) or ask about our founder."
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

    sendBtn.onclick = handleAction;
    inputField.onkeypress = (e) => { if (e.key === 'Enter') handleAction(); };
});

function processRequest(userText) {
    appendMessage("User", userText, "rgba(255,255,255,0.1)");
    
    setTimeout(() => {
        let response = "";
        let isSectorMatch = false;

        // 1. Check for Industry/Sector matches
        for (let key in siKnowledge.sectors) {
            if (userText.includes(key)) {
                const data = siKnowledge.sectors[key];
                response = `<strong>${data.title}</strong><br>${data.details}<br><br><strong>Top Modules:</strong><ul>` + 
                           data.projects.map(p => `<li>${p}</li>`).join('') + 
                           `</ul>Would you like to proceed with a Pro activation?`;
                isSectorMatch = true;
                break;
            }
        }

        // 2. Check for General Queries if no sector matched
        if (!isSectorMatch) {
            if (userText.includes("who are you") || userText.includes("your name") || userText.includes("identify")) {
                response = siKnowledge.standardAnswers.about_ai;
            } else if (userText.includes("ahsan") || userText.includes("founder") || userText.includes("who is")) {
                response = siKnowledge.standardAnswers.about_founder;
            } else if (userText.includes("contact") || userText.includes("buy") || userText.includes("price") || userText.includes("pay")) {
                response = siKnowledge.standardAnswers.contact;
            } else if (userText.includes("hello") || userText.includes("hi") || userText.includes("start")) {
                response = "Welcome to **System Intelligence**. I am ready to assist. You can ask about our 21 industrial sectors or inquire about system integration.";
            } else {
                response = siKnowledge.standardAnswers.not_found;
            }
        }

        appendMessage("AI", response, "rgba(0,242,255,0.05)");
    }, 400);
}

function appendMessage(sender, text, bgColor) {
    const container = document.getElementById('si-messages');
    const div = document.createElement('div');
    div.style.cssText = `padding:12px; border-radius:8px; margin-bottom:12px; background:${bgColor}; border:1px solid rgba(0,242,255,0.1); font-size:14px;`;
    div.innerHTML = `<strong style="color:#00f2ff; text-transform:uppercase; font-size:10px;">${sender}</strong><br>${text}`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
