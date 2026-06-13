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
    {
        d: 4, cat: "Phishing", icon: "🎣",
        q: "An attacker uses homograph techniques: the URL looks like'apple.com' but uses Cyrillic character instead of Latin 'a'. How is this detected?",
        ctx: "Your browser shows a valid SSL certificate for this domain. The page is pixel-perfect copy of apple's site.",
        opts: [
            "Check the SSL certifier issuer",
            "Use Punycode display - the browser should now show 'xn--pple-43d.com'",
            "Compare the page source code",
            "Check WHOIS registration date"
        ],
        ans: 1,
        exp: "IDN homograph attavks use visually identical Unicode characters. Modern browsers display Punycode (xn--) for mixed-script somains. Always check if URLs display normally and enable Punycode display in browser settings."
    },

    {
        d: 4, cat: "MITM Attack", icon: "🕵️",
        q: "Your security team detects ARP spoofing on the corporate network. What is the attacker trying to achieve?",
        ctx: "Network monitoring shows duplicate MAC addresses and unusual ARP replies.",
        opts: [
            "Crashing the network switches",
            "Redirecting network traffic through their machine to intercept data",
            "Stealing Wi-Fi bandwidth",
            "Bypassing the firewall"
        ],
        ans: 1,
        exp: "ARP spoofing poisons the ARP cache, making devices send traffic through the attacker's machine - enabling a MITM attackon the local network. DAI on switches prevents this."
    },

    {
        d: 4, cat: "API Exploit", icon: "⚙️",
        q: "An API endpoint returns different error messages: 'User not found' vs 'Incorrect password'. Why is this a vulnerability?",
        ctx: "You're doing a security audit of a REST API.",
        opts: [
            "Error messages use server resources",
            "It enables user enumeration - attackers can confirm which username exist",
            "Different messages confuse legitimate users",
            "It exposes the database structure"
        ],
        ans: 1,
        exp: "Differentiated error messages let attackers enumerate valid usernames. Once they know a username exists, they can brute force on the password. Always use generic messages like 'Invalid credentials'."
    },

    {
        d: 4, cat: "Ransomware", icon: "💀",
        q: "Your organization considers paying a ransomware demand of $2M. Beyond ethics, what legal risks exist?",
        ctx: "The ransomware group is on a government sanctions list (OFCA-designated entity).",
        opts: [
            "No legal risk if you report the incident",
            "Paying sanctioned entities violated law - your company can face federal penalties",
            "Insurance will cover legal cost",
            "Legal risk only apply to the ransomware gang, not victims"
        ],
        ans: 1, 
        exp: "Paying OFAC-sanctioned ransomware groups violates law, exposing your organisation to several federal penalities regardless of the circumstances. Always consult legal counsel and law enforcement first."
    },

    {
        d: 4, cat: "Social Engineering", icon: "🎭",
        q: "An attacker uses 'pretexting' to call your company's help desk, impersonating an executive needing an urgent password reset. Which defense is most effective?",
        ctx: "The attacker has the executive's name, department, employee ID.",
        opts: [
            "Requiring the caller to answer security questions",
            "Callback verification to the executive's registered phone number",
            "Asking for the employee ID number",
            "Voice recognition software"
        ],
        ans: 1,
        exp: "Security questions can be researched. Employee IDs may be leaked. Callback verification to a pre-registered ensures you're talking to the actual person - the attacker can't intercept calls to the real exec's phone."
    },

    {
        d: 4, cat: "Eavesdropping", icon: "👂",
        q: "Your company suspects an IMSI catcher (fake cell tower) near the office intercepting calls. What's the most effective organizational countermeasure?",
        ctx: "Executives discuss sensitive M&A details over phone calls.",
        opts: [
            "Use only landlines for sensitive calls",
            "Deploy end-to-end encrypted communication apps for all sensitive discussions",
            "Switch all phones to 5G only mode",
            "Use RF shielding in the building"
        ],
        ans: 1, 
        exp: "IMSI catchers intercept cellular signals. End-to-end encrypted apps make intercepted data unreadable. Landlines can also be tapped. E2E encryption is the most practical and effective defense."
    },

    {
        d: 4, cat: "OAuth Abuse", icon: "🔗",
        q: "An attacker exploits the OAuth 2.0 'authorization code interception' attack. What's the recommended mitigation?",
        ctx: "Your mobile app uses OAuth 2.0 for authentication with an unauthorized code flow",
        opts: [
            "Switch to implicit flow",
            "Implement PKCE (Proof Key for Code Exvhange)",
            "Use longer authorization codes",
            "Add client-side encryption"
        ],
        ans: 1, 
        exp: "PKCE prevents authorization code interception by binding the code to the original client. The implicit flow is actually LESS secure. PKCE is now recommended for all OAuth clients."
    },

    {
        d: 4, cat: "Spyware", icon: "👁️",
        q: "A zero-click exploit targets your phone - nointeraction needed to install spyware. Which platform feature provides the best best defense?",
        ctx: "Think of sophisticated state-level attacks like Pegasus.",
        opts: [
            "Keeping the phone updated with latest patches",
            "Enabling Apple's Lockdown Mode / similiar hardened profile",
            "Using a VPN at all times",
            "Installing third-party antivirus"
        ],
        ans: 1,
        exp: "Lockdown Mode (Apple) drastically reduce the attack surface by disabling complex features attackers exploit (message previews, JIT compilation, etc..). Updates are important but zero-days exist before patches."
    },

    {
        d: 4, cat: "Credential Info", icon: "📋",
        q: "An employee accidently emails a confidential client list to the wrong external address. Under GDPR, what must happen within 72 hours?",
        ctx: "The recipient is an unknown external email address. The file contains name, emails, and phone numbers of 10k EU customers.",
        opts: [
            "Nothing - it was accidental, not a breach",
            "Notify the supervisory authority of the data breach",
            "Notify only affected customers",
            "Conduct an internal investigation first, then decide"
        ],
        and: 1,
        exp: "Under GDPR Article 33, personal data breaches must be reported to the supervisory authority within 72 hours, regardless of intent. If high risk, affected indivduals must also be notified. 'Accidental' doesn't exempt you."
    },

    {
        d: 4, cat: "Brute Force", icon: "🔨",
        q: "An attacker uses a 'credential stuffing' attack with 10 million leaked username/password pairs from another breach. Which defence is LEAST effective?",
        ctx: "Your service has standard security measures in place",
        opts: [
            "Passowrd complexity requirements",
            "Multi-factor authentication (MFA)",
            "Checking password against known breach databases",
            "Rate limiting login attempts"
        ],
        ans: 0, 
        exp: "Password complexity doesn't help against credential stuffing - the attacker alreadyv has the passwords. MFA blocks them even with Correct credentials. Breach database checks flag reused passwords."
    }
];


