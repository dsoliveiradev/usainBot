const { app, BrowserWindow, globalShortcut } = require("electron");

let botWindow;

app.whenReady().then(() => {
  const createBotWindow = () => {
    botWindow = new BrowserWindow({
      width: 650,
      height: 500,
      alwaysOnTop: true,
      frame: false,
      movable: true,
      transparent: true,
      backgroundColor: "#00000000",
      webPreferences: {
        preload: __dirname + "/preload.js",
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    botWindow.loadFile("index.html");

    botWindow.setSkipTaskbar(true);

    botWindow.on("close", (event) => {
      event.preventDefault();
      botWindow.hide();
    });
  };

  createBotWindow();
  
  globalShortcut.register("Alt+B", () => {
    if (botWindow && !botWindow.isDestroyed()) {
      if (botWindow.isVisible()) {
        botWindow.hide();
      } else {
        if (botWindow.isMinimized()) {
          botWindow.restore();
        }
        botWindow.show();
      }
    } else {
      createBotWindow();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createBotWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});