import { Routes, Route } from 'react-router'
import HistoryPage from './pages/HistoryPage'
import PressRoomPage from './pages/PressRoomPage'
import EventFireFoundationNight from './pages/EventFireFoundationNight'
import GetInvolvedPage from './pages/GetInvolvedPage'
import BoardPage from './pages/BoardPage'
import FundPage from './pages/FundPage'
import ChapsCornerPage from './pages/ChapsCornerPage'
import EventsPage from './pages/EventsPage'
import SpouseConferencePage from './pages/SpouseConferencePage'
import SponsorshipPage from './pages/SponsorshipPage'
import SpeakersPage from './pages/SpeakersPage'
import SchedulePage from './pages/SchedulePage'
import ConferenceExperiencePage from './pages/ConferenceExperiencePage'
import WellnessPage from './pages/WellnessPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SpouseConferencePage />} />
      <Route path="/spouse-conference" element={<SpouseConferencePage />} />
      <Route path="/sponsorship" element={<SponsorshipPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/conference-experience" element={<ConferenceExperiencePage />} />
      <Route path="/wellness" element={<WellnessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/press-room" element={<PressRoomPage />} />
      <Route path="/events/fire-foundation-night" element={<EventFireFoundationNight />} />
      <Route path="/get-involved" element={<GetInvolvedPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/the-1884-fund" element={<FundPage />} />
      <Route path="/chaps-corner" element={<ChapsCornerPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  )
}
