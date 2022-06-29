import '../scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import TourItemDetails from './TourItemDetails';
import Reservations from './ReservationList';
import Reserve from './Reserve';
import AddTourItem from './AddTourItem';
import ToursDeleteList from './ToursDeleteList';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<TourItemDetails />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/add" element={<AddTourItem />} />
      <Route path="/delete" element={<ToursDeleteList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
