import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-rose-300 to-rose-500 h-">
      <BrowserRouter>
      <ToastContainer/>
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
