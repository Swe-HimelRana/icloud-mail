const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      nodeIntegrationInSubFrames: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('https://www.icloud.com/mail/');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.webContents.once('did-finish-load', () => {
    // Check notification permission when the window is ready
    checkNotificationPermission();
    setupExternalLinkHandling();
    sendNotification();
  });
}

function setupExternalLinkHandling() {
  // Open external links in the default browser
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (isExternalLink(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

function isExternalLink(url) {
  // Check if the URL is from iCloud.com or its subdomains
  const icloudDomains = ['icloud.com', 'apple.com', /* Add more if needed */];
  return !icloudDomains.some(domain => url.includes(domain));
}

function checkNotificationPermission() {
  // Implement notification permission logic here if needed
}

function sendNotification() {
  // Send an IPC message to show a notification
  mainWindow.webContents.send('show-notification', {
    title: 'Electron Notification',
    body: 'This is a sample notification from Electron!',
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
