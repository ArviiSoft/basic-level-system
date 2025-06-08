# 🎮 Discord Basic Level System

A simple yet elegant **XP & Leveling System** for Discord bots using `discord.js` and a lightweight database. Designed to provide users with an engaging ranking experience through visually appealing rank cards and leaderboard displays.

![Level Preview](./db9a5cdd-6fa1-471e-bdab-eaab160088e6.png)

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
<img src="./db9a5cdd-6fa1-471e-bdab-eaab160088e6.png" alt="Rank Card Preview" width="600"/>

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