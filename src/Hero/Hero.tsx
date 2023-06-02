import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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

type HeroJob = "Fighter" | "Rogue" | "Cleric" | "Wizard" | "Archer";

export type Hero = {
  _type: "Hero";
  job: HeroJob;
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
    job: "Fighter",
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
};

export const hero = (
  name: string,
  lvl: number,
  job: HeroJob,
  picture: string
): Hero => {
  return {
    _type: "Hero",
    id: Math.random().toString(),
    name,
    job,
    xp: 0,
    lvl,
    currentAction: { _type: "Idle" },
    picture,
  };
};

export const defaultHeroes = [
  hero("Khastan", 1, "Fighter", "assets/knight.png"),
  hero("Melissa", 1, "Rogue", "assets/rogue1.png"),
  hero("Prishnak", 1, "Cleric", "assets/goblin_cleric.png"),
];

function listRenderer(hero: Hero) {
  return <img src={hero.picture} className="icon-sm" />;
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
    null as null | Hero
  );
  return (
    <>
      <div id="hero-browser" className="row">
        {state.heroes.map((entity) => {
          const classes = [
            "col-sm-1 col-2",
            selectedEntity?.id === entity.id ? "active" : null,
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
      <Modal
        show={selectedEntity !== null}
        onHide={() => setSelectedEntity(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hero Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEntity !== null && itemRenderer(selectedEntity)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedEntity(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