//GAME STATE
var cur = 0;
var score = 500;
var correct = 0;
var wrong = 0;
var streak = 0;
var bestStreak = 0;
var answered = false;
var catStats = {};
var TOT = scenarios.length;

var DIFF_NAMES = ["", "Easy", "Medium", "Hard", "Expert"];
var DIFF_BADGE = ["", "badge-easy", "badge-med", "badge-hard", "badge-expert"];
var DIFF_PTS = [0, 15, 25, 35, 50];


//HELPERS
function $(id) {
    return document.getElementById(id);
}


//SCREEN MANAGEMENT
function showScreen(id) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    $(id).classList.add('active');
    window.scrollTo(0, 0);
}

function startQuiz() {
    cur = 0;
    score = 500;
    correct = 0;
    wrong = 0;
    streak = 0;
    bestStreak = 0;
    answered = false;
    catStats = {};
    showScreen('s-quiz');
    renderQ();
}

function confirmQuit() {
    if (confirm('Quit assessment? Progress will be lost.')) {
        showScreen('s-landing');
    }
}


//RENDER QUESTION
function renderQ() {
    answered = false;
    var s= scenarios[curl];

    $('qCur').textContent = cur + 1;
    $('qTot').textContent = TOT;
    $('progBar').style.width = ((cur) / TOT * 100) + '%';

    var b = $('qDiffBadge');
    b.textContent = DIFF_NAMES[s.d];
    b.className = 'badge ' + DIFF_BADGE[s.d];

    $('liveScore').textContent = score;
    $('catIcon').textContent = s.icon;
    $('catName').textContent = s.cat;
    $('qTitle').textContent = s.q;
    $('qContext').textContent = s.ctx;

    var oa = $('optionsArea');
    oa.innerHTML = '';

    for (var i = 0; i < s.opts.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'pot-btn';
        btn.textContent = String.fromCharCode(65 + i) + '. ' + s.opts[i];
        btn.setAttribute('data-idx', i);
        btn.onclick = function () {
            var idx = parseInt(this.getAttribute('data-idx'));
            selectOpt(idx, this);
        };
        oa.appendChild(btn);
    }

    $('explainArea').classList.add('hidden');
    $('explainArea').innerHTML = '';
    $('nextBtn').classList.add('hidden');

    $('scenarioArea').style.animation = 'none';
    setTimeout(function () {
        $('scenarioArea').style.animation = 'fadeUp .4s ease';
    }, 10);
}


