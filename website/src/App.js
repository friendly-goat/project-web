// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to website'
  // const likes = 69
  // const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <p>Liked:{likes}</p>
        <p>{ 10 }</p>
        <p>{"Hello World"}</p>
        <p>{ Math.random() * 10}</p>
        <a href="{link}">Google site</a> */}
      </div>
    </div>
  );
}

export default App;
