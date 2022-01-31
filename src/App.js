import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemenData from "./data/gentlemen";

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenData);

  const startingSelectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  const [nOfSelectedGentlemen, setNOfSelectedGentlemen] = useState(
    startingSelectedGentlemen
  );

  const selectAll = () => {
    console.log("Select all");
  };

  const toggleGentleman = (id) => {
    const newGentlemen = [...gentlemen];
    const foundGentleman = newGentlemen.find(
      (gentleman) => gentleman.id === id
    );
    foundGentleman.selected = !foundGentleman.selected;
    if (foundGentleman.selected) {
      setNOfSelectedGentlemen(nOfSelectedGentlemen + 1);
    } else {
      setNOfSelectedGentlemen(nOfSelectedGentlemen - 1);
    }
    setGentlemen(newGentlemen);
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info infoClass="info" number={nOfSelectedGentlemen} />
        <Button
          buttonClass="button button--select"
          buttonText="Select All"
          actionOnClick={selectAll}
        />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => {
            return (
              <Gentleman
                key={gentleman.id}
                manInfo={gentleman}
                actionOnClick={() => {
                  toggleGentleman(gentleman.id);
                }}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
