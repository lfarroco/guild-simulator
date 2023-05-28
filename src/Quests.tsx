import {Entity} from "./Models";

export type Quest = {
  _type: "Quest";
  id: string;
  name: string;
};

const randomQuest = (): Quest => {
  return {
    _type: "Quest",
    id: Math.random().toString(),
    name: "Quest " + Math.floor(Math.random() * 100),
  };
};

export const questsSection = {
  id: "quests",
  name: "Quests",
  items: Array.from({ length: 10 }, randomQuest) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Quest") return null;
    return (
      <div key={item.id}>
          {item.name}
      </div>
    );
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Quest") return null;
    return (
      <div key={item.id}>
          {item.name}
      </div>
    );
  },
};
