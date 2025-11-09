# Om Hoster - Simple Local File Hosting

![Om Hoster Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.ico-P0TXcSL4dbOvD8NI4DKFElRdVS6vdx.x-icon)

> **Om Hoster** - Share your files locally with ease. A lightweight Python Flask-based HTTP server that makes hosting folders on your local network incredibly simple.

![GitHub](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0-green)
![Downloads](https://img.shields.io/badge/downloads-14.00%20MB-brightgreen)

---

## 🚀 Overview

Om Hoster is a dead-simple desktop application for hosting folders on your local network. With just a few clicks, you can:

- 📁 Select any folder on your computer
- 🔌 Choose a custom port or use the default (2012)
- 🌐 Access files from localhost or your local IP
- 📊 Monitor activity in real-time
- 🎯 Share with anyone on your network

Perfect for quick file sharing, testing, or sharing projects without complicated configurations.

---

## ✨ Features

- **Lightweight**: Only 14 MB in size
- **Simple UI**: Intuitive interface for everyone
- **Flexible Binding**: Choose between localhost or your local IP address
- **Custom Ports**: Use any port you want
- **Real-time Logging**: See exactly what's happening
- **One-Click Access**: "Open Site" button for instant access
- **No Dependencies**: Self-contained .exe file
- **Cross-Network**: Share across your entire LAN

---

## 📥 Installation & Usage

### Download

Download the latest version of Om Hoster from [the official website](https://omhoster.example.com).

### Getting Started

1. **Download the executable** - Om Hoster_v1.0.exe (14.00 MB)
2. **Run the application** - Double-click the .exe file
3. **Select folder** - Click "Browse..." and choose the folder you want to host
4. **Choose binding** - Select localhost (127.0.0.1) or your local IP
5. **Set port** - Leave as default (2012) or enter custom port
6. **Start hosting** - Click "Start Hosting"
7. **Access your files** - Click "Open Site" or visit http://localhost:2012

---

## 🔧 Technical Specifications

| Feature | Details |
|---------|---------|
| **File Size** | 14.00 MB |
| **Framework** | Python Flask |
| **Platform** | Windows (.exe) |
| **Default Port** | 2012 |
| **Network Types** | Localhost, Local IP, Router IP |
| **License** | MIT |

---

## 🌐 Network Access

### Local Machine
- **URL**: `http://localhost:2012`
- **Description**: Access from the same computer

### Local Network
- **URL**: `http://10.x.x.x:2012` (or your local IP)
- **Description**: Access from other devices on your network
- **Example**: If your IP is 10.112.179.244, use `http://10.112.179.244:2012`

### Custom Port
- **URL**: `http://localhost:YOURPORT`
- **Description**: Use any available port number

---

## 💡 Use Cases

- **Quick File Sharing**: Share documents with colleagues quickly
- **Development Testing**: Host a folder for web development projects
- **Media Streaming**: Stream videos or music files
- **Static Website Testing**: Test your static websites locally
- **Network Testing**: Debug network-related issues
- **File Access**: Browse files from different devices on the network

---

## 🖼️ Application Interface

![Om Hoster Interface](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vMZOrToD4JaCJqtSc5rNeBWGjdPbTk.png)

The Om Hoster interface provides a clean, intuitive experience with:
- **Folder Selection**: Easy browse dialog
- **Binding Options**: Toggle between localhost and local IP
- **Port Configuration**: Customizable port settings
- **Action Buttons**: Start/Stop hosting and direct site access
- **Real-time Logs**: Monitor all server activity

---

## ⚙️ How It Works

Om Hoster uses Flask (Python web framework) to create a lightweight HTTP server. When you start hosting:

1. The application creates a Flask server
2. It binds to your chosen address (localhost or local IP)
3. It listens on your selected port
4. Requests are served directly from your chosen folder
5. All activity is logged in real-time

---

## 🔒 Security Notes

- **Local Network Only**: Om Hoster is designed for local network use
- **No Encryption**: Files are served over plain HTTP
- **No Authentication**: Anyone on your network can access files
- **No Rate Limiting**: Use on trusted networks only
- **Best Practice**: Don't expose to the internet; use for local sharing only

---

## 🐛 Troubleshooting

### Port Already in Use
If your chosen port is already in use:
- Try a different port number
- Common ports to avoid: 80, 443, 8080, 3000

### Can't Access from Another Device
- Check that both devices are on the same network
- Use your computer's local IP address (e.g., 10.x.x.x)
- Check Windows Firewall settings
- Ensure the port is not blocked

### Application Won't Start
- Run as Administrator
- Check that no antivirus is blocking the application
- Verify you have Python Flask installed (if running from source)

---

## 🛠️ For Developers

### Building from Source

Om Hoster is built with Python and Flask. To run from source:

\`\`\`bash
pip install flask
python app.py
\`\`\`

### Project Structure

\`\`\`
Om Hoster/
├── app.py                 # Main Flask application
├── gui.py                 # GUI interface (tkinter)
├── requirements.txt       # Python dependencies
└── build.spec            # PyInstaller configuration
\`\`\`

---

## 📝 License

This project is open source and available under the **MIT License**.

---

## 👤 About the Author

**Om Hoster** is made by **OmHackz**

- 🌐 **Website**: [omhackz.pages.dev](https://omhackz.pages.dev)
- 🐙 **GitHub**: [github.com/omhackz](https://github.com/omhackz)
- 📧 **Contact**: For inquiries, visit the author's website

---

## 🙏 Acknowledgments

- Built with **Python Flask** for simplicity and efficiency
- Designed with **tkinter** for cross-platform GUI
- Packaged with **PyInstaller** for easy distribution

---

## 💬 Support & Feedback

- 📌 Report issues on [GitHub Issues](https://github.com/omhackz)
- 💡 Suggest features on the author's website
- 🤝 Contribute to the project on GitHub

---

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Python Official Site](https://www.python.org/)
- [Networking Basics](https://en.wikipedia.org/wiki/Local_area_network)

---

## 🚀 Quick Start Commands

\`\`\`bash
# For Windows Users
1. Download Om Hoster_v1.0.exe
2. Double-click to run
3. Follow the on-screen prompts

# For Developers (running from source)
git clone https://github.com/omhackz/om-hoster
cd om-hoster
pip install -r requirements.txt
python gui.py
\`\`\`

---

**Made with ❤️ by [OmHackz](https://omhackz.pages.dev)**

© 2025 Om Hoster. All rights reserved.
