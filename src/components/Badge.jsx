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
    <div className="grid grid-cols-4 items-center border border-gray-100 -mt-px">
      <div className="col-span-1 self-stretch flex items-center px-4 border-r border-gray-200">
        <img src={url} alt="" />
      </div>
      <div className="col-span-3 px-4 py-2">
        <p className="text-gray-700 text-sm leading-snug break-all">{url}</p>
      </div>
    </div>
  );
};

export default Badge;
