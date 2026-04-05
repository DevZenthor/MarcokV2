import { useEffect, useState } from "react";

function Twitch() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fakeStatus = true; // change true / false pour tester
    setIsLive(fakeStatus);
  }, []);

  return (
    <div id="twitch" className="container py-5 text-center">

      <h2 className="live-wrapper">
  {isLive ? (
    <>
      <span className="live-dot"></span>
      LIVE
    </>
  ) : (
    "OFFLINE"
  )}
</h2>

      {isLive ? (
        <div className="twitch-box mt-4">
          <iframe
            src="https://player.twitch.tv/?channel=tonpseudo&parent=localhost"
            height="450"
            width="100%"
            allowFullScreen>
          </iframe>
        </div>
      ) : (
           <div className="twitch-box mt-4">
          <iframe
            src="https://player.twitch.tv/?channel=tonpseudo&parent=localhost"
            height="450"
            width="100%"
            allowFullScreen>
          </iframe>
        </div>
      )}

    </div>
  );
}

export default Twitch;