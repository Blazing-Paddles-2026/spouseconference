import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'

import SpouseConferencePage from './pages/SpouseConferencePage'
import SponsorshipPage from './pages/SponsorshipPage'
import SpeakersPage from './pages/SpeakersPage'
import SchedulePage from './pages/SchedulePage'
import ConferenceExperiencePage from './pages/ConferenceExperiencePage'
import WellnessPage from './pages/WellnessPage'
import ContactPage from './pages/ContactPage'

/* Off-site redirect — for any URL that belongs to the main RRFF site
   (e.g. /board, /press-room, /the-1884-fund), redirect to the equivalent
   page on www.roundrockfirefoundation.org. This way someone who types or
   shares spouseconference.roundrockfirefoundation.org/board still ends up
   on a useful page rather than a 404. */
function MainSiteRedirect({ path }: { path: string }) {
  useEffect(() => {
    window.location.replace(`https://www.roundrockfirefoundation.org${path}`)
  }, [path])
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontFamily: 'sans-serif' }}>
      Taking you to roundrockfirefoundation.org…
    </div>
  )
}

/* Catch-all — anything we don't explicitly handle goes to the main RRFF
   home page. */
function CatchAllRedirect() {
  const location = useLocation()
  useEffect(() => {
    // Try to preserve the path so e.g. /random redirects to main /
    window.location.replace('https://www.roundrockfirefoundation.org/')
  }, [location.pathname])
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontFamily: 'sans-serif' }}>
      Taking you to roundrockfirefoundation.org…
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* ===== Spouse Conference pages (this site only) ===== */}
      <Route path="/" element={<SpouseConferencePage />} />
      <Route path="/spouse-conference" element={<SpouseConferencePage />} />
      <Route path="/sponsorship" element={<SponsorshipPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/conference-experience" element={<ConferenceExperiencePage />} />
      <Route path="/wellness" element={<WellnessPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ===== Redirects back to the main RRFF site ===== */}
      <Route path="/board"               element={<MainSiteRedirect path="/board/" />} />
      <Route path="/press-room"          element={<MainSiteRedirect path="/#/press-room" />} />
      <Route path="/history"             element={<MainSiteRedirect path="/#/history" />} />
      <Route path="/the-1884-fund"       element={<MainSiteRedirect path="/#/the-1884-fund" />} />
      <Route path="/chaps-corner"        element={<MainSiteRedirect path="https://chap.roundrockfirefoundation.org/firechaplain" />} />
      <Route path="/events"              element={<MainSiteRedirect path="/events/" />} />
      <Route path="/events/fire-foundation-night" element={<MainSiteRedirect path="/foundation-night/" />} />
      <Route path="/get-involved"        element={<MainSiteRedirect path="/#/get-involved" />} />
      <Route path="/volunteer"           element={<MainSiteRedirect path="/volunteer/" />} />
      <Route path="/sponsor"             element={<MainSiteRedirect path="/sponsor/" />} />
      <Route path="/legacy-circle"       element={<MainSiteRedirect path="/legacy-circle/" />} />
      <Route path="/about"               element={<MainSiteRedirect path="/about/" />} />
      <Route path="/donate"              element={<MainSiteRedirect path="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation" />} />

      {/* Any other unknown URL — send to main site home */}
      <Route path="*" element={<CatchAllRedirect />} />
    </Routes>
  )
}
