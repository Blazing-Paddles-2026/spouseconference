import { isValidElement, type ReactNode } from 'react';
import { isRegistrationOpen, REGISTRATION_URL } from '@/lib/conference';

/* Registration stays genuinely disabled until the opening date has passed
   AND the approved 2027 form link is configured. Calendar links are separate. */
export function registerLabel(kind: 'short' | 'long' = 'long') {
  if (isRegistrationOpen()) return kind === 'short' ? 'Register' : 'Register Now';
  return 'Registration opens April 1st';
}

export default function RegisterLink({ className, children }: { className?: string; children: ReactNode }) {
  if (isRegistrationOpen()) {
    return <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }
  const childClassName = isValidElement<{ className?: string }>(children)
    ? children.props.className
    : undefined;
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      data-registration-disabled
      className={`${className || childClassName || ''} !bg-orange-500/10 !text-orange-400 border border-orange-500/40 !cursor-not-allowed !opacity-100 !whitespace-normal leading-snug max-w-full`}
    >
      {registerLabel()}
    </button>
  );
}
