import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navber } from './components/Navber';
import { SectionOne } from './components/SectionOne';


function App() {
  return (
    <div className="App">
      <Navber />
      <Header />
      <SectionOne />
      <Footer />
      
    </div>
  );
}

export default App;