//ANSWER LOGIC
function selectOpt(i, btn) {
    if (answered) return;
    answered = true;

    var s = scenarios[cur];
    var isCorrect = (i === s.ans);
    var pts = DIFF_PTS[s.d];

    var allBtns = document.querySelectorAll('.opt-btn');
    for (var j = 0; j < allBtns.length; j++) {
        allBtns[j].disabled = true;
        if (j === s.ans) allBtns[j].classList.add('correct');
        if (j === i && !isCorrect) allBtns[j].classList.add('wrong');
    }

    //SCORE CALCULATION
    if (isCorrect) {
        score = Math.min(900, score + pts);
        correct++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
    } else {
        score = Math.max(300, score - Math.round(pts * 0.8));
        wrong++;
        streak = 0;
    }

    //CATEGORY STATS
    if (!catStats[s.cat]) {
        catStats[s.cat] = { t: 0, c: 0, icon: s.icon };
    }
    catStats[s.cat].t++;
    if (isCorrect) catStats[s.cat].c++;

    //STREAK BADGE
    var sb = $('streakBadge');
    if (streak >= 2) {
        sb.classList.remove('hidden');
        $('streakNum').textContent = streak;
    } else {
        sb.classList.add('hidden');
    }

    //LIVE SCORE
    $('liveScore').textContent = score;
    $('liveScore').style.color = isCorrect ? 'var(--safe)' : 'var(--danger)';
    setTimeout(function () {
        $('liveScore').style.color = 'var(--neon)';
    }, 800);

    //EXPLAINATION
    var ea = $('explainArea');
    ea.classList.remove('hidden');
    var status = isCorrect ? '✅ Correct!' : '❌ Incorrect.';
    ea.innerHTML = '<div class="explain-box"><strong>' + status + '</strong> ' + s.exp + '</div>';

    $('nextBtn').classList.remove('hidden');
    $('nextBtn').textContent = cur < TOT - 1 ? 'Next Question →' : 'View My CyberScore 🏆';
}

function nextQuestion() {
    cur++;
    if (cur >= TOT) {
        showResults();
        return;
    }
    renderQ();
}


