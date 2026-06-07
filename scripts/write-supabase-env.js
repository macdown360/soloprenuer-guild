const fs = require("fs");

const config = {
  url: process.env.SUPABASE_URL || "",
  anonKey: process.env.SUPABASE_ANON_KEY || "",
};

const body = `window.SG_SUPABASE = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync("supabase-env.js", body);

