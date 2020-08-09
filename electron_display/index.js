const {BrowserWindow, BrowserView, app} = require('electron');
const path = require('path');
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 1200,
        height: 800,
        movable:true,
        movable:true,
        center:true,
        kiosk:false,
        fullscreen:false,
        frame:false,
        transparent:true
    });
    window.setBounds({ x: 118, y: 760, width: 800, height: 300 })
    window.setAlwaysOnTop(true, 'screen');
    window.webContents.loadURL('http://192.168.1.239:5000/')
})
