import React from "react";
import "./App.css";
import SongDetails from "./components/SongDetails";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="container">
      <SongList />
      <SongDetails />
    </div>
  );
}

export default App;
