let currentLevel =1;
let currentScore = 600;
let targetScore = 600;
let animScore = 622;
let currentScenarioIdx = 0;

const scenarios = [
    {
        level: 1,
        title: "L1 : THE URGENT DELIVERY",
        text: "You recieve an SMS: 'Delhivery: Your package delivery worth Rs 1549 failed due to unpaid fee of Rs 49. Click here to pay and reschedule: http://Delhivery-tracking.com/pay'",
        options: [
            { text: "Pay the small fee quickly to get your package.", impact: -75, feedback: "FAILED: Classic Smishing. The link goes to credential harvester and steals your card info." },
            { text: "Ignore the text and check the official Delhivery app for delivery status.", impact: +40, feedback: "SUCCESS: You avoided a smishing attack and protected your personal information." },
        ]
    },
    {
        level: 1,
        title: "L1 : THE HELPFUL BANKER",
        text:"Your phone rings. The caller ID says 'SBI Fraud Dept'. A polite agent says someone tried to log into your account and asks for the 6-digit OTP just texted you to 'cancel the login'.",
        options: [
            { text: "Provide the OTP to help secure your account.", impact: -90, feedback: "FAILED: This is a vishing attack. The attacker uses the OTP to access your account and steal money." },
            { text: "Refuse to share the OTP and call SBI's official customer service number to verify.", impact: +50, feedback: "SUCCESS: You avoided a vishing attack and protected your bank account." },
        ]
    },
    {
        level: 1,
        title: "L1 : THE TOO-GOOD-TO-BE-TRUE OFFER",
        text:"You receive a WhatsApp message from an unknown number claiming to be from Amazon, offering you a Rs 5000 gift card for completing a quick survey. The message includes a link to the survey.",
        options: [
            { text: "Click the link and complete the survey to claim the gift card.", impact: -80, feedback: "FAILED: This is a phishing attack. The link leads to a fake Amazon site that steals your login credentials." },
            { text: "Ignore the message and report it as spam.", impact: +30, feedback: "SUCCESS: You avoided a phishing attack and protected your personal information." },
        ]
    },
    {
        level: 2,
        title: "L2 : THE CHARGING STATION",
        text: "Your phone is at 2% at the airport/station. You see a free charging station labeled 'Free Airport/Railway Charging',but it only has a USB port (non wall plug). You plug your charging cable directly into kiosk.",
        options: [
            { text: "Use the free charging station to quickly charge your phone. You desperately need the battery.", impact: -45, feedback: "FAILED: This is a juice jacking attack. The charging station is compromised and can steal data from your phone." },
            { text: "Use a USB data-blocker adapter, or plug your own AC adaptor into a wall outlet.", impact: +45, feedback: "SUCCESS: You avoided a juice jacking attack and protected your personal data." }
        ]
    },
    {
        level: 2,
        title: "L2 : THE DISCORD MODERATOR",
        text: "You are active on a gaming Discord server. A well-known moderator messages you privately, saying you won a giveaway, sending a file named 'Giveaway_Win.exe' and asking you to run it to claim your prize.",
        options: [
            { text: "Run the tool, They are trusted mods, so it must be safe. ", impact: -85, feedback: "FAILED: This is a malware attack. The file is malicious and infects your computer with RAT." },
            { text: "Politely decline and report the message to the server admins.", impact: +40, feedback: "SUCCESS: You avoided a malware attack and protected your computer." }
        ]
    },
    {
        level: 2,
        title: "L2 : THE PUBLIC WIFI",
        text: "You are connected to a public WiFi network at the coffee shop. You see a notification about a security update for your device.",
        options: [
            { text: "Click the link and install the update.", impact: -30, feedback: "FAILED: This is a phishing attack. The link leads to a fake website that steals your login credentials." },
            { text: "Ignore the notification and connect to your home network instead.", impact: +30, feedback: "SUCCESS: You avoided a phishing attack and protected your personal information." }
        ]
    },
    {
        level: 3,
        title: "L3 : THE FAKE TECH SUPPORT",
        text: "While browsing, your screen goes red with a loud alarm. A pop-up claims 'Windows Defender detected Zeus Virus. Call 1-8000-XXX-XXXX immediately to prevent data loss!'",
        options: [
            { text: "Call the number immediately, you don't want to lose files..", impact: -70, feedback: "FAILED: This is a tech support scam. The scammers will try to get remote access to your computer and steal your data." },
            { text: "Press CTRL+W to close tab or force quit the browser.", impact: +40, feedback: "SUCCESS: You recognized a browser-level scareware tactics and protected your computer." }
        ]
    },
    {
        level: 3,
        title: "L3 : BROWSER EXTENSION",
        text: "You find a highly-rated chrome extension that promises to enhance your AI experience. During installation, it requires permission to 'Read and change all your data on all websites'.",
        options: [
            { text: "Accept it. Most extensions ask for broad permissions, and it has good reviews.", impact: -60, feedback: "FAILED: This is a malicious extension. It abuses the granted permissions to steal your data and track your browsing." },
            { text: "Deny the permissions, A chat tool don't need to accesss banking URLs.", impact: +45, feedback: "SUCCESS: You enforced principle of Least Privilege." }
        ]
    },
    {
        level: 3,
        title: "L3 : THE SUSPICIOUS LINK",
        text: "You receive an email from your boss with the subject 'Urgent: Please review this document'. The email contains a link to a Google Doc.",
        options: [
            { text: "Click the link to review the document.", impact: -50, feedback: "FAILED: This is a spear phishing attack. The link leads to a fake Google login page that steals your credentials." },
            { text: "Verify the email address and contact your boss through another channel to confirm.", impact: +35,feedback: "SUCCESS: You avoided a spear phishing attack and protected your credentials." }
        ]
    },
    {
        level: 4,
        title: "L4 : THE DEEPFAKE VIDEO",
        text: "You receive a video message from a close friend on WhatsApp. The video shows them in distress, asking for urgent help and money transfer.",
        options: [
            { text: "Send money immediately to help your friend.", impact: -80, feedback: "FAILED: This is a deepfake scam. The video is fake and the attacker is impersonating your friend to steal money." },
            { text: "Call your friend directly to verify the situation.", impact: +50, feedback: "SUCCESS: You avoided a deepfake scam and protected your money." }
        ]
    },
    {
        level: 4,
        title: "L4 : THE MALICIOUS APP",
        text: "You find a new app that offers free premium features for a popular service. The app is not from the official app store and requires you to disable security settings to install.",
        options: [
            { text: "Install the app to get the free features.", impact: -90, feedback: "FAILED: This is a malicious app. It contains malware that can steal your data and compromise your device." },
            { text: "Avoid installing apps from untrusted sources and look for official alternatives.", impact: +60, feedback: "SUCCESS: You avoided a malicious app and protected your device." }
        ]
    },
    {
        level: 4,
        title: "L4 : THE SOCIAL ENGINEER",
        text: "You receive a LinkedIn message from someone claiming to be a recruiter from a company you admire. They ask for your resume and personal information to 'consider you for a job opportunity'.",
        options: [
            { text: "Share your resume and personal information to explore the opportunity.", impact: -70, feedback: "FAILED: This is a social engineering attack. The attacker is impersonating a recruiter to steal your personal information." },
            { text: "Verify the recruiter's identity and the legitimacy of the job opportunity before sharing any information.", impact: +40, feedback: "SUCCESS: You avoided a social engineering attack and protected your personal information." }
        ]   
    },
    {
        level: 5,
        title: "L5 : NPM TYPOSQUATTING",
        text: "You are setting up React project and need to install 'react-router'. You accidentally type 'react-roter' in the terminal and hit enter.",
        options: [
            { text: "Ignore the warning and proceed with the installation.", impact: -65, feedback: "FAILED: This is a typosquatting attack. The 'react-roter' package is malicious and can compromise your project." },
            { text: "Notice the typo and correct it to 'react-router' before installing.", impact: +50, feedback: "SUCCESS: You avoided a typosquatting attack and protected your project." }
        ]
    },
    {
        level: 5,
        title: "L5 : THE HARDCODED KEY",
        text: "You are pushing a quick test commit to a public github repo. You leave your AWS API keys in the app.config file assuming you will delete them later.",
        options: [
            { text: "Push the commit with the hardcoded keys, it is only for some time.", impact: -100, feedback: "FAILED: This is a common security mistake. The exposed keys can be found by attackers and used to access your AWS resources." },
            { text: "Remove the keys from the code and use environment variables or a secrets manager instead.", impact: +70, feedback: "SUCCESS: You avoided a common security mistake and protected your AWS resources." }
        ]
    },
    {
        level: 5,
        title: "L5 : THE INSECURE DEPLOYMENT",
        text: "You are deploying a new web application. To save time, you skip setting up HTTPS and deploy it with HTTP.",
        options: [
            { text: "Deploy the application with HTTP to save time.", impact: -80, feedback: "FAILED: This is an insecure deployment. Without HTTPS, data transmitted between users and your application can be intercepted by attackers." },
            { text: "Take the time to set up HTTPS before deploying the application.", impact: +60, feedback: "SUCCESS: You avoided an insecure deployment and protected your users' data." }
        ]
    },
    {
        level: 6,
        title: "L6 : 0AUTH SCOPE CREEP",
        text: "You are integrating a third-party analytics dashboard into your enterprise workspace. The 0Auth consent screen requests 'offline_access' and 'directory.readwrite.all'.",
        options: [
            { text: "Approve the scopes to ensure it has all the data it needs.", impact: -80, feedback: "FAILED: Excessive scopes grant the vendor persistent, modifying access to your entire active directory." },
            { text: "Reject the integration and request a vendor architecture review.", impact: +55, feedback: "You identified a massive third-party vendor risk."}
        ]
    }
];

