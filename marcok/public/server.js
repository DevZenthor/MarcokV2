import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const CLIENT_ID = "TON_CLIENT_ID";
const CLIENT_SECRET = "TON_CLIENT_SECRET";

let accessToken = "";

/* récupérer token */
async function getToken() {
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, {
    method: "POST"
  });

  const data = await res.json();
  accessToken = data.access_token;
}

/* route live */
app.get("/live", async (req, res) => {

  if (!accessToken) await getToken();

  const response = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=marcok",
    {
      headers: {
        "Client-ID": CLIENT_ID,
        "Authorization": `Bearer ${accessToken}`
      }
    }
  );

  const data = await response.json();

  if (data.data.length > 0) {
    res.json({ live: true, stream: data.data[0] });
  } else {
    res.json({ live: false });
  }
});

app.listen(3001, () => console.log("Server running"));