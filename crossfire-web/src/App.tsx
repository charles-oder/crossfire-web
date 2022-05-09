import React, { ChangeEvent, Fragment, useState } from "react";
import "./App.css";
import DeckViewer from "./DeckViewer";

function App() {
  const [deckName, setDeckName] = useState("1st");

  const handleDeckChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected: " + event.target.value);
    setDeckName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <select value={deckName} onChange={handleDeckChange}>
          <option value="1st">First Edition</option>
          <option value="2nd">Second Edition</option>
          <option value="3rd">Third Edition</option>
          <option value="4th">Fourth Edition</option>
          <option value="AR">Artifacts</option>
          <option value="BR">Birthright</option>
          <option value="CH">Chaos</option>
          <option value="CQ">Conquest</option>
          <option value="DE">German Edition</option>
          <option value="DL">DragonLance</option>
          <option value="DR">Draconomicon</option>
          <option value="DU">Dungeons</option>
          <option value="FR">Forgotten Realms</option>
          <option value="IQ">Inquisition</option>
          <option value="MI">Millennium</option>
          <option value="NO">No Edition</option>
          <option value="NS">Night Stalkers</option>
          <option value="PO">Powers</option>
          <option value="PR">Promo</option>
          <option value="RL">Ravenloft</option>
          <option value="RR">Runes & Ruins</option>
          <option value="UD">The Underdark</option>
        </select>
        <DeckViewer deckName={deckName} />
      </header>
    </div>
  );
}

export default App;
