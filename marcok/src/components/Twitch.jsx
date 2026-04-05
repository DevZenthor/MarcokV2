function Twitch() {
  return (
    <div id="twitch" className="container py-5 text-center">

      <h2 className="section-title">🔴 LIVE NOW</h2>

      <div className="twitch-box mt-4">
        <iframe
          src="https://player.twitch.tv/?channel=tonpseudo&parent=localhost"
          height="450"
          width="100%"
          allowFullScreen>
        </iframe>
      </div>

    </div>
  );
}

export default Twitch;