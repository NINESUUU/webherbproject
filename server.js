const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// เปิดให้ใช้ไฟล์ในโฟลเดอร์ public
app.use(express.static('public'));

// กำหนดให้ homepage.html เป็นหน้าแรก
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

// กำหนดให้ labal.html
app.get('/labal.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'labal.html'));
});

// กำหนดให้ scanherb.html
app.get('/scanherb.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scanherb.html'));
});
// กำหนดให้ matching.html
app.get('/matching.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'matching.html'));
});

//กำหนดให้ history.html
app.get('/history.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'history.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