const canvas = document.getElementById('gaugeCanvas');
const ctx = canvas.getContext('2d');

function drawGauge(score) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height - 30;
    const radius = 140;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = '#162030';
    ctx.stroke();

    let safeScore = Math.max(300, Math.min(score, 900));
    const percentage = (safeScore - 300) / 600;
    const targetAngle = Math.PI + (percentage * Math.PI);

    let trackColor = '#ff3333'
    if (safeScore > 550 && safeScore <=750) trackColor = '#ffcc00';
    if (safeScore > 750) trackColor = '#00ff66';

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, targetAngle, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = trackColor;
    ctx.stroke();

    ctx.save();
    ctx.translate(centerX, centerY,);
    ctx.rotate(targetAngle + Math.PI/2);
    ctx.beginPath();
    ctx.moveTo(-6, 0);
    ctx.lineTo(0, -radius + 15);
    ctx.lineTo(6, 0);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 12, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
}

function animateGauge() {
    if (Math.abs(animScore - targetScore) > 0.5) {
        animScore += (targetScore - animScore) * 0.1;
        document.getElementById('scoreDisplay').innerText = Math.round(animScore);
        updateStatusBadge(Math.round(animScore));
        drawGauge(animScore);
    }
    requestAnimationFrame(animateGauge);
}

