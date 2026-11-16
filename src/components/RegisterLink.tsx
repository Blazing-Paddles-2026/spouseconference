import type { ReactNode, MouseEvent } from 'react';
import { isRegistrationOpen, registrationDatePassed, REGISTRATION_URL } from '@/lib/conference';

/* Before registration opens, buttons say "Registration Opens April 1" and
   take visitors to the Save the Date announcement on the home page.
   They become "Register Now" only once the 2027 form link is added. */
export function registerLabel(kind: 'short' | 'long' = 'long') {
  if (isRegistrationOpen()) return kind === 'short' ? 'Register' : 'Register Now';
  if (registrationDatePassed()) return kind === 'short' ? 'Save the Date' : 'Registration Opening Soon';
  return kind === 'short' ? 'Save the Date' : 'Registration Opens April 1';
}

function scrollToSaveTheDate() {
  const el = document.getElementById('save-the-date');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function RegisterLink({ className, children }: { className?: string; children: ReactNode }) {
  if (isRegistrationOpen()) {
    return <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (document.getElementById('save-the-date')) { scrollToSaveTheDate(); return; }
    window.location.hash = '#/';
    window.setTimeout(scrollToSaveTheDate, 450);
  };
  return <a href="#/" onClick={onClick} className={className}>{children}</a>;
}
