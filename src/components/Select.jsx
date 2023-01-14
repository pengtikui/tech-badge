const Select = ({ options, value, onChange }) => {
  return (
    <select
      className="block w-full px-2 py-1 rounded-sm border border-gray-300 shadow-xs text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
