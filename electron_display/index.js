const {BrowserWindow, BrowserView, app} = require('electron');
const path = require('path');
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 400,
        minHeight: 300,
        frame: false,
    });
    window.webContents.loadURL('https://electronjs.org')
})
