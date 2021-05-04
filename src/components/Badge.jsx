import { useState, useEffect } from 'react';

const URL_HOST = 'https://img.shields.io';
const stringify = (query) => {
  return Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join('&');
};

const Badge = ({ badge, style }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const { name, color, logo, logoColor } = badge;
    const path = `/badge/${encodeURIComponent(
      name.toLowerCase()
    )}-${encodeURIComponent(color)}.svg`;
    setUrl(`${URL_HOST}${path}?${stringify({ logo, logoColor, style })}`);
  }, [badge, style]);

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-100">
      <img src={url} alt={badge.name} />
      <p className="mt-2 text-xs text-gray-700 font-medium leading-none">
        {badge.name}
      </p>
    </div>
  );
};

export default Badge;
