import { useContext, useState } from "react";
import { State } from "./State";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export type Item = {
  _type: "Item";
  id: number;
  name: string;
  quantity: number;
  picture: string;
};

const item = (name: string, picture: string): Item => {
  return {
    _type: "Item",
    id: Math.random(),
    name,
    quantity: 1,
    picture,
  };
};

export const itemsSection = {
  id: "items",
  name: "Items",
  items: [
    item("Red Potion", "assets/red_potion.png"),
    item("White Flower", "assets/white_flower.png"),
    item("Red Flower", "assets/red_flower.png"),
  ],
};

export const ItemsBrowser = () => {
  const { items } = useContext(State);

  const [selectedEntity, setSelectedEntity] = useState(null as null | Item);

  return [
    <div className="row" key="content">
      {items.map((item) => {
        const classes = [
          "col-sm-1 col-2",
          selectedEntity?.id === item.id ? "active" : null,
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
    </div>,
    <Modal
      key="modal"
      show={selectedEntity !== null}
      onHide={() => setSelectedEntity(null)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Item Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedEntity !== null && itemRenderer(selectedEntity)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setSelectedEntity(null)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>,
  ];
};

function listRenderer(item: Item) {
  return <img src={item.picture} className="icon-sm" />;
}

function itemRenderer(item: Item) {
  return (
    <div>
      {item.name} x {item.quantity}
    </div>
  );
}

export const monsterLoot = {
  bones: item("Bones", "assets/bones.png"),
  hide: item("Hide", "assets/bones.png"),
  meat: item("Meat", "assets/bones.png"),
  claw: item("Claw", "assets/bones.png"),
}

export const ores = {
  iron: item("Iron", "assets/iron_ore.png"),
  copper: item("Copper", "assets/iron_ore.png"),
  silver: item("Silver", "assets/iron_ore.png"),
  gold: item("Gold", "assets/iron_ore.png"),
  mithril: item("Mithril", "assets/iron_ore.png"),
  adamantite: item("Adamantite", "assets/iron_ore.png"),
  runite: item("Runite", "assets/iron_ore.png"),
} as { [id: string]: Item };

export const herbs = {
  guam: item("Guam", "assets/white_flower.png"),
  marrentill: item("Marrentill", "assets/white_flower.png"),
  tarromin: item("Tarromin", "assets/white_flower.png"),
  harralander: item("Harralander", "assets/white_flower.png"),
  ranarr: item("Ranarr", "assets/white_flower.png"),
  toadflax: item("Toadflax", "assets/white_flower.png"),
  irit: item("Irit", "assets/white_flower.png"),
  avantoe: item("Avantoe", "assets/white_flower.png"),
  kwuarm: item("Kwuarm", "assets/white_flower.png"),
} as { [id: string]: Item };

export const fishes = {
  shrimp: item("shrimp", "assets/fish.png"),
  anchovy: item("anchovy", "assets/fish.png"),
  sardine: item("sardine", "assets/fish.png"),
  herring: item("herring", "assets/fish.png"),
  trout: item("trout", "assets/fish.png"),
  salmon: item("salmon", "assets/fish.png"),
  tuna: item("tuna", "assets/fish.png"),
  lobster: item("lobster", "assets/fish.png"),
  swordfish: item("swordfish", "assets/fish.png"),
  monkfish: item("monkfish", "assets/fish.png"),
  shark: item("shark", "assets/fish.png"),
} as { [id: string]: Item };
