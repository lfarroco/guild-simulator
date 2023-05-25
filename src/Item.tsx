import {Entity} from "./Models";

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
  id: 1,
  name: "Items",
  items: Array.from({ length: 20 }, randomItem) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return (
      <div className="row" key={item.id}>
        <img
          className="col-6"
          src="https://static.wikia.nocookie.net/wowpedia/images/c/c2/Inv_potion_51.png"
        />

        <div className="col-6">
          {item.name}
          <div>{item.quantity}</div>
        </div>
      </div>
    );
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Item") return null;
    return (
      <div className="row">
        <img
          className="col-6"
          src="https://static.wikia.nocookie.net/wowpedia/images/c/c2/Inv_potion_51.png"
        />

        <div className="col-6">
          {item.name}
          <div>{item.quantity}</div>
        </div>
      </div>
    );
  },
};
