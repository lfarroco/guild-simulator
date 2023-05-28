import React, { Dispatch } from "react";
import { heroesSection } from "./Hero/Hero";
import { itemsSection } from "./Item";
import { tavernSection } from "./Tavern";
import { questsSection } from "./Quests";
import { worldSection } from "./World";
import { Entity } from "./Models";

export const initialState = {
  heroes: heroesSection.items,
  setHeroes: (null as unknown) as Dispatch<React.SetStateAction<Entity[]>>,
  sections: [
    heroesSection.id,
    itemsSection.id,
    tavernSection(() => {}).id,
    questsSection.id,
    worldSection.id,
  ],
  setSections: (null as unknown) as Dispatch<React.SetStateAction<string[]>>,
  turn: 0,
  setTurn: (null as unknown) as Dispatch<React.SetStateAction<number>>,
  gold: 100,
  setGold: (null as unknown) as Dispatch<React.SetStateAction<number>>,
  currentSection: heroesSection.id,
  setCurrentSection: (null as unknown) as Dispatch<
    React.SetStateAction<string>
  >,
};

export const State = React.createContext(initialState);
