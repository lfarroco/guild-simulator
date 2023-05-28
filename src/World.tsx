import {Collectable} from "./Collectable";
import {Entity} from "./Models";

type Mob = {
  id: string;
  name: string
}

export type Region = {
  _type: "Region";
  id: number;
  name: string;
  gold: number;
  lvl: number;
  mobs: Mob[];
  collectables: Collectable[];
}


const randomRegion = (): Region => {
  return {
    _type: "Region",
    id: Math.random(),
    name: "Region " + Math.floor(Math.random() * 100),
    gold: Math.floor(Math.random() * 100),
    lvl: Math.floor(Math.random() * 100),
    mobs: [],
    collectables: [],
  };
};

export const worldSection = {
  id: "world",
  name: "World",
  items: Array.from({ length: 10 }, randomRegion) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return (
      <div className="row" key={item.id}>
          {item.name}
      </div>
    );
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return (
      <div className="row">
          {item.name}
      </div>
    );
  },
};
