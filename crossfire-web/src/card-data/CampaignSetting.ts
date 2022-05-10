enum CampaignSetting {
  ForgottenRealms = 1,
}

export class CampaignSettingUtil {
  public static toString(campaignSetting: CampaignSetting): string {
    switch (campaignSetting) {
      case CampaignSetting.ForgottenRealms:
        return "Forgotten Realms";
      default:
        return "Unknown";
    }
  }
}

export default CampaignSetting;
