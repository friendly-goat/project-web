import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Catalog from "./Components/Catalog/Catalog";
function App() {
  return (
    <>
      <div id="page1">
        <Header />
        <Slider />
      </div>
      <Catalog />
    </>
  );
}

export default App;
