import './App.css';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from './context/authContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Weather from './components/Weather/Weather';
import PrivateGuard from './components/Guards/PrivateGuard';
import PublicGuard from './components/Guards/PublicGuard';


function App() {
  const [auth, setAuth] = useLocalStorage('user');

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Header />
        <main className='main-container'>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/boats' element={<Catalog />}></Route>
            <Route path='/boats/details/:id' element={<Details />}></Route>

            <Route element={<PrivateGuard />}>
              <Route path='/create' element={<Create />}></Route>
              <Route path='/boats/edit/:id' element={<Edit />}></Route>
              <Route path='/weather' element={<Weather />}></Route>
              <Route path='/search' element={<Search />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
            </Route>

            <Route element={<PublicGuard />}>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Route>

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </main>
      </AuthContext.Provider>
      <Footer />
    </>
  );
}

export default App;
