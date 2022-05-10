import { Tooltip } from "@mui/material";
import Card from "./card-data/Card";

type CardViewProps = {
  card: Card;
};

const CardView: React.FC<CardViewProps> = (props) => {
  return (
    <Tooltip
      key={props.card.number}
      title={
        "" +
        props.card.name +
        ": " +
        props.card.text +
        "[" +
        props.card.tags +
        "]"
      }
    >
      <img
        style={{ width: 200, padding: 5 }}
        src={
          "https://raw.githubusercontent.com/charles-oder/crossfire-web/master/crossfire-web/public/img/cards/" +
          props.card.pack +
          "/" +
          props.card.number?.padStart(3, "0") +
          ".jpg"
        }
        alt={props.card.name}
      />
    </Tooltip>
  );
};

export default CardView;
