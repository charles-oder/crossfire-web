import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import "./App.css";
import DeckViewer from "./DeckViewer";
import CardData from "./card-data/CardData";

function App() {
  const [deckName, setDeckName] = useState("1st");
  const cardData = new CardData();
  let deck = cardData.getCardsForPackId(deckName);

  if (!deck) {
    deck = [];
  }

  const handleDeckChange = (event: SelectChangeEvent<string>) => {
    setDeckName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Select value={deckName} onChange={handleDeckChange}>
          {cardData.getPackList().map((searchResult) => (
            <MenuItem value={searchResult.id}>{searchResult.value}</MenuItem>
          ))}
        </Select>
        <DeckViewer deck={deck} />
      </header>
    </div>
  );
}

export default App;
