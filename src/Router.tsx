import React from "react";
import {HeroBrowser} from "./Hero/Hero";
import {TavernBrowser} from "./Tavern/Tavern";
import * as State from "./State";

export const Router = () => {
  const {currentSection} = React.useContext(State.State);
  if (currentSection === "heroes") {
    return <HeroBrowser />;
  } else if (currentSection === "tavern") {
    return <TavernBrowser />;
  } else {
    return null;
  }
};

