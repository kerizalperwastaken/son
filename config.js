module.exports = {
  Prefix: "+",//buraya botun prefixini girceksinizz
  Owners: ["1125797410690564187"],
  Token: process.env.token,//auth bot token buraya botun tokenini girceksiniz  hadi sizebot oluşturmayıda göstereyim
  mongoPass: process.env.mongo,//
  Error_log_channel: "",// botun error verin ce mesaj atacağı kanalı girceksiniz
  Auth_log_channel: process.env.log,//auth yapılınca gelecek mesajın kanal id
  oauth_link: process.env.auth,//evet burası önemli dikkatli izleyiniz
  client_id: process.env.id,//bot id
  logchannel: "",// channel
  autoroleserver: ,
  autoroleid: process.env.autoroleid, // do it work? Auto role. 
  client_secret: process.env.secret,
  redirect_uri: process.env.redirect,
}