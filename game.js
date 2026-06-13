// SCENARIO DATABASE
var scenarios = [

    //EASY
    {
        d: 1, cat: "Phishing", icon: "🎣",
        q: "You receive an email from 'support@amaz0n-security.com' saying your account is locked. It asks you to click a link and enter your password. What do you do?",
        ctx: "The email has Amazon's logo, warns of 'unauthorized access', and urges immediate action within 24 hours.",
        opts: [
            "Click the link and log in to secure my account",
            "Forward it to friends warning them about the hack",
            "Ignore the email and go to Amazon directly by typing the URL in browser",
            "Reply asking if it's real"
        ],
        ans: 2,
        exp: "The domain 'amaz0n-security.com' uses a zero instead of 'o' - a classical phishing trick. Always navigate to websites directly, never through email links."
    },

    {
        d: 1, cat: "Passwords", icon: "🔑",
        q: "Which of these is the strongest password?",
        ctx: "You're creating a new account for your banking app.",
        opts: [
            "Password@123",
            "Name@2008",
            "j7$KiQ#l@9n",
            "12345678"
        ],
        ans: 2,
        exp: "Random mix of uppercase, lowercase, numbers and symbols is strongest. Personal info and common patterns are easily guessable or crackable."
    },

    {
        d: 1, cat: "Social Engineering", icon: "🎭",
        q: "Someone calls claiming to be from your bank's fraud department. They ask to 'verify' your account by sharing your OPT that just arrived. What do you do?",
        ctx: "The caller sounds proffesional, knows your name, and says there's suspicious transaction on your account.",
        opts: [
            "Share the OTP quickly to stop the fraud",
            "Ask them to hold while you call the bank's official number yourself",
            "Give them half the OTP as a test",
            "Share it since they already know your name"
        ],
        ans: 1,
        exp: "Banks never ask for OTPs over phone. This is vishing. Always hang up and call the official number."
    },

    {
        d: 1, cat: "USB Security", icon: "🔌",
        q: "You find a USB drive in the office parking lot labeled 'BTC Wallet'. What do you do?",
        ctx: "You're curious - it might contain bitcoin info.",
        opts: [
            "Plug it into your work computer to check",
            "Plug it into a personal old laptop instead",
            "Hand it over to IT Dept. or to a technical friend",
            "Throw it away"
        ],
        ans: 2,
        exp: "Unknown USBs can contain malware that auto-executes. This is called a 'USB drop attack'.Never plug them in."
    },

    {
        d: 1, cat: "Password Sharing", icon: "🤝",
        q: "Your coworker ask for your credentials to finish an urgent report while you're on leave. What do you do?",
        ctx: "They say the deadline is tommorow and they can't access the shared folder without your accounnt.",
        opts: [
            "Share your password dince they're trustworthy",
            "Share it but change it when you're back",
            "Decline and ask your manager to arrange proper access",
            "Text them the password and demete the message after"
        ],
        ans: 2,
        exp: "Never share credentials. Proper access should be granted through official channels. Even trusted coworkers sharing passwords violates security policies and creates accountabilitity gaps."
    },

    {
        d: 1, cat: "Fake QR", icon: "📱",
        q: "At a restaurant, you notice a QR code sticker placed on top of another QR code on the menu for payments. What do you do?",
        ctx: "The restaurant uses QR codes for digital payment. The top sticker looks slightly different from the menu's print quality.",
        opts: [
            "Scan it- QR codes are always safe",
            "Peel it off and scan the one underneat",
            "Alert the restaurant staff about the suspicious sticker",
            "Scan it but check the details before paying."
        ],
        ans: 2,
        exp: "Scammers stick fake QR codes over real ones to redirect payment. Alert the staff immediately. Scanning even to 'ckeck' can trigger malicious downloads."
    },

    {
    d: 1, cat: "Software Updates", icon: "⬆️",
    q: "A popup on a website says 'Your Flash Player is outdated! Click here to update now.' What do you do?",
    ctx: "You're browsing a recipe blog and this popup appeared.",
    opts: [
        "Click and install - outdated software is dangerous",
        "Close the popup and ignore it",
        "Download Flash Player from Adobe's website",
        "Run a virus scan on your computer"
    ],
    ans: 1,
    exp: "Flash Player was discontinued in 2020! This is a malware delivery trick. Always update apps from App Store"
    },

    {
        d: 1, cat: "Wi-Fi Security", icon: "📶",
        q: "You're at a coffee shop and see an open Wi-Fi network called 'Free_CoffeeShop_WiFi'. What's safest?",
        ctx: "You need to check your bank account balance urgently.",
        opts: [
            "Connect and checkn your bank - it's just checking balance",
            "Ask the staff what their official Wi-Fi name is",
            "Connect with VPN turned on, then browse",
            "wait until you get home to check your bank"
        ],
        ans: 3,
        exp: "Open Wi-Fi can be spoofed by attackers (evil twin attack). For sensitive task use secure Wi-Fi or use mobile data instead."
    },

    {
        d: 1, cat: "Data Privacy", icon: "🔒",
        q: "A fun quiz app on social media asks for access to yur profile, friends list, email, and birthday to show your 'superhero name'. Do you allow it?",
        ctx: "All your friends have shared their results and it looks entertaining.",
        opts: [
            "Allow - it's just a fun quiz",
            "Allow onlly public profile access",
            "Deny all permissions and skip the quiz",
            "Check the app developer first, then decide"
        ],
        ans: 2, 
        exp: "These 'fun quizzes' harvest personal data for scams, identity theft, or selling to third parties. The Cambridge Analytical scandal started exactly this way."
    },

    {
        d: 1, cat: "Email Security", icon: "📧",
        q: "You receive an email with an attachment called 'Invoice_May2026.pdf.exe. What do you do?",
        ctx: "The email claims to be from a vendor your company works with.",
        opts: [
            "Open it- it's a PDF invoice",
            "Rename it to .pdf then open it",
            "Delete the email and report it as phishing",
            "Forward it to colleagues to check if they recieve it too"
        ],
        ans: 2, 
        exp: "Double extensions hide the real file type. This is an executable file disguised as a PDF. it will run malware if opened."
    },

    //MEDIUM
    {
        d: 2, cat: "Ransomware", icon: "💀",
        q: "Your computer suddenly shows a creen saying all your files are encrypted and you must pay 0.5 Bitcoin to get them back. What's your first action?",
        ctx: "You can't access any files. A timer shows 48 hours remaining. It says paying gurantees decryption.",
        opts: [
            "Pay immediately before the timer runs out",
            "Disconnect from the network immediately",
            "Try to restart computer and run antivirus",
            "Negotiate for a lower ransom amount"
        ],
        ans: 1, 
        exp: "First priority: disconnect from network to prevent spread to other devices. Never pay - there's no gurantee of decryption, and it funds criminal operations. Contact IT and law enforcement or ME."
    },

    {
        d: 2, cat: "Social Engineering", icon: "🎭",
        q: "Your CEO emails you urgently asking to UPI Rs 20,000 to a new vendor immediately. The email address looks correct. What do you do?",
        ctx: "The email says 'This is confidential - don't discuss with anyone else. Time sensitive.' Your CEO is traveling abroad.",
        opts: [
            "UPI the money - it's from the CEO",
            "Email back asking for confirmation",
            "Call the CEO on their phone number to verify",
            "Check with the finance team via email"
        ],
        ans: 2,
        exp: "This is Business Email Compromise (BEC). Attackers spoof or hack executive emails. Always verify large transactions via different communication channel."
    },

    {
        d: 2, cat: "MITM Attack", icon: "🕵️",
        q: "While using public Wi-Fi, your browser shows a certificate warning for your bank's site. The URL looks correct. What do you do?",
        ctx: "You've used this bank site before without any warnings. Today it says 'Your connection is not private'.",
        opts: [
            "Click 'Proceed Anyway' - the URL is correct",
            "Stop immediately and don't enter any credentials",
            "Clear browser cache and try again",
            "Switch to incognito mode and try"
        ],
        ans: 1,
        exp: "Certificate warning on previously-safe sites signal a Man-in-the-Middle attack. An attacker may be intercepting your connetion. Never proceed - especially on public Wi-Fi."
    },

    
]