import React from "react";
import { HeroBrowser } from "./Hero/Hero";
import { TavernBrowser } from "./Tavern/Tavern";
import * as State from "./State";
import { QuestBrowser } from "./Quests";
import { ItemsBrowser } from "./Item";
import { WorldBrowser } from "./World";

export const Router = () => {
  const { currentSection } = React.useContext(State.State);

  const components = {
    heroes: HeroBrowser,
    tavern: TavernBrowser,
    quests: QuestBrowser,
    items: ItemsBrowser,
    world: WorldBrowser,
  } as any;

  const Component = components[currentSection];

  if (Component) {
    return <Component />;
  } else {
    console.error(`No component found for ${currentSection}`);
    return null;
  }
};
