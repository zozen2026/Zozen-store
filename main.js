const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Zozen Store",
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// استقبال أوامر تشغيل وتثبيت ملفات الـ .exe محلياً
ipcMain.on('run-exe', (event, filePath) => {
  exec(`"${filePath}"`, (err) => {
    if (err) {
      console.error('فشل تشغيل الملف:', err);
    }
  });
});