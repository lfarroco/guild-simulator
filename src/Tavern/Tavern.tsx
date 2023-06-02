import React from "react";
import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Hero, randomHero, hero } from "../Hero/Hero";
import * as State from "../State";

// TODO: use a vertical list view, listing the hero details

export const tavernPool = [
  hero("Makral", 1, "Fighter", "assets/human_male_fighter.png"),
  hero("Lydia", 1, "Rogue", "assets/human_female_rogue.png"),
];

export const tavernSection = {
  id: "tavern",
  name: "Tavern",
};

export const TavernBrowser = () => {
  const { tavern, setTavern, heroes, setHeroes, setGold, gold } = useContext(
    State.State
  );

  const [selectedEntity, setSelectedEntity] = React.useState(
    null as null | Hero
  );

  const onRecruit = (hero: Hero) => {
    setTavern(tavern.filter((h) => h.id !== hero.id));
    setHeroes([...heroes, hero]);
    setGold(gold - 100);
    setSelectedEntity(null);
  };

  return (
    <>
      <div id="hero-browser" className="row">
        {tavern.map((hero) => {
          const classes = [
            "col-sm-1 col-2",
            selectedEntity?.id === hero.id ? "active" : null,
          ].filter((a) => a !== null);
          return (
            <div
              className={classes.join(" ")}
              onClick={() => setSelectedEntity(hero)}
              key={hero.id}
            >
              {listRenderer(hero)}
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
          {selectedEntity !== null &&
            itemRenderer(selectedEntity, gold, onRecruit)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedEntity(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function listRenderer(hero: Hero) {
  return <img src={hero.picture} className="icon-sm" />;
}

function itemRenderer(
  hero: Hero,
  gold: number,
  onRecruit: { (hero: Hero): void; (arg0: Hero): void }
) {
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
        </div>
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
    </div>
  );
}
