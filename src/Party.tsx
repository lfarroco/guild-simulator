import { Hero, randomHero } from "./Hero";
import { Entity } from "./Models";

export type Party = {
  _type: "Party";
  id: number;
  name: string;
  members: Hero[];
};

const randomParty = (): Party => {
  return {
    _type: "Party",
    id: Math.random(),
    name: "Party " + Math.floor(Math.random() * 100),
    members: Array.from({ length: 5 }, randomHero),
  };
};

export const partySection = {
  id: 2,
  name: "Parties",
  items: Array.from({ length: 20 }, randomParty) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return (
      <div key={item.id}>
        {item.name}
        <div>{item.quantity}</div>
      </div>
    );
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return (
      <div key={item.id}>
        {item.name}
        <div>{item.quantity}</div>
      </div>
    );
  },
};
