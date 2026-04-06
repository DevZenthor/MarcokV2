import { useState } from "react";
import { FaBars, FaTimes, FaYoutube, FaTwitch, FaTiktok } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="custom-navbar">

      <div className="nav-container">

        <h2 className="logo">MARCOK</h2>

        {/* BURGER */}
        <div className="burger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <div className={`nav-menu ${open ? "active" : ""}`}>

          <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Accueil
          </span>

          <span onClick={() => scrollTo("twitch")}>
            Live
          </span>

          <span onClick={() => scrollTo("videos")}>
            Vidéos
          </span>

          <div className="nav-icons">
            <a href="https://www.youtube.com/@marcoktwitch" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.tv/marcok" target="_blank">
              <FaTwitch />
            </a>
            <a href="https://www.tiktok.com/@marcokontwitch" target="_blank">
              <FaTiktok />
            </a>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;