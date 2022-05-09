import {
  createTheme,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import DeckViewer from "./DeckViewer";

function App() {
  const [deckName, setDeckName] = useState("1st");

  const handleDeckChange = (event: SelectChangeEvent<string>) => {
    setDeckName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Select value={deckName} onChange={handleDeckChange}>
          <MenuItem value="1st">First Edition</MenuItem>
          <MenuItem value="2nd">Second Edition</MenuItem>
          <MenuItem value="3rd">Third Edition</MenuItem>
          <MenuItem value="4th">Fourth Edition</MenuItem>
          <MenuItem value="AR">Artifacts</MenuItem>
          <MenuItem value="BR">Birthright</MenuItem>
          <MenuItem value="CH">Chaos</MenuItem>
          <MenuItem value="CQ">Conquest</MenuItem>
          <MenuItem value="DE">German Edition</MenuItem>
          <MenuItem value="DL">DragonLance</MenuItem>
          <MenuItem value="DR">Draconomicon</MenuItem>
          <MenuItem value="DU">Dungeons</MenuItem>
          <MenuItem value="FR">Forgotten Realms</MenuItem>
          <MenuItem value="IQ">Inquisition</MenuItem>
          <MenuItem value="MI">Millennium</MenuItem>
          <MenuItem value="NO">No Edition</MenuItem>
          <MenuItem value="NS">Night Stalkers</MenuItem>
          <MenuItem value="PO">Powers</MenuItem>
          <MenuItem value="PR">Promo</MenuItem>
          <MenuItem value="RL">Ravenloft</MenuItem>
          <MenuItem value="RR">Runes & Ruins</MenuItem>
          <MenuItem value="UD">The Underdark</MenuItem>
        </Select>
        <DeckViewer deckName={deckName} />
      </header>
    </div>
  );
}

export default App;
