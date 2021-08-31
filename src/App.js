import './App.css';
import HomeRoute from './routers/Home.route';
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
      <HomeRoute />
      <Footer />
    </div>
  )
}


export default App;
