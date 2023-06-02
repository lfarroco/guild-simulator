import { Item, monsterLoot } from "./Item";

type MobType = { _type: "mob" };

export type Mob = {
  id: string;
  name: string;
  picture: string;
  lvl: number;
  loot: { item: Item; chance: number }[];
  _type: MobType;
};

const makeMob = (
  id: string,
  name: string,
  lvl: number,
  loot: { item: Item; chance: number }[]
) => ({
  id,
  name,
  picture: "assets/placeholder.png",
  lvl,
  loot,
  _type: { _type: "mob" },
});

export const mobs = {
  goblin: makeMob("goblin", "Goblin", 1, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  rat: makeMob("rat", "Rat", 1, [{ item: monsterLoot.bones, chance: 1 }]),
  bear: makeMob("bear", "Bear", 5, [{ item: monsterLoot.bones, chance: 1 }]),
  unicorn: makeMob("unicorn", "Unicorn", 15, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  scorpion: makeMob("scorpion", "Scorpion", 14, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  spider: makeMob("spider", "Spider", 1, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  skeleton: makeMob("skeleton", "Skeleton", 1, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  zombie: makeMob("zombie", "Zombie", 1, [
    { item: monsterLoot.bones, chance: 1 },
  ]),
  imp: makeMob("imp", "Imp", 1, [{ item: monsterLoot.bones, chance: 1 }]),
  wolf: makeMob("wolf", "Wolf", 1, [{ item: monsterLoot.bones, chance: 1 }]),
  snake: makeMob("snake", "Snake", 1, [{ item: monsterLoot.bones, chance: 1 }]),
} as { [id: string]: Mob };
