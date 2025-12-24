export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const SITE_URL = "https://universaltowerdefense.app";
export const SITE_NAME = "Universal Tower Defense";

export const ROBLOX_GAME_URL =
  "https://www.roblox.com/games/133410800847665/Universal-Tower-Defense";

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", description: "Main hub & quick start" },
  {
    href: "/universal-tower-defense-calculator",
    label: "Calculator",
    description: "DPS + damage planning",
  },
  {
    href: "/universal-tower-defense-codes",
    label: "Codes",
    description: "Working + expired archive",
  },
  {
    href: "/universal-tower-defense-tier-list",
    label: "Tier List",
    description: "Best units by role",
  },
  {
    href: "/universal-tower-defense-guide",
    label: "Guide",
    description: "Beginner + progression tips",
  },
  {
    href: "/universal-tower-defense-wiki",
    label: "Wiki",
    description: "Units, summons, systems",
  },
];
