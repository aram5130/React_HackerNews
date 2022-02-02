import Header from "./components/Header";
import Topcards from "./components/Topcards";
import Toplist from "./components/Toplist";
import BottomNav from "./components/BottomNav";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Topcards />
      <Toplist />
      <BottomNav />
    </div>
  );
}

export default App;
