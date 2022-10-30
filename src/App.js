import Header from './components/Header';
import Footer from './components/Footer';
import Furniture from './components/FurnitureList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Furniture/>
      <Footer/>
    </div>
  );
}

export default App;
