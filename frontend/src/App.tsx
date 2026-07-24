import './App.css';
import Auth from './features/auth/pages/AuthPage';
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
