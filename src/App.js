import "./App.scss";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemen from "./data/gentlemen";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => {
            return <Gentleman key={gentleman.id} manInfo={gentleman} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
