export default class Card {
  pack?: string;
  number?: string;
  level?: string;
  name?: string;
  text?: string;
  rarity?: string;
  campaign?: string;
  type?: string;
  tags?: string[];
}

export class CardUtil {
  public static getCampaignSettingName(card: Card): string {
    if (card.tags && card.tags.length > 0) {
      return card.tags[0];
    }
    return "UNKNOWN";
  }
}
