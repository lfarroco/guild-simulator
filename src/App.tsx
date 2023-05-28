import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { heroesSection } from "./Hero/Hero";
import { Header } from "./Header";
import * as State from "./State";
import { itemsSection } from "./Item";
import * as Tavern from "./Tavern/Tavern";
import { questsSection } from "./Quests";
import { worldSection } from "./World";
import {Router} from "./Router";

function App() {
  const [heroes, setHeroes] = React.useState(heroesSection.items);
  const [tavern, setTavern] = React.useState(Tavern.tavernSection.items);
  const [turn, setTurn] = React.useState(0);
  const [gold, setGold] = React.useState(0);
  const [sections, setSections] = React.useState([
    heroesSection.id,
    itemsSection.id,
    Tavern.tavernSection.id,
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
    tavern,
    setTavern,
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

export default App;
