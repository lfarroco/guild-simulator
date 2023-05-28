import { useContext, useState } from "react";
import { State } from "./State";

export type Item = {
  _type: "Item";
  id: number;
  name: string;
  quantity: number;
  picture: string;
};

const randomItem = (): Item => {
  return {
    _type: "Item",
    id: Math.random(),
    name: "Item " + Math.floor(Math.random() * 100),
    picture: "",
    quantity: Math.floor(Math.random() * 100),
  };
};

const item = (name: string, quantity: number): Item => {
  return {
    _type: "Item",
    id: Math.random(),
    name,
    quantity,
    picture: "assets/red_potion.png",
  };
};

export const itemsSection = {
  id: "items",
  name: "Items",
  items: [item("Red Potion", 1), item("Blue Potion", 1)],
};

export const ItemsBrowser = () => {
  const { items } = useContext(State);

  const [selectedEntity, setSelectedEntity] = useState(items[0]);

  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {items.map((item) => {
            const classes = [
              "list-group-item",
              selectedEntity.id === item.id ? "active" : null,
            ].filter((a) => a !== null);
            return (
              <div
                className={classes.join(" ")}
                onClick={() => setSelectedEntity(item)}
                key={item.id}
              >
                {listRenderer(item)}
              </div>
            );
          })}
        </div>
      </div>
      <div id="content" className="col" key="content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedEntity.name}</h5>
            {itemRenderer(selectedEntity)}
          </div>
        </div>
      </div>
    </div>
  );
};

function listRenderer(item: Item) {
  return (
    <div key={item.id} className="row">
      <div className="col-3">
        <img src="assets/red_potion.png" className="icon-sm" />
      </div>
      <div className="col">{item.name}</div>
    </div>
  );
}

function itemRenderer(item: Item) {
  return (
    <div>
      {item.name} x {item.quantity}
    </div>
  );
}
