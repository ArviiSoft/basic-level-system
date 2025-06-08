const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");
const canvafy = require("canvafy"); 
const levelPath = path.join(__dirname, "./Database/levelData.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seviye-tablosu")
    .setDescription("Seviye tablosunda yer alan kişileri listeler."),

  async execute(interaction) {
    const guildId = interaction.guild.id;

    if (!fs.existsSync(levelPath)) {
      return interaction.reply({
        content: "Veri dosyası bulunamadı.",
        flags: 64
      });
    }

    const data = JSON.parse(fs.readFileSync(levelPath, "utf8"));
    const guildData = data[guildId];

    if (!guildData) {
      return interaction.reply({
        content: "Bu sunucuda seviye verisi yok.",
        flags: 64
      });
    }

    const sorted = Object.entries(guildData)
      .sort(([, a], [, b]) => ((b.level - 1) * 100 + b.xp) - ((a.level - 1) * 100 + a.xp))
      .slice(0, 10);

    const usersData = [];

    for (let i = 0; i < sorted.length; i++) {
      const [userId, stats] = sorted[i];
      const user = await interaction.client.users.fetch(userId).catch(() => null);
      if (!user) continue;

      const totalXP = (stats.level - 1) * 100 + stats.xp;

      usersData.push({
        top: i + 1,
        avatar: user.displayAvatarURL({ extension: "png", size: 512 }),
        tag: user.tag,
        score: totalXP
      });
    }

    if (usersData.length === 0) {
      return interaction.reply({
        content: "Seviye tablosu için yeterli kullanıcı verisi bulunamadı.",
        flags: 64
      });
    }

    await interaction.deferReply(); 

    const topImage = await new canvafy.Top()
      .setOpacity(0.6)
      .setScoreMessage("Toplam XP:")
      .setabbreviateNumber(false)
      .setBackground("image", fs.readFileSync(path.join(__dirname, "./assets/seviye/seviye-background.png")))
      .setColors({
        box: '#212121',
        username: '#ffffff',
        score: '#ffffff',
        firstRank: '#f7c716',
        secondRank: '#9e9e9e',
        thirdRank: '#94610f'
      })
      .setUsersData(usersData)
      .build();

    await interaction.editReply({
      files: [{
        attachment: topImage,
        name: `top-${interaction.user.id}.png`
      }]
    });
  }
};