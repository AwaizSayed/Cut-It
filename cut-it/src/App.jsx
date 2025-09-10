import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UrlShortner from "./component/UrlShortner";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-1 pt-3 pb-3" style={{ fontWeight: "bold" }}>
        Cut-It(short your URL)
      </h1>
      <UrlShortner />
      <Footer />
    </>
  );
}

export default App;
