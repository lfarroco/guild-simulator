import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeroBrowser, heroesSection } from "./Hero/Hero";
import { Header } from "./Header";
import * as State from "./State";
import { itemsSection } from "./Item";
import { tavernSection } from "./Tavern";
import { questsSection } from "./Quests";
import { worldSection } from "./World";

function App() {
  const [heroes, setHeroes] = React.useState(heroesSection.items);
  const [turn, setTurn] = React.useState(0);
  const [gold, setGold] = React.useState(0);
  const [sections, setSections] = React.useState([
    heroesSection.id,
    itemsSection.id,
    tavernSection(() => {}).id,
    questsSection.id,
    worldSection.id,
  ]);
  const [currentSection, setCurrentSection] = React.useState(heroesSection.id);
  const nextTurn = () => {
    const newGold = heroesSection.items.length * 100;
    setGold(gold + newGold);
    setTurn(turn + 1);
  };

  const state = {
    heroes,
    setHeroes,
    turn,
    setTurn,
    gold,
    setGold,
    sections,
    setSections,
    currentSection,
    setCurrentSection,
  };

  return (
    <State.State.Provider value={state}>
      <Header />
      <div className="container">
        <Router />
      </div>
      <footer
        className="footer mt-auto py-3 bg-light"
        style={{ minHeight: 100 }}
      >
        <div className="container">
          <button
            className="btn btn-primary float-end"
            onClick={() => nextTurn()}
          >
            Next Turn
          </button>
        </div>
      </footer>
    </State.State.Provider>
  );
}

const Router = () => {
  const { currentSection } = React.useContext(State.State);
  if (currentSection === "heroes") {
    return <HeroBrowser />;
  } else {
    return null;
  }
};

export default App;
