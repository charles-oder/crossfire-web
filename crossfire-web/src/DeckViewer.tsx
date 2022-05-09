import { Tooltip } from "@mui/material";
import Card from "./Card";

type DeckViewerProps = {
  deckName?: string;
};

const DeckViewer: React.FC<DeckViewerProps> = (props) => {
  let deck: Card[] = require("./card-data/" + props.deckName + ".json");

  return (
    <div>
      {deck.map((card) => (
        <Tooltip key={card.number} title={"" + card.name + ": " + card.text}>
          <img
            style={{ width: 200, padding: 5 }}
            src={
              "/img/cards/" +
              props.deckName +
              "/" +
              card.number?.padStart(3, "0") +
              ".jpg"
            }
            alt={card.name}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default DeckViewer;
