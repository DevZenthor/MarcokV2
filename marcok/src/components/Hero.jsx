import logo from "../assets/logo.png";

function Hero() {
  return (
    <div className="hero d-flex align-items-center justify-content-center text-center">

      <div className="hero-content">

        {/* LOGO */}
        <div className="logo-frame">
          <img src={logo} alt="Marcok logo" className="hero-logo" />
        </div>

        <p className="hero-subtitle mt-4">
          Twitch • YouTube • TikTok
        </p>

        <button
          className="btn btn-glow mt-4"
          onClick={() =>
            document.getElementById("twitch").scrollIntoView({ behavior: "smooth" })
          }
        >
          🔴 Regarder le live
        </button>

      </div>

    </div>
  );
}

export default Hero;