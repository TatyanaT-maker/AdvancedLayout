import React from "react"
// import react-dom from "react-dom"
import './App.css';
import AgendaList from "./Components/AgendaList";
import VideoRender from "./Components/VideoRend";
import HeaderTitles from "./Components/HeaderTitles";
import Icons from "./Components/Icons";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="body">
      <HeaderTitles />
      <div className="styles_body">
        <Icons />
      <VideoRender />
        <AgendaList />
        <Footer />
      </div>
    </div>






  );
}

export default App;