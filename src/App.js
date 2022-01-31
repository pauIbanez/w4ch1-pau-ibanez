import "./App.scss";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemen from "./data/gentlemen";

function App() {
  const selectAll = () => {
    console.log("Select all");
  };

  const selectGentleman = () => {
    console.log("Select gentleman");
  };

  const nOfSelectedGentlemen = 0;

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
                actionOnClick={selectGentleman}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
