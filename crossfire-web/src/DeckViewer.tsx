import Card from "./Card";

type DeckViewerProps = {
  deckName?: string;
};

const DeckViewer: React.FC<DeckViewerProps> = (props) => {
  let deck: Card[] = require("./card-data/" + props.deckName + ".json");

  return (
    <div>
      {deck.map((card) => (
        <img
          key={card.number}
          src={
            "/img/cards/" +
            props.deckName +
            "/" +
            card.number?.padStart(3, "0") +
            ".jpg"
          }
          alt="logo"
        />
      ))}
    </div>
  );
};

export default DeckViewer;
