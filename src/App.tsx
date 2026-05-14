import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage'
import PressRoomPage from './pages/PressRoomPage'
import EventFireFoundationNight from './pages/EventFireFoundationNight'
import Fund1884Page from './pages/Fund1884Page'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/press-room" element={<PressRoomPage />} />
      <Route path="/events/fire-foundation-night" element={<EventFireFoundationNight />} />
      <Route path="/fund-1884" element={<Fund1884Page />} />
    </Routes>
  )
}
