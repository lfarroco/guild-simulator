import { useContext, useState } from "react";
import { State } from "./State";
import { uuid } from "./utils";
import { Mob, mobs } from "./Mob";
import {herbs, Item} from "./Item";

export type Region = {
  _type: "Region";
  id: string;
  name: string;
  picture: string;
  gold: number;
  lvl: number;
  mobs: Mob[];
  collectables: Item[];
};

const region = (
  name: string,
  picture: string,
  mobs: Mob[],
  collectables: Item[]
): Region => {
  return {
    _type: "Region",
    id: uuid(),
    name,
    picture,
    gold: 10,
    lvl: 1,
    mobs,
    collectables,
  };
};

export const worldSection = {
  id: "world",
  name: "World",
};

export const regions = [
  region(
    "Valley of Trials",
    "assets/desert.png",
    [mobs.rat, mobs.snake],
    [herbs.avantoe, herbs.harralander]
  ),
  // region("Mazarbul", "assets/forest.png"),
  // region("Ithilien", "assets/forest2.png"),
];

export const WorldBrowser = () => {
  const { regions } = useContext(State);

  const [selectedEntity, setSelectedEntity] = useState(regions[0]);

  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {regions.map((region) => {
            const classes = [
              "list-group-item",
              selectedEntity.id === region.id ? "active" : null,
            ].filter((a) => a !== null);
            return (
              <div
                className={classes.join(" ")}
                onClick={() => setSelectedEntity(region)}
                key={region.id}
              >
                {listRenderer(region)}
              </div>
            );
          })}
        </div>
      </div>
      <div id="content" className="col" key="content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedEntity.name}</h5>
            {itemRenderer(selectedEntity)}
          </div>
        </div>
      </div>
    </div>
  );
};

function listRenderer(region: Region) {
  return (
    <div key={region.id} className="row">
      <div className="col-3">
        <img src={region.picture} className="icon-sm" />
      </div>
      <div className="col">{region.name}</div>
    </div>
  );
}

function itemRenderer(region: Region) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: 200,
          overflow: "hidden",
          background: `url(${region.picture}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      ></div>
      <h3>Collectables</h3>
      {region.collectables.map((collectable) => (
        <img src={collectable.picture} className="icon-sm" />
      ))}
      <h3>Mobs</h3>
      {region.mobs.map((mob) => (
        <img src={mob.picture} className="icon-sm" />
      ))}
    </div>
  );
}
