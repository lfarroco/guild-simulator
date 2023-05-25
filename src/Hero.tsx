import { Entity } from "./Models";

type HeroAction =
  | { _type: "Idle"; }
  | { _type: "Moving"; destination: string; }
  | { _type: "Leveling"; target: string; };

export type Hero = {
  _type: "Hero";
  id: number;
  name: string;
  lvl: number;
  currentAction: HeroAction;
};

export const randomHero = (): Hero => {
  return {
    _type: "Hero",
    id: Math.random(),
    name: "Hero " + Math.floor(Math.random() * 100),
    lvl: Math.floor(Math.random() * 100),
    currentAction: { _type: "Idle" },
  };
};

export const heroesSection = {
  id: 0,
  name: "Heroes",
  items: Array.from({ length: 20 }, randomHero) as Entity[],
  listRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return listRenderer(item);
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Hero") return null;
    return itemRenderer(item);
  },
};

function listRenderer(hero: Hero) {
  return (
    <div className="row" key={hero.id}>
      <div className="col-sm-3">
        <img
          className="img-fluid"
          src="https://static.wikia.nocookie.net/wowpedia/images/2/2c/BTNAvatar.png"
        />
      </div>

      <div className="col-sm-9">
        {hero.name}
        <div>{hero.lvl}</div>
      </div>
    </div>
  );
}

function itemRenderer(hero: Hero) {
  return (
    <div key={hero.id}>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Level</td>
            <td>Current Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {hero.name} </td>
            <td>{hero.lvl}</td>
            <td>{hero.currentAction._type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
