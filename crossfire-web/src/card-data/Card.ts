import CampaignSetting, { CampaignSettingUtil } from "./CampaignSetting";

export default class Card {
  pack?: string;
  number?: string;
  level?: string;
  typeCode?: string;
  campaignSettingCode?: string;
  isAvatar?: string;
  name?: string;
  text?: string;
  rarity?: string;
  tags?: string[];
}

export class CardUtil {
  public static getCampaignSetting(card: Card): CampaignSetting {
    return +card.campaignSettingCode!;
  }

  public static getCampaignSettingName(card: Card): string {
    if (card.tags && card.tags.length > 0) {
      return card.tags[0];
    }
    return "UNKNOWN";
  }
}
