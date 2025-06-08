# 🎮 Discord Basic Level System

A simple yet elegant **XP & Leveling System** for Discord bots using `discord.js` and a lightweight database. Designed to provide users with an engaging ranking experience through visually appealing rank cards and leaderboard displays.

![image](https://github.com/user-attachments/assets/613e1c71-8a8b-4f83-82d7-e66f7fe9730f)

---

## 🚀 Features

- 🧾 XP & Level Tracking
- 🎖️ Rank Card Generation (Image-based)
- 🏆 Leaderboard System
- 📦 Easy to Set Up & Modify
- 🔧 No external database needed

---

## 📂 Project Structure

```
📁 Discord Basic Level System
├── 📁 commands
│   ├── 📄 seviye.js          # Shows individual user's XP and level
│   └── 📄 seviye-tablosu.js  # Displays top XP holders
├── 📁 events
│   └── 📄 messageCreate.js   # XP gain logic on messages
├── 📄 config.json            # Configuration file
├── 📄 index.js               # Bot main file
└── 📄 package.json           # Node.js dependencies
```

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArviiSoft/basic-level-system.git
   cd basic-level-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 💡 How It Works

| Action            | Result                       |
|-------------------|------------------------------|
| User sends a msg  | +1 XP (with cooldown system) |
| Use `/seviye`     | See your rank card           |
| Use `/seviye-tablosu` | See the top XP holders     |

Rank cards and leaderboards are automatically generated using dynamic image rendering for a clean and anime-themed aesthetic.

---

## 🖼️ Screenshots

### 🔹 Rank Card Example
![image](https://github.com/user-attachments/assets/fa0cb501-c9f6-4995-8983-835279d876bf)

---

## 📌 Requirements

- Node.js v16+
- Required packages in `package.json` (like `discord.js`, `canvas`, etc.)

---

## 👤 Author

Made with ❤️ by [ArviS](https://discord.gg/uzPUNrrhH2)

---

## 📄 License

MIT License — feel free to use, modify and distribute!
