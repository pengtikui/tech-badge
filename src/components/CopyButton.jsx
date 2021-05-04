const CopyButton = ({ children, onClick }) => {
  return (
    <button
      className="w-5 h-5 text-gray-200 hover:opacity-75 focus:opacity-100 focus:text-white focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CopyButton;
