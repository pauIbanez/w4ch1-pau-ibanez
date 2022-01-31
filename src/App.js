import "./App.scss";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemen from "./data/gentlemen";

function App() {
  const selectAll = () => {
    console.log("Select all");
  };

  const selectGentleman = () => {
    console.log("Select gentleman");
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
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
