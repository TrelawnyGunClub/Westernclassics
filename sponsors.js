/* Sponsor logos for the sponsor board.
   To add a sponsor:
   1. Upload the logo to the assets/sponsors folder (PNG or JPG, about 600 px wide, under 150 KB).
   2. Add one line below, then save. Each line takes the next open slot in its tier.
      tier: "title", "gold", "silver" or "station"
      url:  the sponsor's website or Instagram page. Leave it as "" for no link. */
const SPONSORS = [
  { tier: "station", name: "Super Squad", logo: "assets/sponsors/super-squad.png", url: "" },
  // { tier: "gold", name: "Company name", logo: "assets/sponsors/company.png", url: "https://example.com" },
];
