function Hero() {
  return (
    <div className="hero d-flex align-items-center justify-content-center text-center">
      
      <div className="hero-content">
        <h1 className="hero-title">
          STREAM LIKE A <span>PRO</span>
        </h1>

        <p className="hero-subtitle">
          Gaming • Live • Highlights
        </p>

        <div className="mt-4">
          <button
            onClick={() =>
              document.getElementById("twitch").scrollIntoView({ behavior: "smooth" })
            }
            className="btn btn-glow"
          >
            🔴 Voir le live
          </button>
        </div>
      </div>

    </div>
  );
}

export default Hero;