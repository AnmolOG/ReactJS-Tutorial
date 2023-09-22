import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from './Components/About';
import Application from "./Components/Application";
import Contact from './Components/Contact';
import Customer from "./Components/Customer";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from './Components/Login';
import Phone from "./Components/Phone";
import Sponser from "./Components/Sponser";
import Team from "./Components/Team";
import Todos from "./Components/Todos";
function App() {
//  
 
//  useEffect(() => {
//    alert('hello user')

//  }, [])
 
    return (
    <>
      <Header title="My Todos List" SearchBar={true} />
      <Routes>
        <Route path='/' element={<Todos />}/>


        <Route path='/about' element={<About />}>
          <Route path='/about/sponser' element={<Sponser/>}/>
          <Route path='/about/customer' element={<Customer/>}/>
          <Route path='/about/team' element={<Team/>}/>
        </Route>

        
        <Route path='/contact' element={<Contact />}>
          <Route path ='/contact/application' element ={<Application/>}/>
          <Route path='/contact/email' element = {<Email/>} />
          <Route path='/contact/phone' element = {<Phone/>} />
          </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
