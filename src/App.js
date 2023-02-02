import "./App.css";

import logo from "./components/img/logo.svg";
import Header from "./components/Header";
import Button from "./components/Column";

const App = () => {
  return (
    <div>
      <Header pic={logo} name="Ready To Go" />

      <main>
        <div className="group">
          <Button />
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by
          <span> Brice</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
