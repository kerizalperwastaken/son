
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const discord = require("discord.js");
let AuthDB = require(`../../database/AuthDB`)
module.exports = {
  name: "restart",
  description: "Restarts bot.",
  //type: ApplicationCommandType.ChatInput,
  

  
  run: async (client, interaction, args) => {
client.restart(interaction)
    
  },
};