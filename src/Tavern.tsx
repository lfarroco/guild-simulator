import { Hero, randomHero } from "./Hero/Hero";
import { Entity } from "./Models";

export const tavernSection = (onRecruit: (h: Hero) => void) => {
  return {
    id: "tavern",
    name: "Tavern",
    items: Array.from({ length: 10 }, randomHero) as Entity[],
    listRenderer: (item: Entity) => {
      if (item._type !== "Hero") return null;
      return <div key={item.id}>{item.name}</div>;
    },
    itemRenderer: (item: Entity) => {
      if (item._type !== "Hero") return null;
      return (
        <div>
          <pre>{JSON.stringify(item, null, 2)}</pre>
          <button
            onClick={() => {
              onRecruit(item);
            }}
            className="btn btn-primary"
          >
            Recruit
          </button>
        </div>
      );
    },
  };
};
