# Danish Bots

An Electron desktop app with a navbar and three resource cards — Encyclopedia (Britannica), Library (British Council), and Wikipedia — each opening in an embedded webview.

## Prerequisites

- Node.js and npm installed
- VS Code as the editor

## 1. Create the Project

Created a new folder named `learnobots`, opened it in VS Code, then ran:

```bash
npm init -y
```

## 2. Install Electron

```bash
npm install electron --save-dev
```

## 3. Configure package.json

Set the `"main"` field to `main.js` and added a `"start"` script:

```json
{
  "name": "learnobots",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

## 4. main.js

Sets up the app window, enables the webview tag (needed to embed external sites), disables HTTP/2 (needed because some external sites failed to load inside a webview with an `ERR_HTTP2_PROTOCOL_ERROR`), catches popup requests from any webview so they load inside the same webview instead of opening separate windows, and loads the MyLoft browser extension on startup.

```javascript
const { app, BrowserWindow, session } = require('electron')
const path = require('path')

app.commandLine.appendSwitch('disable-http2')

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#0d0c16',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: false,
      webviewTag: true
    }
  })

  win.loadFile('index.html')
}

app.on('web-contents-created', (event, contents) => {
  if (contents.getType() === 'webview') {
    contents.setWindowOpenHandler(({ url }) => {
      contents.loadURL(url)
      return { action: 'deny' }
    })
  }
})

app.whenReady().then(async () => {
  try {
    await session.defaultSession.extensions.loadExtension(
      path.join(__dirname, 'extensions', 'myloft')
    )
    console.log('MyLoft extension loaded successfully')
  } catch (err) {
    console.error('Failed to load extension:', err)
  }

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
```

## 5. index.html — Home Screen

A simple navbar with a logo placeholder (no text), and three cards below it, each with its own accent color and a custom SVG icon:

- **Encyclopedia** (blue accent) → links to `encyclopedia.html`
- **Library** (orange accent) → links to `library.html`
- **Wikipedia** (teal accent) → links to `wikipedia.html`

**Navbar markup:**

```html
<div class="navbar">
  <div class="logo">
    <img src="assets/lob.png" alt="Logo" style="width: 100%; height: 100%; border-radius: 9px;">
  </div>
</div>
```

**Card click handlers:**

```javascript
document.getElementById('encyclopediaCard').addEventListener('click', () => {
  window.location.href = 'encyclopedia.html'
})

document.getElementById('libraryCard').addEventListener('click', () => {
  window.location.href = 'library.html'
})

document.getElementById('wikipediaCard').addEventListener('click', () => {
  window.location.href = 'wikipedia.html'
})
```

## 6. encyclopedia.html

Same navbar, plus a "Back" button, and a webview pointed at Britannica:

```html
<webview id="britannicaView" src="https://www.britannica.com" allowpopups></webview>
```

## 7. library.html

Points to British Council. This site needed a few extra fixes to load and behave correctly inside the webview:

- A custom `useragent`, since the site rejected Electron's default browser signature
- A forced white background, since the webview defaults to a transparent background and was showing the app's dark background through gaps in the page
- `allowpopups`, so that login/sign-in links (which try to open in a new window) are allowed to fire a popup request at all

```html
<webview
  id="councilView"
  src="https://www.britishcouncil.org"
  useragent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  style="background-color: #ffffff;"
  allowpopups>
</webview>
```

Also added in CSS:

```css
webview {
  flex: 1;
  width: 100%;
  background-color: #ffffff;
}
```

## 8. wikipedia.html

Same navbar and back button, with a webview pointed at Wikipedia:

```html
<webview id="wikiView" src="https://www.wikipedia.org"></webview>
```

## 9. Handling Login Popups

Login buttons on the British Council page try to open in a new window, which `<webview>` blocks by default. This is solved at the main-process level in `main.js` (see step 4 above) using `setWindowOpenHandler`, which applies automatically to every webview in the app — so any popup-triggered link loads inside the existing webview instead of spawning a separate window.

## 10. Loading the MyLoft Extension

MyLoft (accessed through the British Council library) requires a Chrome extension that can't be installed through a normal webpage. Since the extension is already installed in Chrome on this machine, its unpacked files were reused instead of re-downloading anything:

- Located the installed extension's files in Chrome's local extension folder (`AppData\Local\Google\Chrome\User Data\Default\Extensions`)
- Identified the correct extension ID via `chrome://extensions` (Developer mode)
- Copied the versioned extension folder into the project under `extensions/myloft`
- Loaded it on app startup using `session.defaultSession.extensions.loadExtension()` (see `main.js` in step 4)
  
NOTE: The extensions/myloft folder contains files belonging to a third-party Chrome extension, not original project code. Since that extension is not open-source or freely redistributable, it was added to .gitignore instead of being pushed to the public repo:

## 11. Run the App

```bash
npm start
```

This runs `electron .`, which launches `main.js` and opens `index.html` — the navbar and three cards appear, and each card opens its own page with the matching site embedded inside.
