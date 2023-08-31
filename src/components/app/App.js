import ListCard from "../listCard";
import logo from "../../vendor/images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="#" />
        <p>this is header</p>
      </header>
      <ListCard />
      <footer>
        <p>this is footer</p>
      </footer>
    </div>
  );
}

export default App;
