import { useEffect, useState } from "react";

function Twitch() {
  const [isLive, setIsLive] = useState(true); // change pour test

  return (
    <div id="twitch" className="container py-5 text-center">

      <h2 className="live-wrapper">
        {isLive ? (
          <>
            <span className="live-dot"></span>
            LIVE MARCOK
          </>
        ) : (
          "OFFLINE"
        )}
      </h2>

      {isLive ? (
        <div className="twitch-box mt-4">
          <iframe
            src="https://player.twitch.tv/?channel=marcok&parent=localhost"
            height="450"
            width="100%"
            allowFullScreen>
          </iframe>
        </div>
      ) : (
        <div className="offline-box mt-4">
          <p>Reviens plus tard 👀</p>
        </div>
      )}

    </div>
  );
}

export default Twitch;