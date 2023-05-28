type MobType = { _type: "mob" };

export type Loot = {
  id: string;
  name: string;
};

export type Mob = {
  id: string;
  name: string;
  lvl: number;
  loot: { item: Loot; chance: number }[];
  _type: MobType;
};

const makeMob = (id: string, name: string, lvl: number, loot: { item: Loot; chance: number }[]) => ({
  id,
  name,
  lvl,
  loot,
  _type: { _type: "mob" },
});

export const mobs = [
  makeMob("goblin", "Goblin", 1, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("rat", "Rat", 1, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("bear", "Bear", 5, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("unicorn", "Unicorn", 15, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("scorpion", "Scorpion", 14, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("spider", "Spider", 1, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("skeleton", "Skeleton", 1, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
  makeMob("ghost", "Ghost", 1, [{ item: { id: "bones", name: "Bones" }, chance: 1 }]),
]
