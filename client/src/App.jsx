import './App.css';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import Home from './components/Home/Home';

function App() {


  return (
    <>
      <Header />
      <main className='main-container'>
        <Home/>
        <Team/>

      </main>
      <Footer />
    </>
  );
}

export default App;
