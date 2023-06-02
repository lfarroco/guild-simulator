import React, { Dispatch } from "react";
import { Hero } from "./Hero/Hero";
import {Item} from "./Item";
import { Quest } from "./Quests";
import {Region} from "./World";

export const initialState = {
  heroes: [] as Hero[],
  setHeroes: (null as unknown) as Dispatch<React.SetStateAction<Hero[]>>,
  quests: [] as Quest[],
  setQuests: (null as unknown) as Dispatch<React.SetStateAction<Quest[]>>,
  items: [] as Item[],
  setItems: (null as unknown) as Dispatch<React.SetStateAction<Item[]>>,
  regions: [] as Region[],
  setRegions: (null as unknown) as Dispatch<React.SetStateAction<Region[]>>,
  sections: [] as string[],
  tavern: [] as Hero[],
  setTavern: (null as unknown) as Dispatch<React.SetStateAction<Hero[]>>,
  setSections: (null as unknown) as Dispatch<React.SetStateAction<string[]>>,
  turn: 0,
  setTurn: (null as unknown) as Dispatch<React.SetStateAction<number>>,
  gold: 0,
  setGold: (null as unknown) as Dispatch<React.SetStateAction<number>>,
  currentSection: "",
  setCurrentSection: (null as unknown) as Dispatch<
    React.SetStateAction<string>
  >,
};

export const State = React.createContext(initialState);
