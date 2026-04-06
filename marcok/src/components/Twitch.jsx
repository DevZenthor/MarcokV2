function Twitch() {

  const parent =
    window.location.hostname === "localhost"
      ? "localhost"
      : "marcok-v2.vercel.app";

  return (
    <div id="twitch" className="twitch-section">

      <h2 className="live-wrapper">
        LIVE MARCOK
      </h2>

      <div className="twitch-container">
        <iframe
          src={`https://player.twitch.tv/?channel=marcok&parent=${parent}`}
          allowFullScreen
          width="100%"
          height="500"
        ></iframe>
      </div>

    </div>
  );
}

export default Twitch;