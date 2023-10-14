import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/bookings" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