//RESULTS
function showResults() {
    showScreen('s-results');

    
    var pct = (score - 300) / 600;
    var offset = 251 - (pct * 251);
    var gf = $('gaugeFill');
    var col = score >= 750 ? 'var(--safe)' : score >= 550 ? 'var(--warn)' : 'var(--danger)';

    setTimeout(function () {
        gf.style.strokeDashoffset = offset;
        gf.style.stroke = col;
    }, 300);


    var displayed = 300;
    var target = score;
    var step = Math.max(1, Math.floor((target - 300) / 60));
    var si = setInterval(function() {
        displayed = Math.min(displayed + step, target);
        $('finalScore').textContent = displayed;
        $('finalScore').style.color = col;
        if (displayed >= target) clearInterval(si);
    }, 30);

    //VERDICT
    var v;
    if (score >= 800) {
        v = { icon: '🛡️', t: 'Cyber Guardian', l: 'Excellent', d: 'Outstanding awareness! You can identify and defend against most cyber threats. Keep staying updated - new attack vectors emerge daily.', c: 'var(--safe)' };
    } else if (score >= 700) {
        v = { icon: '✅', t: 'Well Protected', l: 'Good', d: 'Strong security sense with minor gaps. Review the categories where you missed questions to achieve mastery.', c: '#4ade80' };
    } else if (score >= 600) {
        v = { icon: '⚡', t: 'Needs Improvement', l: 'Fair', d: 'You have basic awareness but significant gaps exist. You are vulnerable to common attacks. Focused learning recommended.', c: 'var(--warn)' };
    } else if (score >= 450) {
        v = { icon: '⚠️', t: 'At Risk', l: 'Poor', d: 'Significant vulnerabilities detected. You are likely to fall for common scams and attacks. Immediate cybersecurity education needed.', c: '#fb923c' };
    } else {
        v = { icon: '🚨', t: 'Critical Risk', l: 'Very Poor', d: 'Extremely vulnerable to cyber attacks. Your digital life is at serious risk. Start with basic cybersecurity hygiene immediately.', c: 'var(--danger)' };
    }

    $('verdictIcon').textContent = v.icon;
    $('verdictTitle').textContent = v.t;
    $('verdictTitle').style.col = v.c;
    $('verdictDesc').textContent = v.d;
    $('finalLabel').textContent = v.l;
    $('finalLabel').style.color = v.c;

    //STATS
    $('statCorrect').textContent = correct;
    $('statWrong').textContent = wrong;
    $('statStreak').textContent = bestStreak;

    //CATEGORY BREAKDOWN
    var cb = $('catBreakdown');
    var cbH = '<h3 class="font-bold text-sm text-slate-300 mb-3 uppercase tracking-wider">📊 Category Breakdown</h3>';

    for (var c in catStats) {
        var cs = catStats[c];
        var p = Math.round(cs.c / cs.t * 100);
        var barCol = p >= 75 ? 'var(--safe)' : p >= 50 ? 'var(--warn)' : 'var(--danger)';
        cbH += '<div class="cat-row">';
        cbH += '<span class="text-lg">' + cs.icon + '</spam>';
        cbH += '<span class="name">' + c + '</span>';
        cbH += '<span class="count">' + cs.c + '/' + cs.t + '</span>';
        cbH += '<div class="prog-small"><div class="prog-track"><div class="prog-fill" style="width:' + p + '%;background:' + barCol + '"></div></div></div>';
        cbH += '<span class="pct" style="color:' + barCol + '">' + p + '%</span>';
        cbH += '</div>';
    }
    cb.innerHTML = cbH;

    //WEAK AREAS
    var wa = $('weakAreas');
    var weakList = [];
    for (var k in catStats) {
        var cv = catStats[k];
        if (cv.c / cv.t < 0.6) {
            weakList.push({ n: k, i: cv.icon, p: Math.round(cv.c / cv.t * 100) });
        }
    }

    if (weakList.length > 0) {
        var wH = '<h3 class="font-bold text-sm text-slate-300 mb-3 uppercase tracking-wider">🎯 Focus Areas</h3>';
        wH += '<div class="scenario-card" style="corder-color:rgba(255,56,96,.3)">';
        for (var w = 0; w < weakList.length; w++) {
            wH += '<div class="cat-row"><span>' + weakList[w].i + '</span><span class="name">' + weakList[w].n + '</span><span class="badge badge-hard">' + weakList[w].p + '%</span></div>';
        }
        wH += '<p class="tesxt-xs text-slate-500 mt-2">These are the areas where you need the most improvement.</p></div>';
        wa.innerHTML = wH;
    } else {
        wa.innerHTML = '<div class="scenario-card" style="border-color:rgba(0,230,118,.3)"><p class="text-sm" style="color:var(--safe)">🎉 No critical weak areas! Great jobacross all categories. </p></div>';
    }
}


//PARTICLES
(function initParticles() {
    var c = document.getElementById('particles');
    for (var i = 0; i < 20; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        var s = Math.random() * 4 + 1;
        var anim = 'float' + (i % 3);
        var dur = (Math.random() * 20 + 15) + 's';
        p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;opacity:' + (Math.random() * 0.12 + 0.03) + ';animation:' + anim + ' ' + dur + ' infinite linear;';
        c.appendChild(p);
    }
})();