const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Akane Sakuramori",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    // উদাহরণ লাইন পরিবর্তিত
    "আমি এখন বস আবরার ফাহিম এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
    "আমাকে না ডেকে আমার বস আবরার ফাহিম কে একটা জি এফ দাও-😽🫶🌺",
    "- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস আবরার ফাহিম এর নবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/profile.php?id=100090183762638",
    "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস আবরার ফাহিম কে দান করেন-🥱🐰🍒",
    "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস আবরার ফাহিম কে-🐸😾🔪",
    "—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস আবরার ফাহিম এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️",
    "সুন্দর মাইয়া মানেই-🥱আমার বস আবরার ফাহিম' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗",
    "- আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস আবরার ফাহিম ধরতে পারছে না-🐸🥲",
    "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস আবরার ফাহিম কে সন্দেহ করে.!🐸",
    "- ওই বেডি তোমার বাসায় না আমার বস আবরার ফাহিম মেয়ে দেখতে গেছিলো-🙃",
    "-থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস আবরার ফাহিম আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦",
    "My Creator:Abrar Fahim ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস আবরার ফাহিম আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন",
    "He is Abrar Fahim ッ❤️ তাকে সবাই আবরার ফাহিম নামে  চিনে🤙",
    "‎[𝐎𝐖𝐍𝐄𝐑:☞ Abrar Fahim ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 abrar fahim.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100090183762638\nতার সাতে যোগা যোগ করবেন WhatsApp :- +01759516563",
  ];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
    return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
  };

  if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
    return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
  };

  return api.sendMessage(`${name}, ${rand}`, threadID, messageID);
};

module.exports.run = function({ api, event, client, __GLOBAL }) { };
