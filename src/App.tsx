import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { CrewVsCrew, Event, EventLayout, TwoVsTwo } from './pages/Event';
import { Home } from './pages/Home';
import { Recap, Recap2022, Recap2025, RecapLayout } from './pages/Recap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<EventLayout />}>
            <Route index element={<Event />} />
            <Route path="crew-vs-crew" element={<CrewVsCrew />} />
            <Route path="2-vs-2" element={<TwoVsTwo />} />
          </Route>
          <Route path="recap" element={<RecapLayout />}>
            <Route index element={<Recap />} />
            <Route path="2022" element={<Recap2022 />} />
            <Route path="2025" element={<Recap2025 />} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
