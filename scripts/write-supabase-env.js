const fs = require("fs");

const config = {
  url: process.env.SUPABASE_URL || "",
  anonKey: process.env.SUPABASE_ANON_KEY || "",
};

const emailjsConfig = {
  publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
  serviceId: process.env.EMAILJS_SERVICE_ID || "",
  templateId: process.env.EMAILJS_TEMPLATE_ID || "",
};

const body = `window.SG_SUPABASE = ${JSON.stringify(config, null, 2)};\nwindow.SG_EMAILJS = ${JSON.stringify(emailjsConfig, null, 2)};\n`;
fs.writeFileSync("supabase-env.js", body);
