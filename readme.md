# Unofficial iCloud Mail Desktop App for Linux

**Description:**

Experience seamless access to your iCloud Mail with this unofficial desktop application. Elevate your email management with a dedicated desktop app that integrates with iCloud, bringing your emails to the forefront of your digital experience.

**Key Features:**

- **Effortless Email Access:** Access your iCloud Mail seamlessly from your desktop. Enjoy a dedicated space for managing your emails, streamlining your communication workflow.

- **Desktop Convenience:** Embrace the simplicity of a dedicated desktop app. Easily compose, read, and organize your iCloud emails for a focused and efficient email experience.

- **Notifications:** Stay on top of your inbox with optional notifications for important emails and updates. Receive timely reminders to respond and manage your email communication effectively.

**How to Use:**

1. **Download:** Get started by downloading and installing the app on your desktop.

2. **Login:** Sign in with your iCloud credentials to securely access and manage your emails.

3. **Explore:** Browse, compose, and organize your iCloud Mail seamlessly from your desktop.

4. **Receive Updates:** Stay informed with customizable notifications for crucial emails and updates.

**Please Note:**
This application is an independent project and is not affiliated with or endorsed by Apple Inc. It is designed to enhance the desktop experience for iCloud Mail users.

Simplify your email management and enjoy a dedicated desktop space for your iCloud Mail. Download the app now and bring your emails to the forefront!

# Changelog

## [1.2.0] - 2024-4-30
- Big update
- Updated Rendering Engine from Chrome version: 121 to 124
- In app notification added
- Added new fetures in (context menu)
    - now you can cut, undo, redo, reload, zoom in-out, reset zoom, toggle fullscreen
- Now this package also availble for native debian package
    - you can install using apt command
    - check https://mirror.himelrana.com
    - If you install from apt mirror your app loading will be more faster

## [1.1.0] - 2024-02-25
- Added a new feature (context menu)
    - Now you can copy, past, select, copy link
## [1.0.0] - 2024-01-19
- Initial release


## Installation

```bash
    sudo snap install icloud-mail
```

Visit [Snapcraft Store](https://snapcraft.io/icloud-mail) and click **Install**.

## using native debian apt command [Recommended] For faster experience.

```bash
    # Add mirror.himelrana.com in your system
    sudo apt install curl
    sudo curl -fsSLo /usr/share/keyrings/himel.gpg https://mirror.himelrana.com/himel.gpg
    echo "deb [signed-by=/usr/share/keyrings/himel.gpg] https://mirror.himelrana.com/ stable main"|sudo tee /etc/apt/sources.list.d/himel-release.list
    sudo apt update
```

```bash
    sudo apt install icloud-mail
```


## Build

### Development

```bash
node version: v20.12.2
electron version: ^30.0.1

```

```bash
npm install
npm start
```

### Production

```bash
npm install
npm run dist
```

## License

MIT
