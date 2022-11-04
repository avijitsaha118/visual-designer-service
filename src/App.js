import logo from './logo.svg';
import './App.css';
import Haeder from './Components/Shared/Haeder';
import HomePage from './Components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div>
      <Haeder></Haeder>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
