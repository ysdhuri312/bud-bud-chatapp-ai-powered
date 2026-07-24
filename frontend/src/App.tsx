import './App.css';
import Auth from './components/common/Auth';
import Header from './components/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
