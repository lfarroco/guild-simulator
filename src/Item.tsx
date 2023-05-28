import { Entity } from "./Models";

export type Item = {
  _type: "Item";
  id: number;
  name: string;
  quantity: number;
};

const randomItem = (): Item => {
  return {
    _type: "Item",
    id: Math.random(),
    name: "Item " + Math.floor(Math.random() * 100),
    quantity: Math.floor(Math.random() * 100),
  };
};

export const itemsSection = {
  id: "items",
  name: "Items",
  items: Array.from({ length: 10 }, randomItem) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return <div key={item.id}>{item.name}</div>;
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return (
      <div>
        {item.name}
        <div>{item.quantity}</div>
      </div>
    );
  },
};
