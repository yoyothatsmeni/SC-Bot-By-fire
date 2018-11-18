const Discord = require('discord.js');
const client = new Discord.Client();   

client.on('ready', () => {

    console.log('iiFireGame');
    client.user.setGame(`Shop Center | s!buy`,'https://www.twitch.tv/TEST-Broadcast');
    
    });

    client.on('message', async message => {
        var prefix = "s!"
        if(message.content.startsWith(prefix + "buy")) {
          await message.channel.send("**عمرك**").then(e => {
          let filter = m => m.author.id === message.author.id
          let lan = '';
          let md = '';
          let br = '';
          let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
          .then(collected => {
            lan = collected.first().content
            collected.first().delete()
      e.delete();
           message.channel.send('**المنتج**').then(m => {
      let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
      .then(co => {
        md = co.first().content
              co.first().delete()
              m.delete();
      message.channel.send('**اسم الاونر الي تبي تشتري منه**').then(ms => {
      let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
      .then(col => {
        br = col.first().content
              col.first().delete()
      
      ms.delete()
      
       message.channel.send('جاري التقديم').then(b => {
              setTimeout(() => {
        b.edit(`**تم التقديم وسيتم تسليمك في اسرع وقت ممكن**`)
              },2000);
      var gg = message.guild.channels.find('name', 'تسليم')
      if(!gg) return;
      if(gg) {
      gg.send({embed : new Discord.RichEmbed()
      .addField('     أسم العضو ' ,` ${message.author.tag} `)
      .addField('     العمر ' ,`  \n ${lan} \ `)
      .addField('     المنتج ' ,`  \n ${md} \ `)
      .addField('     الاونر ' ,` \n ${br} \ `)
      .setColor('RANDOM')
                .setFooter(`iiFireGamer`)
      .setTimestamp()
      });
      }        
      })
      })
      })
      })
      })
      })
      })
       }
      })

client.login(process.env.BOT_KEY);
