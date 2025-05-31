module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "info bot owner",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Báº¡n khÃ´ng thá»ƒ tÃ¬m Ä‘Æ°á»£c lá»‡nh admin táº¡i 'help' cá»§a MintBot",
 "Äá»«ng mong chá» gÃ¬ tá»« MintBot.",
 "CÃ¡i Ä‘oáº¡n nÃ y Ã¡? Cá»§a SpermBot.",
 "Náº¿u muá»‘n khÃ´ng lá»—i lá»‡nh thÃ¬ hÃ£y xÃ i nhá»¯ng lá»‡nh cÃ³ trong help vÃ¬ nhá»¯ng lá»‡nh lá»—i Ä‘Ã£ bá»‹ áº©n rá»“i.",
 "ÄÃ¢y lÃ  má»™t con bot Ä‘Æ°á»£c cÃ¡c coder cá»§a MiraiProject nhÃºng tay vÃ o.",
 "Muá»‘n biáº¿t sinh nháº­t cá»§a Mint thÃ¬ hÃ£y xÃ i 'birthday'.",
 "Cáº·c.",
 "CÃºt.",
 "Lá»“n.",
 "Báº¡n chÆ°a biáº¿t.",
 "Báº¡n Ä‘Ã£ biáº¿t.",
 "Báº¡n sáº½ biáº¿t.",
 "KhÃ´ng cÃ³ gÃ¬ lÃ  hoÃ n háº£o, MintBot lÃ  vÃ­ dá»¥.",
 "Mirai dropped.",
 "MintBot lÃ  MiraiProject nhÆ°ng module lÃ  idea cá»§a SpermBot.",
 "Báº¡n khÃ´ng biáº¿t cÃ¡ch sá»­ dá»¥ng MintBot? Äá»«ng dÃ¹ng ná»¯a.",
 "Muá»‘n chÆ¡i game? Qua bot khÃ¡c mÃ  chÆ¡i Ä‘Ã¢y khÃ´ng ráº£nh",
 "MintBot cÃ³ thá»ƒ hiá»ƒu phá»¥ ná»¯ nhÆ°ng khÃ´ng thá»ƒ cÃ³ Ä‘Æ°á»£c há».",
 "MintBot cÃ¢n spam nhÆ°ng khÃ´ng cÃ³ gÃ¬ Ä‘Ã¡ng Ä‘á»ƒ báº¡n spam."
 ];
 var link = [
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 ];

 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: `====ã€Œ ${namebot} ã€====\nÂ» Prefix system: ${PREFIX}\nÂ» Prefix box: ${prefix}\nÂ» Modules: ${commands.size}\nÂ» Ping: ${Date.now() - dateNow}ms\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n======ã€Œ ADMIN ã€ ======\n${msg.join("\n")}\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\nÂ» Total users: ${global.data.allUserID.length} \nÂ» Total threads: ${global.data.allThreadID.length}\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n[thanks for using bot!!]`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}/**
 * @author Shaon Ahmed
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "ðŸ¥°à¦†à¦¸à¦¸à¦¾à¦²à¦¾à¦®à§ à¦†à¦²à¦¾à¦‡à¦•à§à¦® ðŸ¥°",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Báº¡n khÃ´ng thá»ƒ tÃ¬m Ä‘Æ°á»£c lá»‡nh admin táº¡i 'help' cá»§a MintBot",
 "Äá»«ng mong chá» gÃ¬ tá»« MintBot.",
 "CÃ¡i Ä‘oáº¡n nÃ y Ã¡? Cá»§a SpermBot.",
 "Náº¿u muá»‘n khÃ´ng lá»—i lá»‡nh thÃ¬ hÃ£y xÃ i nhá»¯ng lá»‡nh cÃ³ trong help vÃ¬ nhá»¯ng lá»‡nh lá»—i Ä‘Ã£ bá»‹ áº©n rá»“i.",
 "ÄÃ¢y lÃ  má»™t con bot Ä‘Æ°á»£c cÃ¡c coder cá»§a MiraiProject nhÃºng tay vÃ o.",
 "Muá»‘n biáº¿t sinh nháº­t cá»§a Mint thÃ¬ hÃ£y xÃ i 'birthday'.",
 "Cáº·c.",
 "CÃºt.",
 "Lá»“n.",
 "Báº¡n chÆ°a biáº¿t.",
 "Báº¡n Ä‘Ã£ biáº¿t.",
 "Báº¡n sáº½ biáº¿t.",
 "KhÃ´ng cÃ³ gÃ¬ lÃ  hoÃ n háº£o, MintBot lÃ  vÃ­ dá»¥.",
 "Mirai dropped.",
 "MintBot lÃ  MiraiProject nhÆ°ng module lÃ  idea cá»§a SpermBot.",
 "Báº¡n khÃ´ng biáº¿t cÃ¡ch sá»­ dá»¥ng MintBot? Äá»«ng dÃ¹ng ná»¯a.",
 "Muá»‘n chÆ¡i game? Qua bot khÃ¡c mÃ  chÆ¡i Ä‘Ã¢y khÃ´ng ráº£nh",
 "MintBot cÃ³ thá»ƒ hiá»ƒu phá»¥ ná»¯ nhÆ°ng khÃ´ng thá»ƒ cÃ³ Ä‘Æ°á»£c há».",
 "MintBot cÃ¢n spam nhÆ°ng khÃ´ng cÃ³ gÃ¬ Ä‘Ã¡ng Ä‘á»ƒ báº¡n spam."
 ];
 var link = [
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",
 "https://photos.app.goo.gl/swMtXNYGE91XEPbQ8",

 ]; 
 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: 
 `ðŸ€----à¦†à¦¸à¦¸à¦¾à¦²à¦¾à¦®à§ à¦†à¦²à¦¾à¦‡à¦•à§à¦®----ðŸ€

â”â”â”â€¢â…â€¢â€¢â€¢âˆâ€¢â€¢â€¢âˆâ€¢â€¢â€¢â…â€¢â”â”â”“\n\nã€Œ ${namebot} ã€\n\nâ”—â”â”â€¢â…â€¢â€¢â€¢âˆâ€¢â€¢â€¢âˆâ€¢â€¢â€¢â…â€¢â”â”â”› \n\n______________________________\n\nâ†“â†“_ð—¥ð—¢ð—•ð—¢ð—§ ð—¦ð—¬ð—¦ð—§ð—˜ð—  ð—œð—¡ð—™ð—¢_â†“â†“\n\nÂ» ð—£ð—¿ð—²ð—³ð—¶ð˜… ð˜€ð˜†ð˜€ð˜ð—²ð—º: ${PREFIX}\n\nÂ» ð—£ð—¿ð—²ð—³ð—¶ð˜… ð—¯ð—¼ð˜…: ${prefix}\n\nÂ» ð—§ð—¼ð˜ð—®ð—¹ ð— ð—¼ð—±ð˜‚ð—¹ð—²ð˜€: ${commands.size}\n\nÂ» ð—£ð—¶ð—»ð—´: ${Date.now() - dateNow}ms\n______________________________\n\n â†“â†“_ð—¥ð—¢ð—•ð—¢ð—§ ð—¢ð—ªð—¡ð—˜ð—¥ ð—œð—¡ð—™ð—¢_â†“â†“\n\n 
ð—¡ð—”ð— ð—˜ :>Abrar fahim

ð—¢ð˜„ð—»ð—²ð—¿ ð—œð—± ð—¹ð—¶ð—»ð—¸:â˜žhttps://www.facebook.com/profile.php?id=100090183762638

ð—ªð—µð—®ð˜ð˜€ð—®ð—½ð—½â˜ž01631813286

______________________________\n\n----â†“â†“ð™ð™¤ð™—ð™¤ð™© ð™–ð™˜ð™©ð™žð™«ð™š ð™©ð™žð™¢ð™šâ†“â†“----\n\n ${hours} : ${minutes} : ${seconds} second(s)\n\n______________________________\nÂ» ð—§ð—¢ð—§ð—”ð—Ÿ ð—¨ð—¦ð—˜ð—¥ð—¦: ${global.data.allUserID.length} \n\nÂ» ð—§ð—¢ð—§ð—”ð—Ÿ ð—šð—¥ð—¢ð—¨ð—£: ${global.data.allThreadID.length}\n______________________________\n\n thanks for using \n ð‚ð˜ðð„ð‘ â˜¢ï¸_ð–£˜ -ððŽð“ âš ï¸ 
\n--------------------------------------------------\n\nâ˜¢ï¸â˜£ï¸âš ï¸`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}
