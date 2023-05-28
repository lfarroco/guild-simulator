import React from "react";
import { Entity } from "../Models";

export const useHeroes = (initial:Entity[]) => {
  const [heroes, setHeroes] = React.useState(initial);

  return {
    heroes,
    setHeroes,
  };
};

type HeroAction =
  | { _type: "Idle" }
  | { _type: "Leveling"; target: string }
  | { _type: "Harvest"; target: string };

export type Hero = {
  _type: "Hero";
  id: number;
  name: string;
  lvl: number;
  currentAction: HeroAction;
};

export const randomHero = (): Hero => {
  return {
    _type: "Hero",
    id: Math.random(),
    name: "Hero " + Math.floor(Math.random() * 100),
    lvl: 1,
    currentAction: { _type: "Idle" },
  };
};

export const heroesSection = {
  id: "heroes",
  name: "Heroes",
  items: Array.from({ length: 3 }, randomHero) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return listRenderer(item);
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return itemRenderer(item);
  },
};

function listRenderer(hero: Hero) {
  return (
    <div key={hero.id}>
      {hero.name} - {hero.lvl}
    </div>
  );
}

function itemRenderer(hero: Hero) {
  return (
    <div key={hero.id}>
      <table className="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td> {hero.name} </td>
          </tr>
          <tr>
            <td>Level</td>
            <td>{hero.lvl}</td>
          </tr>
          <tr>
            <td>Current Action</td>
            <td>{hero.currentAction._type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function HeroBrowser({}) {
  const {heroes} = useHeroes(heroesSection.items)
  const [selectedEntity, setSelectedEntity] = React.useState(
    heroesSection.items[0]
  );
  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {heroes.map((entity) => {
            const classes = [
              "list-group-item",
              selectedEntity.id === entity.id ? "active" : null,
            ].filter((a) => a !== null);
            return (
              <div
                className={classes.join(" ")}
                onClick={() => setSelectedEntity(entity)}
                key={entity.id}
              >
                {heroesSection.listRenderer(entity)}
              </div>
            );
          })}
        </div>
      </div>
      <div id="content" className="col" key="content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedEntity.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
