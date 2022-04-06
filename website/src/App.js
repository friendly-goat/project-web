import './App.css'
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Catalog from './Components/Catalog/Catalog';
function App() {
  return (
    <>
      <div id='slider_div'>
        <div id='header_div'>
          <Header />
        </div>
        <Slider />
      </div>
        <Catalog />
    </>
  );
}

export default App;
