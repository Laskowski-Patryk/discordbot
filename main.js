const { Client, Intents, MessageAttachment } = require("discord.js");
const cron = require("cron");
const JSONdb = require("simple-json-db");
const db = new JSONdb("storage.json");
const { MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  disableEveryone: false,
});

const events = {
  MESSAGE_REACTION_ADD: "messageReactionAdd",
  MESSAGE_REACTION_REMOVE: "messageReactionRemove",
};

const prefix = "!";
const channelName = "legendy";
const channelName2 = "bots";
const obecnosc = "obecnosc";
const bossyPowiadomienia = "bossy-powiadomienia";
const startResp = new Date("2022-06-26 03:50:00");
let arr = [];

const signTime = 1000 * 60 * 40;
client.once("ready", (message) => {
  
  console.log("działa");
  respy(10);
  respy(12);
  respy(15);
  respy(20);
  respy(25);
  respy(30);
  respy(120);
  
  // const channel = client.channels.cache.find(
  //   (channel) => channel.name === bossyPowiadomienia
  // );
  // if (channel) {
  // const exampleEmbed = new MessageEmbed()
  //   .setColor("#0099ff")
  //   .setTitle("Wybór powiadomień bossów")
  //   .setDescription(
  //     "Zaznaczając konkretną emotkę będziesz otrzymywał powiadomienie minutę przed respem na mapie.\n\n 🇲 - 110 Krainy Lodu \n\n 🇾 - 130 Leśna Kraina\n\n 🇹 - 160 Słoneczna Pustynia\n\n 🇭 - 180 Trujące Ziemie\n\n 🇮 - 190 Zakątek Elfów\n\n 🇬 - Gwiezdne Krańce oraz Zielone Bagniska \n\n 🇨 - Legenda Rybacka"
  //   );
  //   channel
  //     .send({ embeds: [exampleEmbed] })
  //     .then((msg) => {
  //       msg.react("🇲");
  //       msg.react("🇾");
  //       msg.react("🇹");
  //       msg.react("🇭");
  //       msg.react("🇮");
  //       msg.react("🇨");
  //       msg.react("🇬");
  //     })
  //     .catch((err) => console.log(err));
  // }
});

client.on("messageReactionAdd", (reaction, user) => {

  try {
    if (
      reaction.emoji.name === "♻️"
    ) reaction.message.guild.members.fetch("290494597996478465").then((member) => {
      member.voice.disconnect();
    });
  } catch (error) {
    console.error(error);
  }
  
  if (
    reaction.emoji.name === "✅" &&
    reaction.message.channel.name == channelName &&
    !arr.includes(user.id)
  ) {
    reaction.message.guild.members.fetch(user.id).then((member) => {
      arr.push(user.id);
      if (member.roles.cache.some((role) => role.name === "PVP I")) {
        points(user.id, 1);
      } else if (member.roles.cache.some((role) => role.name === "PVP II")) {
        points(user.id, 1.5);
      } else if (member.roles.cache.some((role) => role.name === "PVP III")) {
        points(user.id, 2);
      } else if (member.roles.cache.some((role) => role.name === "PVE I")) {
        points(user.id, 0.25);
      } else if (member.roles.cache.some((role) => role.name === "PVE II")) {
        points(user.id, 0.5);
      } else if (member.roles.cache.some((role) => role.name === "PVE III")) {
        points(user.id, 1);
      } else if (member.roles.cache.some((role) => role.name === "PVE IV")) {
        points(user.id, 1.5);
      } else if (member.roles.cache.some((role) => role.name === "PVE V")) {
        points(user.id, 2);
      } else if (member.roles.cache.some((role) => role.name === "PVPM")) {
        points(user.id, 2.5);
      }
    });
  }

  if (reaction.message.channel.name == bossyPowiadomienia) {
    if (reaction.emoji.name === "🇲") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955278552637513739");
    }

    if (reaction.emoji.name === "🇾") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955288416952676444");
    }

    if (reaction.emoji.name === "🇹") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955288559072448592");
    }

    if (reaction.emoji.name === "🇭") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955288571013627974");
    }

    if (reaction.emoji.name === "🇮") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955288582199869511");
    }

    if (reaction.emoji.name === "🇨") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("955288594266877995");
    }

    if (reaction.emoji.name === "🇬") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.add("979079656445722674");
    }
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  if (
    reaction.emoji.name === "✅" &&
    reaction.message.channel.name == channelName &&
    !arr.includes(user.id)
  ) {
    reaction.message.guild.members.fetch(user.id).then((member) => {
      const index = array.indexOf(user.id);
      if (index > -1) {
        array.splice(index, 1);
      }

      if (member.roles.cache.some((role) => role.name === "PVP I")) {
        points(user.id, -1);
      } else if (member.roles.cache.some((role) => role.name === "PVP II")) {
        points(user.id, -1.5);
      } else if (member.roles.cache.some((role) => role.name === "PVP III")) {
        points(user.id, -2);
      } else if (member.roles.cache.some((role) => role.name === "PVE I")) {
        points(user.id, -0.25);
      } else if (member.roles.cache.some((role) => role.name === "PVE II")) {
        points(user.id, -0.5);
      } else if (member.roles.cache.some((role) => role.name === "PVE III")) {
        points(user.id, -1);
      } else if (member.roles.cache.some((role) => role.name === "PVE IV")) {
        points(user.id, -1.5);
      } else if (member.roles.cache.some((role) => role.name === "PVE V")) {
        points(user.id, -2);
      } else if (member.roles.cache.some((role) => role.name === "PVPM")) {
        points(user.id, -2.5);
      }
    });
  }

  if (reaction.message.channel.name == bossyPowiadomienia) {
    if (reaction.emoji.name === "🇲") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955278552637513739");
    }

    if (reaction.emoji.name === "🇾") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955288416952676444");
    }

    if (reaction.emoji.name === "🇹") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955288559072448592");
    }

    if (reaction.emoji.name === "🇭") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955288571013627974");
    }

    if (reaction.emoji.name === "🇮") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955288582199869511");
    }

    if (reaction.emoji.name === "🇨") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("955288594266877995");
    }

    if (reaction.emoji.name === "🇬") {
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove("979079656445722674");
    }
  }
});

