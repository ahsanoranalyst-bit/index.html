/**
 * SYSTEM INTELLIGENCE - NEURAL CORE LOGIC
 * Architect: Ahsan Khan (Systems Architect & OR Analyst)
 * Purpose: Proprietary Industrial Tool & Sales Conversion
 */

const siKnowledge = {
    // 1. HARDCODED Q&A (No "AI" mentioned)
    customQA: {

"who are you": "I am the SI Neural Interface, a specialized digital guide for exploring Ahsan Khan's 2100+ industrial optimization frameworks."

"is ahsan khan famous": "Ahsan Khan is a premier Systems Architect and OR Analyst, highly recognized for his optimization work in South Korea and Pakistan."

"is this an ai": "Negative. I am the SI Neural Core, a specialized digital interface for Ahsan Khan’s Operations Research (OR) and System Architecture database."

"tell me about pro": "The Enterprise Pro Plan ($499/Year) is our elite tier, offering 24/7 dedicated support, custom development, and full multi-sector suite access."

"how to buy": "Licensing is handled via the Secure Payment Gateway. We support NayaPay, Western Union, Wise, and Payoneer."

"what is system intelligence": "It is a comprehensive industrial framework designed for mathematical optimization and operational security across 21 global sectors."

"can i get a discount": "Our pricing is standardized for elite-level support. The Basic Core starts at $49, while the Enterprise Pro offers the highest ROI."

"where is the founder based": "Ahsan Khan is based in Lahore, Pakistan, managing global system deployments and industrial optimization projects."

"is my data secure": "Yes. The architecture uses self-contained session logic to ensure all client data remains isolated and secure."

"how many projects are available": "There are currently 2100+ industrial optimization projects and 100+ specialized education modules within the SI-Library."

"can you write code": "Advanced script development is reserved for Enterprise Pro license holders. Please upgrade to unlock custom coding."

"what sectors do you cover": "We cover 21 sectors including Agriculture, Banking, Education, Manufacturing, Military, and Telecommunications."

"how to contact support": "Priority support is available via the WhatsApp link or dedicated email for active Enterprise Pro subscribers."

"is there a trial": "You can explore system capabilities through the Demo Version link at the top of the dashboard."

"what is the institute optimizer": "It is a specialized suite of 100 tools designed for automating educational scheduling and resource management."

"do you support mobile": "The dashboard is fully responsive and optimized for both desktop and mobile enterprise environments."

"how to activate license": "Once payment is verified via the gateway, your unique Enterprise Node will be activated instantly."

"is this available globally": "Yes. We currently track and support active enterprise nodes for clients in over 15 countries."

"what is the si neural engine": "The Neural Engine is the core deterministic logic unit that drives our mathematical optimization models."

"is ahsan khan real": "Ahsan Khan is a verified professional software developer and Operations Research specialist who founded System Intelligence."

"how to become a partner": "Partnership inquiries are handled through the Enterprise Pro portal. Standard licenses do not include resale rights."

"is the code open source": "No. The System Intelligence framework is proprietary software. Unauthorized reproduction of logic is strictly prohibited."

"what is or analyst": "Operations Research (OR) Analysts use mathematical methods to help organizations solve problems and make better decisions."

"is this system fast": "The interface operates on high-speed neural core logic, delivering optimization results with minimal latency."

"do you use cloud storage": "The framework avoids external database dependencies like Firebase to ensure maximum data privacy."

"can i use this for homework": "The system provides academic mentorship support for science and math at various grade levels."

"is there an api": "API access for external integration is an exclusive feature of the Enterprise Pro Custom Plan."

"what is the latest version": "You are currently accessing the Turbo Core 2026 Edition with updated industrial sector logic."

"is ahsan khan in korea": "The founder has significant professional recognition and project history within the South Korean industrial sector."

"how to pay from Pakistan ": "Local clients can use NayaPay or EasyPaisa for instant verification and activation."

"how to pay internationally": "International clients are directed to use Western Union, Wise, or Payoneer through our gateway."

"what is deterministic logic?": "It is a system where no randomness is involved in the development of future states of the system."

"Can I cancel my plan?": "Licenses are valid for one year. Refund policies apply according to the terms of the specific license tier."

"who is this tool for": "This tool is for institutional leaders, industrial engineers, and managers seeking operational efficiency."

"can you optimize shipping": "Yes. SEC-TURBO-18 provides maritime logistics and container tracking optimization models."

"can you optimize banking": "Yes. SEC-TURBO-04 covers financial risk, credit heuristics, and portfolio optimization."

"can you optimize retail": "Yes. SEC-TURBO-17 handles multi-store inventory synchronization and retail chain efficiency."

"what is the science group package": "It is a specialized tutoring framework for Matric and O-Levels students, starting at 25k PKR."

"is there a reward for students": "Yes. The top 6 performers in our academic hub are eligible for cash prizes ranging from $20 to $150."

"what is sysintel vercel": "It is the secure cloud deployment environment hosting the System Intelligence web interface."

"how to fix access error": "Ensure your browser supports JavaScript and check if your Enterprise license has expired."

"can i upgrade from basic": "Yes. You can upgrade to Enterprise Pro at any time by paying the difference via the gateway."

"is the system offline": "The core logic is self-contained. The web interface requires an internet connection for license verification."

"what is the cyan theme": "It is our signature 'Cyber-Industrial' aesthetic, representing high-tech efficiency and neon-style metrics."

"do you provide certificates": "Custom certification for system mastery is available for Enterprise Pro institutional clients."

"how to add a new sector": "Sector expansion requires a custom development request under the Enterprise Pro plan."

"is the founder an engineer": "Ahsan Khan is a professional software developer and expert in Operations Research engineering."

"why choose system intelligence": "Because it offers deterministic, industrial-grade optimization that generic AI tools cannot replicate."

"what is the final goal": "To establish the 'Neural Core' as the global standard for industrial and institutional management."  
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
