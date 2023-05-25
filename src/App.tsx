import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { heroesSection } from "./Hero";
import { itemsSection } from "./Item";
import { partySection } from "./Party";

function App() {
  const [sections] = React.useState([
    heroesSection,
    itemsSection,
    partySection,
  ]);

  const [currentSection, setSelectedSection] = React.useState(sections[0]);

  const [selectedEntity, setSelectedEntity] = React.useState(
    sections[0].items[0]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-2 gx-0" key="sections">
          <div className="list-group" key="sections">
            {sections.map((section) => {
              const classes = [
                "list-group-item",
                currentSection.id === section.id ? "active" : null,
              ].filter((a) => a !== null);
              return (
                <div
                  className={classes.join(" ")}
                  onClick={() => {
                    setSelectedSection(section);
                    setSelectedEntity(section.items[0]);
                  }}
                  key={section.id}
                >
                  {section.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col col-sm-3 gx-0" key="entities">
          <div className="list-group" key="entities">
            {currentSection.items.map((entity) => {
              const classes = [
                "list-group-item",
                selectedEntity.id === entity.id ? "active" : null,
              ].filter((a) => a !== null);
              return (
                <div
                  className={classes.join(" ")}
                  onClick={() => setSelectedEntity(entity)}
                  key={entity.id}
                >
                  {currentSection.listRenderer(entity)}
                </div>
              );
            })}
          </div>
        </div>
        <div id="content" className="col" key="content">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{selectedEntity.name}</h5>
              <pre className="card-text">
                {currentSection.itemRenderer(selectedEntity)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
