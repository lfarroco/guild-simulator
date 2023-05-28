import { useContext, useState } from "react";
import { Item } from "./Item";
import { Entity } from "./Models";
import { State } from "./State";
import Dropdown from "react-bootstrap/Dropdown";

export type Quest = {
  _type: "Quest";
  id: string;
  name: string;
  status: "available" | "inProgress" | "completed";
  description: string;
  turns: number;
  progress: number;
  level: number;
  capacity: number;
  rewards: Item[];
  heroes: string[];
};

const quest = (name: string, description: string): Quest => ({
  _type: "Quest",
  id: Math.random().toString(),
  name,
  status: "available",
  description,
  turns: 3,
  progress: 0,
  level: 1,
  capacity: 3,
  rewards: [


  ],
  heroes: [],
});

export const questsSection = {
  id: "quests",
  name: "Quests",
  items: [
    quest(
      "Troublesome Rodents",
      "A nearby village is plagued by an infestation of giant rats. The villagers are seeking a brave adventurer to eliminate the vermin and restore peace to their homes."
    ),
    quest(
      "The Missing Heir",
      "A local nobleman has gone missing. His family is offering a reward for his safe return."
    ),
    quest(
      "The Goblin Menace",
      "A band of goblins has been terrorizing the countryside. The local lord is offering a reward for their heads."
    ),
    quest(
      "The Lost Mine",
      "A local mine has been overrun by monsters. The miners are offering a reward for their safe return."
    ),
  ],
  listRenderer: (item: Entity) => {
    if (item._type !== "Quest") return null;
    return <div key={item.id}>{item.name}</div>;
  },
  itemRenderer: (item: Entity) => {
    if (item._type !== "Quest") return null;
    return <div key={item.id}>{item.name}</div>;
  },
};

export const QuestBrowser = () => {
  const { quests } = useContext(State);

  const [selectedQuestId, setSelectedQuest] = useState(quests[0].id);

  const selectedQuest = quests.find((q) => q.id === selectedQuestId);

  if(!selectedQuest) return null;

  return (
    <div className="row">
      <div className="col col-sm-3 gx-0" key="entities">
        <div className="list-group" key="entities">
          {quests.map((entity) => {
            const classes = [
              "list-group-item",
              selectedQuest.id === entity.id ? "active" : null,
            ].filter((a) => a !== null);
            return (
              <div
                className={classes.join(" ")}
                onClick={() => setSelectedQuest(entity.id)}
                key={entity.id}
              >
                {listRenderer(entity)}
              </div>
            );
          })}
        </div>
      </div>
      <div id="content" className="col" key="content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedQuest.name}</h5>
            <ItemRenderer quest={selectedQuest} />
          </div>
        </div>
      </div>
    </div>
  );
};

function listRenderer(quest: Quest) {
  return (
    <div key={quest.id} className="row">
      <div className="col-3">
        <img src="assets/rodent.png" className="icon-sm" />
      </div>
      <div className="col">{quest.name}</div>
    </div>
  );
}

function ItemRenderer({ quest }: { quest: Quest }) {
  const { heroes, quests, setQuests } = useContext(State);
  const assignHero = (heroId: string, questId: string, index: number) => {
    console.log(`Assigning hero ${heroId} to quest ${questId}`);
    setQuests(
      quests.map((q) => {
        if (q.id === questId) {
          q.heroes[index] = heroId;
        }
        return q;
      })
    );
  };

  const startQuest = () => {
    setQuests(
      quests.map((q) => {
        if (q.id === quest.id) {
          q.status = "inProgress";
        }
        return q;
      })
    );
  };

  return (
    <div>
      <div>{quest.description}</div>
      <div>Turns to complete: {quest.turns}</div>
      <div>Level: {quest.level}</div>
      <hr />

      <div className="row">
        {Array.from({ length: quest.capacity }).map((_, index) => {
          const selectedHero = heroes.find(
            (hero) => hero.id === quest.heroes[index]
          );
          return (
            <div className="col-2">
              <Dropdown
                onSelect={(heroId) => {
                  if (heroId) assignHero(heroId, quest.id, index);
                }}
              >
                <Dropdown.Toggle variant="light">
                  <img
                    src={
                      selectedHero
                        ? selectedHero.picture
                        : "assets/silhouette.png"
                    }
                    className="icon-sm"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {heroes
                    .filter((h) => !quest.heroes.includes(h.id))
                    .map((hero, heroIndex) => (
                      <Dropdown.Item eventKey={hero.id} key={heroIndex}>
                        <img src={hero.picture} className="icon-sm" />
                        {hero.name}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        })}
      </div>

      <hr />

      {quest.status === "available" && (
        <button className="btn btn-primary" onClick={() => startQuest()}>
          Start Quest
        </button>
      )}
      {quest.status === "inProgress" && (
        <div>
          <div>Quest in progress</div>
          <div>Turns remaining: {quest.turns - quest.progress}</div>
        </div>
      )}

      <hr />

      <div className="container" style={{ overflow: "scroll", maxWidth: 300 }}>
        <pre>{JSON.stringify(quest, null, 2)}</pre>
      </div>
    </div>
  );
}
