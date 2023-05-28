import React, { Dispatch } from "react";
import { Hero } from "./Hero/Hero";

export const initialState = {
  heroes: [] as Hero[],
  setHeroes: (null as unknown) as Dispatch<React.SetStateAction<Hero[]>>,
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
