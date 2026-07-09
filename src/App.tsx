import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts';
import { Event } from './pages/Event';
import { Home } from './pages/Home';
import { Recap } from './pages/Recap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="recap" element={<Recap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
