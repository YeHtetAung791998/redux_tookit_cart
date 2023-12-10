import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavBar/>
     <Routes>
      
      <Route path="/cart" exact element={<Cart/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" exact element={<Navigate replace to="/home" />}></Route>
<Route path="/not-found" element={<NotFound/>}></Route>

     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
