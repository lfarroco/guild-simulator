type CollectableType = { _type: "ore" } | { _type: "herb" } | { _type: "fish" };

export type Collectable = {
  id: string;
  name: string;
  _type: CollectableType;
};

const makeOre = (id: string, name: string) => ({ id, name, _type: { _type: "ore" } });

export const ores = [
  makeOre("iron", "Iron"),
  makeOre("copper", "Copper"),
  makeOre("silver", "Silver"),
  makeOre("gold", "Gold"),
  makeOre("mithril", "Mithril"),
  makeOre("adamantite", "Adamantite"),
  makeOre("runite", "Runite"),
] as Collectable[];

const makeHerb = (id: string, name: string) => ({ id, name, _type: { _type: "herb" } });

export const herbs = [
  makeHerb("guam", "Guam"),
  makeHerb("marrentill", "Marrentill"),
  makeHerb("tarromin", "Tarromin"),
  makeHerb("harralander", "Harralander"),
  makeHerb("ranarr", "Ranarr"),
  makeHerb("toadflax", "Toadflax"),
  makeHerb("irit", "Irit"),
  makeHerb("avantoe", "Avantoe"),
] as Collectable[];

const makeFish = (id: string, name: string) => ({ id, name, _type: { _type: "fish" } });

export const fishes = [
  makeFish("shrimp", "Shrimp"),
  makeFish("sardine", "Sardine"),
  makeFish("herring", "Herring"),
  makeFish("anchovy", "Anchovy"),
  makeFish("trout", "Trout"),
  makeFish("salmon", "Salmon"),
  makeFish("tuna", "Tuna"),
  makeFish("lobster", "Lobster"),
  makeFish("swordfish", "Swordfish"),
  makeFish("monkfish", "Monkfish"),
  makeFish("shark", "Shark"),
] as Collectable[];


