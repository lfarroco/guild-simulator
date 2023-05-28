import { useContext } from "react";
import * as State from "./State";

export const Header = () => {
  const {sections, currentSection, gold, setCurrentSection } = useContext(State.State);

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#" className="nav-link px-2 link-secondary">
            Ultimate MMO Guild Simulator
          </a>
          <ul className="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {sections.map((section) => {
              const classes = [
                "nav-link",
                currentSection === section ? "active" : null,
              ].filter((a) => a !== null);
              return (
                <li
                  className="nav-item"
                  onClick={() => {
                    setCurrentSection(section);
                  }}
                  key={section}
                >
                  <a className={classes.join(" ")} href="#">
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            Gold: {gold}
          </form>
        </div>
      </div>
    </header>
  );
};
