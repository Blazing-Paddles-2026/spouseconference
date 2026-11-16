/* 2027 National Spouse Conference — single source of truth for dates and
   registration. Change these values (or REGISTRATION_URL) and every page
   updates. Register buttons are disabled and say "Registration opens April
   1st". They switch to "Register Now" only when
   BOTH (a) REGISTRATION_OPENS has passed and (b) REGISTRATION_URL is set.
   The 2027 Google Form goes live on April 1, 2027 — paste its link below
   then. Until a link is added, no button points to any form. */
export const CONFERENCE_YEAR = 2027;
export const CONFERENCE_DATES = 'November 5\u20137, 2027';
export const CONFERENCE_DAYS = 'Friday \u2013 Sunday';
export const CONFERENCE_LOCATION = 'Round Rock, Texas';
export const REGISTRATION_OPENS = new Date('2027-04-01T00:00:00-05:00'); // 12:00 a.m. CDT
export const REGISTRATION_OPENS_LABEL = 'April 1, 2027';
export const REGISTRATION_URL = ''; // 2027 registration form link — add on April 1, 2027

export const CONFERENCE_ICS = '/nsc-2027.ics';
export const REGISTRATION_ICS = '/nsc-2027-registration-opens.ics';

const gcal = (text: string, dates: string, details: string) =>
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(text)}&dates=${dates}` +
  `&details=${encodeURIComponent(details)}&location=${encodeURIComponent('Round Rock, TX')}`;

export const CONFERENCE_GCAL = gcal(
  '2027 RRFF National Spouse Conference',
  '20271105/20271108',
  'Round Rock Fire Foundation National Spouse Conference. Registration opens April 1, 2027. https://spouseconference.roundrockfirefoundation.org/',
);
export const REGISTRATION_GCAL = gcal(
  'Registration opens: 2027 RRFF National Spouse Conference',
  '20270401/20270402',
  'Registration for the November 5-7, 2027 National Spouse Conference opens today. https://spouseconference.roundrockfirefoundation.org/',
);

export const registrationDatePassed = (now = Date.now()) => now >= REGISTRATION_OPENS.getTime();
export const isRegistrationOpen = (now = Date.now()) => registrationDatePassed(now) && REGISTRATION_URL.length > 0;
