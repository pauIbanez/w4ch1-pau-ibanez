import "./App.scss";

function App() {
  return (
    <div class="container">
      <header class="main-header">
        <h1 class="main-title">The pointing gentlemen</h1>
      </header>
      <section class="controls">
        <p class="info">0 gentlemen pointing at you</p>
        <button class="button button--select">Select all</button>
      </section>
      <main class="main">
        <ul class="gentlemen"></ul>
      </main>
    </div>
  );
}

export default App;
