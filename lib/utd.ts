export type CodeStatus = "New" | "Active";

export type ActiveCode = {
  code: string;
  reward: string;
  status: CodeStatus;
  added?: string;
  note?: string;
};

export type ArchivedCode = {
  code: string;
  reward: string;
};

export const lastUpdated = "December 24, 2025";

export const codesSourceUrl =
  "https://universaltowerdefensegame.com/universal-tower-defense-codes";

export const codesLastChecked = "December 24, 2025";

export const activeCodes: ActiveCode[] = [
  {
    code: "FixingBugs!",
    reward: "450 Gems, 25 Trait Rerolls",
    status: "New",
    note: "Featured as NEW on the source list.",
  },
  { code: "75kLikes!", reward: "400 Gems, 10 Trait Rerolls", status: "Active" },
  { code: "NumberOne!", reward: "500 Gems, 15 Trait Rerolls", status: "Active" },
  { code: "Universal!", reward: "450 Gems, 15 Trait Rerolls", status: "Active" },
  { code: "Mainstream!", reward: "450 Gems, 15 Trait Rerolls", status: "Active" },
  { code: "ThankYouUTD!", reward: "400 Gems, 5 Trait Rerolls", status: "Active" },
  { code: "40kCCU!", reward: "4,000 Gems, 40 Trait Rerolls", status: "Active" },
  { code: "THANKYOU!", reward: "400 Gems", status: "Active" },
  { code: "RELEASE!", reward: "400 Gems", status: "Active" },
  { code: "UNRIVALED!", reward: "200 Gems, 5 Trait Rerolls", status: "Active" },
];

export const expiredCodes: ArchivedCode[] = [
  { code: "SorryEA!", reward: "Gems" },
  { code: "SorryEA2!", reward: "Gems" },
  { code: "ThankYouEA!", reward: "Gems" },
];

export const redeemSteps = [
  {
    title: "Open Universal Tower Defense",
    detail: "Launch UTD on Roblox and wait for the main lobby to load fully.",
  },
  {
    title: "Open the Codes menu",
    detail: "Look for the Codes button/menu option in the UI (usually in the lobby).",
  },
  {
    title: "Paste the code exactly",
    detail: "Codes are case-sensitive. Avoid extra spaces before/after the code.",
  },
  {
    title: "Redeem and check rewards",
    detail: "Redeem the code, then confirm Gems / Trait Rerolls / rewards were added.",
  },
];

export const troubleshooting = [
  {
    title: "“Invalid code” / “Code not found”",
    detail:
      "The code has likely expired or was typed with an extra space. Copy-paste and remove trailing spaces.",
  },
  {
    title: "Redeem button does nothing",
    detail:
      "Rejoin a fresh server or restart Roblox. Some updates require a new server instance.",
  },
  {
    title: "Already redeemed",
    detail:
      "Most UTD codes are one-time per account. If you redeemed it before, it will not work again.",
  },
];

export const summonRates = [
  { rarity: "Common", chance: "80%", colorClass: "bg-zinc-500" },
  { rarity: "Rare", chance: "17%", colorClass: "bg-emerald-500" },
  { rarity: "Epic", chance: "2.5%", colorClass: "bg-sky-500" },
  { rarity: "Mythic", chance: "0.4%", colorClass: "bg-red-500" },
  { rarity: "Secret", chance: "0.1%", colorClass: "bg-violet-600" },
];

export const howToObtainUnits = [
  {
    title: "Standard Summons",
    detail: "Use Gems to summon units. Typical pricing: 50 Gems (1x), 450 Gems (10x).",
  },
  {
    title: "Special Banners",
    detail:
      "Special banners increase odds for specific units. Some banners may require account level milestones (e.g., Level 10+).",
  },
  {
    title: "Quests & Challenges",
    detail:
      "Complete quests and event challenges for unique units and materials. Some units are tied to limited-time activities.",
  },
];

export const homeFaq = [
  {
    q: "What is Universal Tower Defense (UTD)?",
    a: "Universal Tower Defense (UTD) is a Roblox tower defense game focused on collecting units, building efficient teams, and clearing waves with smart placement and upgrade timing.",
  },
  {
    q: "Where do I find working UTD codes?",
    a: "Use the Codes page on this site. We keep a working section and an expired archive so you can avoid wasting time on dead codes.",
  },
  {
    q: "What do UTD codes usually give?",
    a: "Codes commonly reward Gems, Trait Rerolls, and other limited-time boosts. Rewards and availability can change quickly after updates.",
  },
  {
    q: "What should I read after redeeming codes?",
    a: "Start with the Tier List to understand which units are worth investing in, then use the Calculator to plan upgrades and compare DPS.",
  },
];

export const moreTools = [
  {
    href: "/universal-tower-defense-team-builder",
    title: "Team Builder",
    description:
      "Plan a 6-slot team with roles, notes, and a shareable summary for your next run.",
  },
  {
    href: "/universal-tower-defense-upgrade-cost",
    title: "Upgrade Cost",
    description:
      "Estimate total upgrade cost with simple growth models to compare upgrade paths.",
  },
  {
    href: "/universal-tower-defense-weapon-tier-list",
    title: "Weapon Tier List",
    description:
      "A practical tier framework for weapon-style progression (mode-dependent).",
  },
];

export type UnitRole = "DPS" | "Support" | "Crowd Control" | "Hybrid" | "Economy";
export type UnitRarity = "Common" | "Rare" | "Epic" | "Mythic" | "Secret" | "Unknown";

export type UTDUnit = {
  name: string;
  role: UnitRole;
  rarity: UnitRarity;
  obtain: string;
  notes: string;
  tags: string[];
};

export const unitShowcase: UTDUnit[] = [
  {
    name: "Kenpachi",
    role: "DPS",
    rarity: "Mythic",
    obtain: "Standard summons (banner-dependent)",
    notes: "High-end DPS example often mentioned as a top banner target.",
    tags: ["DPS", "Banner"],
  },
  {
    name: "Kirito",
    role: "DPS",
    rarity: "Mythic",
    obtain: "Standard summons (banner-dependent)",
    notes: "Strong DPS example; prioritize if your roster lacks late-wave scaling.",
    tags: ["DPS", "Scaling"],
  },
  {
    name: "Sasuke",
    role: "DPS",
    rarity: "Mythic",
    obtain: "Standard summons (banner-dependent)",
    notes: "Popular mythic-tier example; value depends on mode and upgrades.",
    tags: ["DPS"],
  },
  {
    name: "Jinwoo",
    role: "DPS",
    rarity: "Secret",
    obtain: "Special banners (some may require Level 10+)",
    notes: "Ultra-rare example unit; chase only with a planned Gems budget.",
    tags: ["Ultra-rare", "Banner"],
  },
  {
    name: "Ragna",
    role: "DPS",
    rarity: "Secret",
    obtain: "Featured challenges / event methods",
    notes: "Ultra-rare example unit; often tied to challenge/event progression.",
    tags: ["Ultra-rare", "Event"],
  },
  {
    name: "Lelouch",
    role: "Support",
    rarity: "Unknown",
    obtain: "Quests",
    notes: "Example quest unit; supports teams that already have enough damage.",
    tags: ["Utility", "Quest"],
  },
  {
    name: "Sakiya (Scarlet Maid)",
    role: "Crowd Control",
    rarity: "Unknown",
    obtain: "Virtual Shop (availability rotates)",
    notes: "Example shop unit; valued for utility in longer modes.",
    tags: ["Utility", "Shop"],
  },
];
