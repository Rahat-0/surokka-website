import './App.css';
import Footer from './components/homeComponent/Footer';
import HomeRoute from './routers/Main.route'



function App() {
  return (
    <div className="App">
      <HomeRoute />
      <Footer />
    </div>
  )
}


export default App;
