import React from "react";
import { useContext } from "react";
import { Hero, randomHero } from "../Hero/Hero";
import * as State from "../State";

export const tavernSection = {
  id: "tavern",
  name: "Tavern",
  items: Array.from({ length: 10 }, randomHero) as Hero[],
};

export const TavernBrowser = () => {
  const { tavern, setTavern, heroes, setHeroes, setGold, gold } = useContext(
    State.State
  );

  const [selectedEntity, setSelectedEntity] = React.useState(
    tavernSection.items[0]
  );

  const onRecruit = (hero: Hero) => {
    setTavern(tavern.filter((h) => h.id !== hero.id));
    setHeroes([...heroes, hero]);
    setGold(gold - 100);
    setSelectedEntity(tavern[0]);
  };

  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {tavern.map((entity) => {
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
                {listRenderer(entity)}
              </div>
            );
          })}
        </div>
      </div>
      <div id="content" className="col" key="content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedEntity.name}</h5>
            {itemRenderer(selectedEntity, gold, onRecruit)}
          </div>
        </div>
      </div>
    </div>
  );
};

function listRenderer(hero: Hero) {
  return (
    <div key={hero.id}>
      {hero.name} - {hero.lvl}
    </div>
  );
}

function itemRenderer(
  hero: Hero,
  gold: number,
  onRecruit: { (hero: Hero): void; (arg0: Hero): void }
) {
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
      <button
        className="btn btn-primary"
        disabled={gold < 100}
        onClick={() => {
          onRecruit(hero);
        }}
      >
        Recruit 100 gold
      </button>
    </div>
  );
}
