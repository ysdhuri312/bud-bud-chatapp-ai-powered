import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