function updateStatusBadge(score) {
    const badge = document.getElementById('risk-badge');
    if (score <= 550) {
        badge.innerText = "CRITICAL RISK";
        badge.style.color = '#ff3333';
    } else if (score > 550 && score <=750) {
        badge.innerText = "NEEDS UPGRADE";
        badge.style.color = '#ffcc00';
    } else {
        badge.innerText = "SECURE OPERATOR";
        badge.style.color = '#00ff66';
    }
}


function initEngine() {
    targetScore = 600;
    currentScore = 600;
    currentScenarioIdx = 0;
    currentLevel = 1;
    document.getElementById('log-ticker').innerText = "SYSTEM REBOOTED. READY.";
    animateGauge();
    loadScenario(currentScenarioIdx);
}

function loadScenario(idx) {
    if (idx >= scenarios.length) {
        showFinalReport();
        return;
    }

    const sc = scenarios[idx];

    if (sc.level > 3 && currentLevel <=3) {
        showCheckpointScreen(idx);
        return;
    }

    currentLevel = sc.level;

    document.getElementById('vector-title').innerText = sc.title;
    document.getElementById('scenario-text').innerText = sc.text;

    let html = "";
    sc.options.forEach((opt, oIdx) => {
        html += `<button class="matrix-btn" onclick="handleChoice(${idx}, ${oIdx})">${opt.text}</button>`;
    });
    document.getElementById('optionsGrid').innerHTML = html;
}

function handleChoice(sIdx, oIdx) {
    const option = scenarios[sIdx].options[oIdx];
    targetScore += option.impact;

    if (targetScore < 300) targetScore = 300;
    if (targetScore > 900) targetScore = 900;

    document.getElementById('log-ticker').innerText = option.feedback;

    currentScenarioIdx++;
    loadScenario(currentScenarioIdx);
}

function showCheckpointScreen(nextIdx) {
    currentLevel = 4;

    document.getElementById('vector-title').innerText = "🛡️ CHECKPOINT: CORE COMPLIANCE MET";
    document.getElementById('scenario-text').innerText = `You have complted standard user awareness metrics. Current Cyber-CIBIL Score evaluated at ${Math.round(targetScore)}. Do you wish to finalize your profile now, or advance into technical system administrator threat vectors?`;
    
    let html = `
    <button class="matrix-btn" style="border-color: #00ff66;" onclick="showFinalReport()">🏁 FINALIZE MY EVALUATION REPORT (EXIT)</button>
    <button class="matrix-btn" style="border-color: #ffcc00;" onclick="loadScenario(${nextIdx})">☣️ PROCEED TO ADVANCED TECH THREATS (LEVELS 4-5)</butto>
    `;
    document.getElementById('optionsGrid').innerHTML = html; 
}

function showFinalReport() {
    document.getElementById('vector-title').innerText = "📊 FINAL SECURITY AUDIT COMPLETE";

    let evaluation = "";
    if(targetScore >= 750) evaluation = "Outstanding threat modeling. You are clear for secure operations.";
    else if(targetScore >=550) evaluation = "Acceptable hygiene, but further training recommended.";
    else evaluation = "Critical vulnerabilities detected. Security clearance revoked.";

    document.getElementById('scenario-text').innerText = `Final verified rating: ${Math.round(targetScore)}/900. \n\n${evaluation}`;
    document.getElementById('operationsGrid').innerHTML = `<button class="matrix-btn" onclick="initEngine()">EXECUTE RE-AUDIT RUN</button>`;
}

window.onload = () => {
    drawGauge(600);
    animateGauge();
};

