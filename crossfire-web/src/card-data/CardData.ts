import Card from "../Card";
import cardData from "./card-data.json";

class CardPack {
  id?: string;
  name?: string;
  cards?: Card[];
}

class SearchResult {
  id: string;
  value: string;

  constructor(id: string, value: string) {
    this.id = id;
    this.value = value;
  }
}

export default class CardData {
  private data: CardPack[] = cardData;

  public getPackList() {
    let result: SearchResult[] = [];
    this.data.forEach((pack) =>
      result.push(new SearchResult(pack.id!, pack.name!))
    );
    return result;
  }

  public getCardsForPackId(id: string): Card[] | undefined {
    const pack = this.data.filter((pack) => pack.id === id)[0];

    return pack.cards;
  }
}
