const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-md mx-auto pt-8 pb-6">
        <p className="text-gray-600 text-sm">
          Made by{' '}
          <a
            className="underline hover:text-gray-800"
            href="https://pengtikui.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paranoid_K
          </a>
          <span> · </span>
          Powered by{' '}
          <a
            className="underline hover:text-gray-800"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
