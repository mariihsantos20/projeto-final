const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-6">
      <h3 className="text-[14px] text-dark-gray-2 mb-3">{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map(({ text, value }, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer text-dark-gray-2">
            <input
              type={inputType}
              value={value ?? text}
              className="w-[22px] h-[22px] checked:bg-primary"
              name={title.toLowerCase()} // para radio agrupar pelo título
            />
            {text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;