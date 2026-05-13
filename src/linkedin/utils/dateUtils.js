export const getRelativeTime = date => {
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  if (diffDays < 1) return 'just now';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 4) return `${diffWeeks}w ago`;
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${diffYears}yr ago`;
};

export const computeDuration = (startDate, endDate = 'Present') => {
  // Create dates with timezone offset to ensure correct month
  const start = new Date(startDate + 'T00:00:00');
  const end =
    endDate === 'Present' ? new Date() : new Date(endDate + 'T00:00:00');

  // Calculate total months difference
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    (end.getDate() >= start.getDate() ? 0 : -1) + // Adjust for partial months
    1; // Add 1 to include the current month

  // Calculate years and remaining months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = '';

  if (years > 0) {
    duration += `${years} ${years === 1 ? 'yr' : 'yrs'} `;
  }
  if (months > 0 || (years === 0 && totalMonths > 0)) {
    duration += `${months} ${months === 1 ? 'mo' : 'mos'}`;
  }

  // Format dates
  const formatDate = date => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${monthNames[month]} ${year}`;
  };

  const dateRange = `${formatDate(start)} - ${endDate === 'Present' ? 'Present' : formatDate(end)}`;

  return `${dateRange} · ${duration.trim()}`;
};
