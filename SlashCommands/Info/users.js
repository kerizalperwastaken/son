
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const discord = require("discord.js");
let AuthDB = require(`../../database/AuthDB`)
module.exports = {
  name: "users",
  description: "Gives the total users in the database.",
  options: null,

  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction, args) => {
interaction.reply("Loading")


    let embed1 = new discord.EmbedBuilder()
      .setTitle(`Total Users`)
      .setColor(0x7cade2)
      .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`There are **${await client.tokenCount()}** authorized users in my database`)


    await interaction.editReply({
        embeds: [embed1]
      })
   
  },
};