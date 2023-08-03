
const { ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const discord = require("discord.js");
let AuthDB = require(`../../database/AuthDB`)
const { redirect_uri } = require("../../config.js");


module.exports = {
  name: "verify",
  description: "werere",
  options: null,

  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction, args) => {



    let embed1 = new discord.EmbedBuilder()
      .setTitle(`You can see channels after verification.`)
      .setDescription(`**__CLICK__** The __Verify__ Button to Access see channels after verification.`)
    .setImage('https://cdn.discordapp.com/attachments/1068617102317068410/1072578767861587998/verify.gif')
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Verify")
      .setStyle(ButtonStyle.Link)
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1129676192140775465&redirect_uri=https%3A%2F%2Fverify.k3riz.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join')
          .setDisabled(false),
        new ButtonBuilder()
          .setCustomId('next')
          .setLabel("Verication after")
      .setStyle(ButtonStyle.Danger)
          .setDisabled(true),
      );


    await interaction.reply({
      embeds: [embed1],
      components: [row]

    });

  },
};