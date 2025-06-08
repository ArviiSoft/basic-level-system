const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");
const canvafy = require("canvafy"); 

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seviye")
    .setDescription("Seviye kartını gösterir."),

  async execute(interaction) {
    const user = interaction.user;
    const member = interaction.member;
    const guildId = interaction.guild.id;
    const dbPath = path.join(__dirname, "./Database/levelData.json");

    let db = {};
    if (fs.existsSync(dbPath)) db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const userData = db[guildId]?.[user.id] || { xp: 0, level: 1 };
    const nextXP = 100;

    await interaction.deferReply();

    const rank = await new canvafy.Rank()
      .setAvatar(user.displayAvatarURL({ forceStatic: true, extension: "png" }))
      .setBackground("image", fs.readFileSync(path.join(__dirname, "./assets/seviye/seviye-background.png")))
      .setUsername(user.username)
      .setBorder("#fff")
      .setStatus(member?.presence?.status || "offline")
      .setLevel(userData.level)
      .setRank(1)
      .setCurrentXp(userData.xp)
      .setRequiredXp(nextXP)
      .build();

    await interaction.editReply({
      files: [{ attachment: rank, name: "seviye.png" }]
    });
  },
};