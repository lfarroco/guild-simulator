import React, { useContext } from "react";
import { State } from "../State";

const pictures = [
  "assets/knight.png",
  "assets/knight1.png",
  "assets/knight2.png",
  "assets/knight3.png",
  "assets/rogue1.png",
  "assets/rogue2.png",
  "assets/rogue3.png",
  "assets/wizard_male.png",
  "assets/wizard_male2.png",
  "assets/sorceress_male.png",
  "assets/necromancer_female.png",
  "assets/archer.png",
];

export const useHeroes = (initial: Hero[]) => {
  const [heroes, setHeroes] = React.useState(initial);

  return {
    heroes,
    setHeroes,
  };
};

type HeroAction =
  | { _type: "Idle" }
  | { _type: "Leveling"; location: string }
  | { _type: "Harvest"; location: string }
  | { _type: "Questing"; quest: string; turns: number };

export type Hero = {
  _type: "Hero";
  id: string;
  name: string;
  lvl: number;
  xp: number;
  currentAction: HeroAction;
  picture: string;
};

export const randomHero = (): Hero => {
  return {
    _type: "Hero",
    id: Math.random().toString(),
    name: "Hero " + Math.floor(Math.random() * 100),
    lvl: 1,
    currentAction: { _type: "Idle" },
    xp: 0,
    picture: pictures[Math.floor(Math.random() * pictures.length)],
  };
};

export const heroesSection = {
  id: "heroes",
  name: "Heroes",
  items: Array.from({ length: 3 }, randomHero) as Hero[],
};

function listRenderer(hero: Hero) {
  return (
    <div key={hero.id} className="row">
      <div className="col-3">
        <img src={hero.picture} className="icon-sm" />
      </div>
      <div className="col">
        {hero.name} - {hero.lvl}
      </div>
    </div>
  );
}

function itemRenderer(hero: Hero) {
  return (
    <div key={hero.id}>
      <div className="row">
        <div className="col-3">
          <img src={hero.picture} className="portrait img img-fluid" />
        </div>

        <div className="col">
          <div className="row">
            <div className="col-4"> Name </div>
            <div className="col"> {hero.name} </div>
          </div>
          <div className="row">
            <div className="col-4"> Level </div>
            <div className="col"> {hero.lvl} </div>
          </div>
          <div className="row">
            <div className="col-4"> XP </div>
            <div className="col-4"> 155/500 </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: hero.xp + "%" }}
                ></div>
              </div>
            </div>
            <div className="col-6">{hero.xp + "%"}</div>
          </div>

          <div className="row">
            <div className="col-4"> Current Action </div>
            <div className="col"> {hero.currentAction._type} </div>
            <div className="col">
              <button className="btn btn-secondary">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroBrowser() {
  const state = useContext(State);

  const [selectedEntity, setSelectedEntity] = React.useState(
    heroesSection.items[0]
  );
  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {state.heroes.map((entity) => {
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
            {itemRenderer(selectedEntity)}
          </div>
        </div>
      </div>
    </div>
  );
}
