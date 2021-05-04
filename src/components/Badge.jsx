import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { LinkIcon, CodeIcon } from '@heroicons/react/outline';
import copy from 'copy-to-clipboard';
import CopyButton from './CopyButton';

const URL_HOST = 'https://img.shields.io';
const stringify = (query) => {
  return Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join('&');
};
const generate = (badge) => {};

const Badge = ({ badge, style }) => {
  const [url, setUrl] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const { logo, logoColor } = badge;
    const name = encodeURIComponent(badge.name.toLowerCase());
    const color = encodeURIComponent(badge.color);
    const path = `/badge/${name}-${color}.svg`;
    setUrl(`${URL_HOST}${path}?${stringify({ logo, logoColor, style })}`);
  }, [badge, style]);

  const handleCopyURL = () => {
    copy(url);
  };
  const handleCopyTag = () => {
    copy(`<img src="${url}" alt="${badge.name}" />`);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center p-4 border border-gray-100"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img src={url} alt={badge.name} />
      <p className="mt-2 text-xs text-gray-700 font-medium leading-none">
        {badge.name}
      </p>
      <Transition show={isActive}>
        <div className="absolute -inset-px flex items-center justify-center space-x-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <CopyButton onClick={handleCopyURL}>
            <LinkIcon />
          </CopyButton>
          <CopyButton onClick={handleCopyTag}>
            <CodeIcon />
          </CopyButton>
        </div>
      </Transition>
    </div>
  );
};

export default Badge;
