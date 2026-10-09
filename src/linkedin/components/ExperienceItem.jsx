import React, { useEffect } from 'react';
import { computeDuration } from '../utils/dateUtils';

const SCOUT_LOADER =
  'https://www.recurse-scout.com/loader.js?t=4f0d21efdf10880bb07e8f0ac2e22146';

// Fills every div.rc-scout on the page with the Recurse Center scout logo.
function useRecurseScout(enabled) {
  useEffect(() => {
    if (!enabled) return;
    if (window._rcs?.inst) {
      window._rcs.inst.render();
    } else if (!document.querySelector(`script[src="${SCOUT_LOADER}"]`)) {
      // The loader keeps an existing _rcs, so this pins the logo-only style.
      window._rcs = window._rcs || {
        token: '4f0d21efdf10880bb07e8f0ac2e22146',
        type: 'logo_only',
      };
      const script = document.createElement('script');
      script.src = SCOUT_LOADER;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [enabled]);
}

const ExperienceItem = ({
  logo,
  scout,
  title,
  company,
  startDate,
  endDate,
  link,
}) => {
  useRecurseScout(scout);
  const duration =
    startDate && endDate ? computeDuration(startDate, endDate) : null;

  return (
    <div className="experience-item">
      <div className="company-logo">
        {scout ? (
          <div className="rc-scout" />
        ) : (
          <img src={logo} alt={`${company} logo`} />
        )}
      </div>
      <div className="experience-details">
        {link ? (
          <a href={link} className="job-title">
            {title}
          </a>
        ) : (
          <div className="job-title">{title}</div>
        )}
        <div className="company-name">{company}</div>
        {duration && <div className="job-duration">{duration}</div>}
      </div>
    </div>
  );
};

export default ExperienceItem;
