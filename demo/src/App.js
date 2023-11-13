import './App.css';
import Navbar from './Component/Navbar/Navbar'
import  { useRoutes } from 'react-router-dom'
import routesArray from './routes'
import Footer from './Component/Footer/Footer'
function App() {
  let routes = useRoutes(routesArray)
  return (
    <div className="App">
      <Navbar/>
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
