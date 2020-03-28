const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "€"

client.on('ready', () => {
  client.user.setPresence({ activity: { name: "Paladium V6.5" }, status: 'playing' });
  console.log(" ░████▓  ░██████▓  ░█▓\n██▓▒▒▒██▓░██▓▒▒▒██▓░█▓\n██▓  ░██▓░██▓  ░██▓ ▒\n▒▒████▓▒ ░██▓  ░██▓░█▓")
})

client.login('token')

client.on('message', function (message) {
        if (!message.guild) return
        let args = message.content.trim().split(/ +/g)

if (args[0].toLowerCase() === prefix + 'ping') {
message.channel.send("Laisse moi voir...").then(m => {
        let ms = m.createdTimestamp - message.createdTimestamp
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Ma latence :")
        .setDescription(`Ma latence est de ${m.createdTimestamp - message.createdTimestamp}.`)
        .setFooter("Tu peux me payer du vrai wifi " + message.author.username + " stp ?")
        message.channel.send(embed)
})
}

if (args[0].toLowerCase() === prefix + 'help') {
        message.channel.send("Voilà tout ce que je peux faire pour toi :")
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Voici la liste de mes commandes :")
        .addField("||,ping||","Pour connaitre ma latence.")
        .addField("||,wiki_help||","Donne toutes les commandes faisables avec le préfix !wiki.")
        .addField("||,status||","Donne le status de Paladium.")
        .addField("||,invit||","Te donne mon lien d'invitation")
        .setFooter("Te voila servi, mon cher " + message.author.username + ".")
message.channel.send(embed)
}

if (args[0].toLowerCase() === prefix + 'cmd') {
        message.channel.send("pré-message")
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("titre")
        .addField("titre de paragraphe","paragraphe")
        .setFooter("petit texte")
message.channel.send(embed)
}

if (args[0].toLowerCase() === prefix + 'wiki_help') {
message.channel.startTyping();
        message.channel.send("Voilà tout ce que je peux faire pour toi :")
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Voici ce que je peux t'apprendre :")
        .addField("||,wiki_grinder||","Donne la définition, l'utilité du grinder et comment le faire.")
        .addField("||,wiki_minerais||","Donne l'utilité des minerais moddés ainsi que comment les avoir.")
        .setFooter("Te voila servi, mon cher " + message.author.username + ".")
        message.channel.stopTyping(true);
message.channel.send(embed)
}

if (args[0].toLowerCase() === prefix + 'wiki_minerais') {
        message.channel.send("Voici la section demandé :")
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("PalaWiki | Minerais :")
        .addField("Minerai d'Améthyste","Le minerai d'améthyste est le moins cher niveau achat/vente, mais pas le plus facile à trouver en séance de minage... <:thONK:693445566436212778>")
        .addField("Minerai de Titane","Descrption minerai Titane")
        .addField("Minerai de Paladium","Description minerai Paladium")
        .addField("Minerai de Findium","Description minerai Findium")
        .setFooter("Te voila servi, mon cher " + message.author.username + ".")
message.channel.send(embed)
}

if (args[0].toLowerCase() === prefix + 'invit') {
        message.channel.send("Invite-moi sur ton serveur !")
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Voici mon lien d'invitation :")
        .setDescription("https://discordapp.com/api/oauth2/authorize?client_id=691217348379672589&permissions=8&scope=bot")
        .setFooter("Plus on est de fous plus on rit, comme dirait " + message.author.username + " !")
message.channel.send(embed)
}

})
