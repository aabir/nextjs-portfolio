import { parseISO, format } from 'date-fns';

function formatDate(dateString) {
  if (dateString === 'Present') {
    return dateString;
  }
  const date = parseISO(dateString);
  return format(date, 'LLLL d, yyyy');
}

export default function Date({ dateString }) {
  const formattedDate = formatDate(dateString);
  return <time dateTime={dateString}>{formattedDate}</time>;
}

