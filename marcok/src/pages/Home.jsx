import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Twitch from "../components/Twitch";
import Videos from "../components/Videos";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Twitch />
      <Videos />
    </>
  );
}

export default Home;