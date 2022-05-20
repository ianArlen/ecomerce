import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <div className="Board"> 
      </div>
    </div>
  );
}

export default App;
