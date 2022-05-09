import Card from "./Card";
import CardView from "./CardView";

type DeckViewerProps = {
  deck: Card[];
};

const DeckViewer: React.FC<DeckViewerProps> = (props) => {
  return (
    <div>
      {props.deck.map((card) => (
        <CardView card={card} />
      ))}
    </div>
  );
};

export default DeckViewer;
