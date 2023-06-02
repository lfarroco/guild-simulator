import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Hero from "./Hero/Hero";
import { Header } from "./Header";
import * as State from "./State";
import { itemsSection } from "./Item";
import * as Tavern from "./Tavern/Tavern";
import { questsSection } from "./Quests";
import * as World from "./World";
import { Router } from "./Router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function App() {
  const [heroes, setHeroes] = React.useState(Hero.defaultHeroes);
  const [tavern, setTavern] = React.useState(Tavern.tavernPool);
  const [quests, setQuests] = React.useState(questsSection.items);
  const [items, setItems] = React.useState(itemsSection.items);
  const [regions, setRegions] = React.useState(World.regions);
  const [turn, setTurn] = React.useState(0);
  const [gold, setGold] = React.useState(0);
  const [sections, setSections] = React.useState([
    Hero.heroesSection.id,
    itemsSection.id,
    Tavern.tavernSection.id,
    questsSection.id,
    World.worldSection.id,
  ]);
  const [currentSection, setCurrentSection] = React.useState(
    Hero.heroesSection.id
  );
  const nextTurn = () => {
    const newGold = heroes.length * 100;
    setGold(gold + newGold);
    setTurn(turn + 1);

    setQuests(
      quests.map((quest) => {
        if (quest.status === "inProgress") {
          return {
            ...quest,
            progress: quest.progress + 1,
            status:
              quest.progress + 1 >= quest.turns ? "completed" : "inProgress",
          };
        } else return quest;
      })
    );
  };

  const state = {
    heroes,
    setHeroes,
    items,
    setItems,
    regions,
    setRegions,
    quests,
    setQuests,
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
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container>
          <Button
            onClick={() => nextTurn()}
          >
            Next Turn
          </Button>
        </Container>
      </Navbar>
    </State.State.Provider>
  );
}

export default App;
