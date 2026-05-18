module.exports.config = {
  name: "eval",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "SaGor",
  description: "eval",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 1
};

module.exports.run = async function ({ api, event, args }) {
  const send = m => api.sendMessage(String(m), event.threadID, event.messageID);
  try {
    let r = await eval(`(async()=>{${args.join(" ")}})()`);
    if (typeof r === "object") r = JSON.stringify(r, null, 2);
    if (r !== undefined) send(r);
  } catch (e) {
    send(e.message);
  }
};
