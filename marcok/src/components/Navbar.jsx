import { FaTwitch, FaYoutube, FaTiktok } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar custom-navbar px-4 py-3">
      <h2 className="logo">🔥 Streamer</h2>

      <div className="ms-auto d-flex align-items-center gap-4">

        <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nav-link">
          Accueil
        </span>

        <span onClick={() => document.getElementById("twitch").scrollIntoView()} className="nav-link">
          Live
        </span>

        <span onClick={() => document.getElementById("videos").scrollIntoView()} className="nav-link">
          Vidéos
        </span>

        <div className="d-flex gap-3 fs-5">
          <FaYoutube className="icon youtube" />
          <FaTwitch className="icon twitch" />
          <FaTiktok className="icon tiktok" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;