const { ChannelType, Events, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require("fs");
const path = require("path");

//LEVEL SİSTEMİ
const levelPath = path.join(__dirname, "./Database/levelData.json");
if (!fs.existsSync(levelPath)) fs.writeFileSync(levelPath, "{}");

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;

  const xpPerMessage = 1; 
  const cooldown = 3 * 1000; //1 Dakika Cooldown - UnutmArviS

  let data = JSON.parse(fs.readFileSync(levelPath, "utf8"));
  const userId = message.author.id;
  const guildId = message.guild.id;

  if (!data[guildId]) data[guildId] = {};
  if (!data[guildId][userId]) {
    data[guildId][userId] = {
      xp: 0,
      level: 1,
      lastMessage: 0
    };
  }

  const userData = data[guildId][userId];
  const now = Date.now();

  if (now - userData.lastMessage < cooldown) return;

  userData.xp += xpPerMessage;
  userData.lastMessage = now;

  const neededXP = userData.level * 100;

  if (userData.xp >= neededXP) {
    userData.level++;
    userData.xp = userData.xp - neededXP;

    message.channel.send({
      content: `Tebrikler <@${userId}>, seviye atladın. Yeni seviyen: **${userData.level}**`
    });
  }

  fs.writeFileSync(levelPath, JSON.stringify(data, null, 2));
});