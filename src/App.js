import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from './Components/Login';
import Todos from "./Components/Todos";
function App() {
 
 
//  useEffect(() => {
//    alert('hello user')

//  }, [])
 
    return (
    <>
      <Header title="My Todos List" SearchBar={true} />
      <Routes>
        <Route path='/' element={<Todos />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
