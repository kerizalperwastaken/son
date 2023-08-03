module.exports = {
  Prefix: "+",//buraya botun prefixini girceksinizz
  Owners: ["1125797410690564187"],
  Token: process.env.token,//auth bot token buraya botun tokenini girceksiniz  hadi sizebot oluşturmayıda göstereyim
  mongoPass: process.env.mongo,//
  Error_log_channel: "1129836008201003141",//buraya botun error verin ce mesaj atacağı kanalı girceksiniz
  Auth_log_channel: "1129836008201003141",//auth yapılınca gelecek mesajın kanal id
  oauth_link: "https://discord.com/api/oauth2/authorize?client_id=1129829115810295929&redirect_uri=https%3A%2F%2Fnsfwverify.k3riz.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join",//evet burası önemli dikkatli izleyiniz
  client_id: "1129829115810295929",//bot id
  logchannel: "1129836008201003141",//log channel
  autoroleserver: "",
  autoroleid: "", // do it work? Auto role. 
  client_secret: process.env.secret,
  redirect_uri: "https://nsfwverify.k3riz.repl.co/authed",
}