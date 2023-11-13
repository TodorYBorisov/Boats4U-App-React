import './App.css';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Team from './components/Team/Team';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import NotFound from './components/NotFound/NotFound';

import Search1 from './components/Search1/Search1';
import Details from './components/Details/Details';


function App() {


  return (
    <>
      <Header />

      <Home />

      <Catalog/>

      <Team />
      <NotFound/>
      
      <Search1/>
      
      <Register/>

      <Login/>

      <Details/>
      
      <Footer />
    </>
  );
}

export default App;