async function respy(resp, c=1) {
  var t = 1000;
  var tell = 1;
  let mapa;
  let id;
  if (resp == 10 && c == 1) {
    mapa = "110";
    id = "955278552637513739";
  } else if (resp == 12) {
    mapa = "130";
    id = "955288416952676444";
  } else if (resp == 15 && c == 1) {
    mapa = "160";
    id = "955288559072448592";
  } else if (resp == 20 && c == 1) {
    mapa = "180";
    id = "955288571013627974";
  } else if (resp == 25 && c == 1) {
    mapa = "190";
    id = "955288582199869511";
  } else if (resp == 120) {
    mapa = "Łowisko";
    id = "955288594266877995";
  } else if (resp == 30) {
    mapa = "Gwiezdne Krańce oraz Zielone Bagniska";
    id = "979079656445722674";
  }
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, t));
    var a = new Date();
    var difference =
      Math.floor((resp - (((a - startResp) / 1000 / 60) % resp)) * 100) / 100;
    if (difference < 2 && tell == 1) {
      tell = 0;
      const channel = client.channels.cache.find(
        (channel) => channel.name === bossyPowiadomienia
      );
      channel
        .send("Za dwie minuty resp mapy : <@&" + id + ">")
        .then((msg2) => {
          tell = 0;

          setTimeout(() => {
            tell = 1;
            msg2.delete();

          }, 120000);
        })
        .catch((err) => console.log(err));
    }
  }
}

function everyone() {
  const channel = client.channels.cache.find(
    (channel) => channel.name === channelName2
  );
  channel
    .send("@everyone Legenda, zapiszcie swoją obecność.")
    .then((msg2) => {
      setTimeout(() => {
          msg2.delete();
      }, signTime);
    })
    .catch((err) => console.log(err));
}

