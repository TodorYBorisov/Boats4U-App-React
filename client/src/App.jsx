import './App.css';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';


function App() {


  return (
    <>
      <Header />

      <Home />

      <Catalog/>

      <Team />
      <NotFound/>
      <Search/>
      
      <Footer />
    </>
  );
}

export default App;
