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

    {
        d: 2, cat: "Spyware", icon: "👁️",
        q: "A free flashlight app requests access to your camera, microphone, contacts, location, and SMS. What do you do?",
        ctx: "The app has 4.5 stars and millions of downloads on the app store.",
        opts: [
            "Install - high rating means it's safe",
            "Grant only camera permission for flash",
            "Don't instal - a flashlight doesn't need those permissions",
            "Install but revoke permissions later"
        ],
        ans: 2,
        exp: "Legitimate flashlight apps need zero extra permissions. Excessive permission requests indicate potential spyware. High rating can be faked. Always check permission relevance."
    },

    {
        d: 2, cat: "Phishing", icon: "🎣",
        q: "You receive a text: 'Your package is held at customs. Pay $5 processing fee to release: [link]'. You are expecting a package. What do you do?",
        ctx: "The tracking number mentioned doesn't match any you recognize, but you've ordered multiple items online recently.",
        opts: [
            "Click and pay $5 - it's a small amount",
            "Ignore it - customs doesn't work this way.",
            "Check the tracking on the official courier website",
            "Call the number back to verify"
        ],
        ans: 1,
        exp: "Customs never sends SMS payment links. This is smishing. The small fee is bait - they want your card details. Always check tracking through official courier apps/websites."
    },

    {
        d: 2, cat: "Weak Passwords", icon: "🔑",
        q: "You use the same password for 30+ accounts. You learn one service was breached. What's your priority?",
        ctx: "The breached service was food delivery app. You use the same Password for email, banking, and social media.",
        opts: [
            "Change only the breached service's password",
            "Change email and banking password first, then others",
            "Change all 30+ passwords to the same new strong password",
            "Wait to see if you're actually affected"
        ],
        ans: 1,
        exp: "Credential stuffing attacks try leaked passwords on other services. Prioritize high-value accounts immediately. use UNIQUE passwords for each service - get a password manager."
    },

    {
        d: 2, cat: "Eavesdropping", icon: "👂",
        q: "You are discussing a confidential business deal on a phone call in a crowded cafe. A stranger nearby seems to be listening intently. What do you do?",
        ctx: "The deal involves financial figures and hasn't been publically announced yet.",
        opts: [
            "Continue - they probably can't understand context",
            "Lower your voice and continue the call",
            "Tell the caller you'll call back from a private location",
            "Move to a different seat in the cafe"
        ],
        ans: 2,
        exp: "Physical eavesdropping is a real threat. Shoulder surfing and overhearing sensitive info is social engineering 101. End the call and move to private space for confidential discussions."
    },

    {
        d: 2, cat: "0Auth Abuse", icon: "🔗",
        q: "A website says 'Sign in with Google' and requests permission to 'Read, compose, and delete your emails'. It's a weather app. What do you do?",
        ctx: "The weather app looks well-designed and you want to save your location preferences.",
        opts: [
            "Allow - Google sign-in is always safe",
            "Allow but plan to revoke access later",
            "Deny and create a regular account with email/password instead",
            "Allow only read access to emails"
        ],
        ans: 2,
        exp: "OAuth abuse: apps request excessive permissions during Google/Facebook sign-in. A weather app has no reason to access your emails. Create a separate account or use 'Sign in with Google' only for profile-level access."
    },

    {
        d: 2, cat: "Confidential Info", icon: "📋",
        q: "You're working remotely at a library. You need to step away for 5 minutes. What to do with your laptop showing confidential spreadsheets?",
        ctx: "Your laptop has client financial data and project details on screen",
        opts: [
            "Leave it - you'll only be 5 minutes",
            "Ask the person next to you to watch it",
            "Lock the screen and take your laptop with you",
            "Close the lid and leave it on the table"
        ],
        ans: 2, 
        exp: "Even 'locking and leaving' is risky in public - devices can be stolen. Always take the device with you. Visual privacy screens help when working, but physical security of the device is paramount."
    },

    {
        d: 2, cat: "Brute Force", icon: "🔨",
        q: "You get notifications about 50 failed login attempts on your computer in the last hour. What do you do first?",
        ctx: "Your account is still accessible and nothing seems changed.",
        opts: [
            "Ignore - the attacker clearly failed",
            "Change your password immediately",
            "Enable 2FA if not already on",
            "Change password + 2FA, check for unauthorized sessions"
        ],
        ans: 3,
        exp: "Multiple failed logins = brute force attack in progress. Change password and enable 2FA together. Also check active session and revoke unknown ones."
    },

    //HARD
    {
        d: 3, cat: "Phishing", icon: "🎣",
        q: "You recieve an email from 'Security@yourcompany.com' (real company domain) asking you to re-authenticate via a link due to security upgrade. What's suspicious?",
        ctx: "The email has perfect formatting, company logo, and was sent durin work hours. The link goes to 'yourcompany-auth.com'.",
        opts: [
            "Nothing - it's from your own company domain",
            "The link domain differs from the company domain",
            "The timing during work hours is suspicious",
            "The company logo could be fake"
        ],
        ans: 1,
        exp: "Email sender addresses can be spoofed! The critical clue is the link domain: 'yourcompany-auth.com' is NOT 'yourcompany.com'. Always check actual destination."
    },

    {
        d: 3, cat: "API Exploit", icon: "⚙️",
        q: "Your app's developer says the API key is embedded in thr mobile app's secure code for convenience. What's the risk?",
        ctx: "It's a paid API service with billing tied to the key.",
        opts: [
            "No risk - mobile apps are compiled and can't be read",
            "Low risk - only sophisticated hackers can extract it",
            "Critical risk - APKs can be decompiled and the key extracted easily",
            "Moderate risk - but rate limiting protects the key"
        ],
        ans: 2,
        exp: "Mobile apps are trivially decompiled. API keys in client code can be extracted in minutes. Attackers can abuse the key, run up bills, or access unauthorized data. Keys must stay server-side."
    },

    {
        d: 3, cat: "Social Engineering", icon: "🎭",
        q: "A new IT person visits your desk with a company badge and asks you to install a 'required security update' from a USB they're carrying. What do you do?",
        ctx: "You haven't heard about any update. They say it's urgent and they need to install ot on everyone's machine today.",
        opts: [
            "Let's install it - they have a company badge",
            "Ask them to wait while you verify with the IT helpdesk",
            "Install it yourself from the USB after they leave",
            "Ask to see the email announcement about this update"
        ],
        ans: 1,
        exp: "Badges can be faked or stolen. Legitimate IT deployement don't use random USB drives and have prior communication. Verify through official IT channels."
    },

    {
        d: 3, cat: "MITM Attack", icon: "🕵️",
        q: "You're developing a web app. A security auditor says your site is vulnerable to SSL stripping. What does this mean?",
        ctx: "Your site uses HTTPS but the auditor found a specific vulnerability.",
        opts: [
            "The SSL certificate has expired",
            "Attackers can downgrade HTTPS to HTTP and intercept Data",
            "The encryption algo is weak",
            "The site allows too many SSL connections"
        ],
        ans: 1,
        exp: "SSL stripping is a MITM technique where attackers intercept the initial HTTP request and prevent the HTTPS upgrade, making the user browse in insecure HTTP while thinking they're secure. HSTS headers prevent this."
    },

    {
        d: 3, cat: "Ransomware", icon: "💀",
        q: "Your company was hit by ransomware. The IT team restored from backups, nut systems are infected within hours. What likely happened?",
        ctx: "The Backups were clean and verified. The ransomware varient is the same one.",
        opts: [
            "The backups were actually infected",
            "The attacker still has access through a backdoor or persistance mechanism",
            "The ransomware was hiding in RAM",
            "Other emplyees clicked same phishng email"
        ],
        ans: 1,
        exp: "Attackers often extablish persistence (backdoors, scheduled tasks, compromised accounts) before deploying ransomware. Full invident response is needed."
    },

    {
        d: 3, cat: "Fake QR", icon: "📱",
        q: "A QR code on legitimate poster redirects you to a URL shortened with bit.ly. Before proceeding, what should concern you?",
        ctx: "The poster advertises a government subsidy scheme.",
        opts: [
            "URL shortners are always dangerous",
            "You can't verify the final destination before clickng",
            "The government would never use QR codes",
            "bit.ly is a known malware service"
        ],
        ans: 1, 
        exp: "URL shorteners mask the true destination. Attackers overlay QR codes on legitimate posters. You should preview shortened URLs (bit.ly+) or look directly on government site."
    },

    {
        d: 3, cat: "Spyware", icon: "👁️",
        q: "Your phone's battery drains unusually fast, data usage spike at night, and you hear faint clicking during calls. What's most likely happening?",
        ctx: "You installed several apps last month from both official and third-party stores.",
        opts: [
            "Your phone is old and needs replacement",
            "A background app is consumng resources",
            "Your phone may have stalkware/spyware installed",
            "Your carrier is having network issues"
        ],
        ans: 2,
        exp: "Battery drain, unexplained data usage, and call interference are classic stalkware symptoms. Check installed apps, review permissions, use mobile security software, and consider a factory reset."
    },

    {
        d: 3, cat: "OAuth Abuse", icon: "🔗",
        q: "You review your google account's third party access and find an app called 'PDF Converter Pro' with full Gmail access you don't remember authorizing. What do you do?",
        ctx: "You've used various online tools over the past years.",
        opts: [
            "Leave it - you probably authorized it and forgot",
            "Revoke access immediately and change your Google password",
            "Revoke access only - no need to change password",
            "Contact Google support to investigate"
        ],
        ans: 1,
        exp: "Revoke access and change password. The app may have already read sensitive emails. Also review your email for forwarding rules attacker may have set. enable 2FA if not active."
    },

    {
        d: 3, cat: "Data Privacy", icon: "🔒",
        q: "A job recruiter on LinkedIn asks for your DOB, mother's maiden name, and first school to 'verify your identity for an interview'. Red flags?",
        ctx: "The recruiter has a professional-looking profile with 500+ connections and claims to work for Fortune 500 company.",
        opts: [
            "It's standard HR procedure for background checks",
            "These are commom security question answers - likely social engineering",
            "Only suspicious if they ask for your SSN",
            "LinkedIn profiles can be trusted if they have many connections"
        ],
        ans: 1,
        exp: "DOB, mother's maiden name, and first school are classic securityb question answer. An attacker collecting these can reset your accounts. Legitimate recruiters never ask for this info via LinkedIn."
    },

    {
        d: 3, cat: "Brute Force", icon: "🔨",
        q: "Your website uses a login form. What combination of defences best prevents brute force attacks?",
        ctx: "You're designing the security for a new web application.",
        opts: [
            "Strong password policy only",
            "CAPCHA + account lockout after 5 failed attempts",
            "Rate limiting + CAPCH + account lockout + 2FA",
            "IP-based blocking only"
        ],
        ans: 2,
        exp: "Defense in depth: Rate limiting slows attacks, CAPCHA blocks bot, account lockout stops, persistaent attempts, and 2FA makes stolen passwords useless."
    },

    //EXPERT
    
]