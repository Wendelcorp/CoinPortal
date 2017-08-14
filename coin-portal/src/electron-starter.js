const { app, Tray, Menu, BrowserWindow } = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'coin.png');
let appIcon = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false})
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Item1",
      type: "radio"
    },
    {
      label: 'Item2',
      submenu: [
        { label: 'submenu1'},
        { label: 'submenu2'}
      ]
    }
  ]);
  appIcon.setToolTip('electron tray app');
  appIcon.setContextMenu(contextMenu);
});