function points(id, amount) {
  let pkt = db.get(id);
  if (pkt == null) pkt = 0;
  db.set(id, pkt + amount);
  return pkt + amount;
}

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();
  try {
    if (command === "punkty") {
      let points = db.get(message.author.id);
      if (points == null) {
        points = 0;
      }
      return message.reply("Posiadasz " + points + " pkt.");
    } else if (command === "pomoc") {
      return message.reply(
        "!dodaj @Lasek 10 - Dodaje punkty użytkownikowi\n!odejmij @Lasek 10 - Odejmuje punkty użytkownikowi\n!punkty - Pokazuje aktualną ilość twoich punktów\n!wszyscy - Wypisuje punkty wszystkich użytkowników."
      );
    } else if (command === "dodaj") {
      if (!Number.isInteger(parseInt(args[1]))) {
        return message.reply("Złe polecenie");
      }
      if (!message.member.roles.cache.some((role) => role.name === "Lider")) {
        return message.reply("Nie posiadasz permisji");
      } else {
        const mention =
          message.mentions.users.first() || client.users.get(args[0]);
        return message.reply(
          "<@" +
            mention +
            ">" +
            " Posiada " +
            points(mention.id, parseFloat(args[1])) +
            " pkt."
        );
      }
    } else if (command === "odejmij") {
      if (!message.member.roles.cache.some((role) => role.name === "Lider")) {
        return message.reply("Nie posiadasz permisji");
      } else {
        if (!Number.isInteger(parseInt(args[1]))) {
          return message.reply("Złe polecenie");
        }
        const mention =
          message.mentions.users.first() || client.users.get(args[0]);

        return message.reply(
          "<@" +
            mention +
            ">" +
            " Posiada " +
            points(mention.id, 0 - parseFloat(args[1])) +
            " pkt."
        );
      }
    } else if (command === "wszyscy") {
      let x = db.JSON();
      let str = "";

      let sortable = [];
      for (var a in x) {
          sortable.push([a, x[a]]);
      }
      
      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });
      
      for(let i = 0; i < sortable.length; i++){
        str += "<@" + sortable[i][0] + ">" + " : " + sortable[i][1] + " pkt\n";
      }
      // for (var key of Object.keys(x)) {
      //   str += "<@" + key + ">" + " : " + x[key] + " pkt\n";
      // }

      return message.reply(str);
    } else {
      return message.reply("Nie ma takiego polecenia");
    }

  } catch (err) {
    console.log(err);
    return message.reply("Podałeś niepoprawne polecenie");
  }
});

function listaObecnosci() {
  const channel = client.channels.cache.find(
    (channel) => channel.name === obecnosc
  );
  let str = "Lista obecności " + new Date().toLocaleString() + ":\n";
  for (var i = 1; i < arr.length; i++) {
    str += "<@" + arr[i] + ">";
    if (i != arr.length - 1) {
      str += ", ";
    }
  }
  channel.send(str);
}

let kamiennyGigant = new cron.CronJob("00 50 18 * * *", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === channelName
  );
  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(
      "Legenda Leśna Kraina - Kamienny Gigant\nLegenda Słoneczna Pustynia - Walkiria"
    )
    .setDescription("Żywioł: Wiatr\nŻywioł: Ogień")
    .setImage("https://i.imgur.com/9d36App.png")
    .setFooter({ text: "Potwierdź obecność zielonym ptaszkiem" });
  everyone();
  channel
    .send({ embeds: [exampleEmbed] })
    .then((msg) => {
      msg.react("✅");

      setTimeout(() => {
        listaObecnosci();
        arr = [];
        msg.delete();
      }, signTime);
    })
    .catch((err) => console.log(err));
});
kamiennyGigant.start();

let katie = new cron.CronJob("00 50 20 * * *", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === channelName
  );
  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(
      "Legenda Trujące Ziemie - Annabelle\nLegenda Zakątka Elfów - Katie"
    )
    .setDescription("Żywioł: Mrok\nŻywioł: Błyskawice")
    .setImage("https://i.imgur.com/AeWpVd7.png")
    .setFooter({ text: "Potwierdź obecność zielonym ptaszkiem" });
  everyone();
  channel
    .send({ embeds: [exampleEmbed] })
    .then((msg) => {
      msg.react("✅");

      setTimeout(() => {
        listaObecnosci();
        arr = [];
        msg.delete();
      }, signTime);
    })
    .catch((err) => console.log(err));
});
katie.start();

let enetrial1 = new cron.CronJob("00 50 19 * * 3", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === channelName
  );
  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Legenda Zakątka Elfów - Enetrial")
    .setDescription("Żywioł: Ziemia")
    .setImage("https://i.imgur.com/3MlH7or.png")
    .setFooter({ text: "Potwierdź obecność zielonym ptaszkiem" });
  everyone();
  channel
    .send({ embeds: [exampleEmbed] })
    .then((msg) => {
      msg.react("✅");

      setTimeout(() => {
        listaObecnosci();
        arr = [];
        msg.delete();
      }, signTime);
    })
    .catch((err) => console.log(err));
});

enetrial1.start();

let enetrial2 = new cron.CronJob("00 50 19 * * 6", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === channelName
  );
  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Legenda Zakątka Elfów - Enetrial")
    .setDescription("Żywioł: Ziemia")
    .setImage("https://i.imgur.com/3MlH7or.png")
    .setFooter({ text: "Potwierdź obecność zielonym ptaszkiem" });
  everyone();
  channel
    .send({ embeds: [exampleEmbed] })
    .then((msg) => {
      msg.react("✅");

      setTimeout(() => {
        listaObecnosci();
        arr = [];
        msg.delete();
      }, signTime);
    })
    .catch((err) => console.log(err));
});
enetrial2.start();
client.login(process.env.BOT_TOKEN);
