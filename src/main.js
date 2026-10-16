const { app, BrowserWindow } = require('electron');
const path = require('path');

// Disable hardware acceleration to bypass graphics driver/security crashes
app.disableHardwareAcceleration();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    backgroundColor: '#2E2E2E',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // FIX: This looks for index.html inside the main project folder
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
