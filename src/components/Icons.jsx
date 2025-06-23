import { useState } from 'react';

const Icon = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const icons = [
    { gray: 'icon-grey-1.png', pink: 'icon-pink-1.png', label: 'Camisetas' },
    { gray: 'icon-grey-2.png', pink: 'icon-pink-2.png', label: 'Calças' },
    { gray: 'icon-grey-3.png', pink: 'icon-pink-3.png', label: 'Bonés' },
    { gray: 'icon-grey-4.png', pink: 'icon-pink-4.png', label: 'Headphones' },
    { gray: 'icon-grey-5.png', pink: 'icon-pink-5.png', label: 'Tênis' },
  ];

  const handleIconClick = (index) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {icons.map((icon, index) => {
        const isSelected = selectedIndex === index;
        return (
          <div
            key={index}
            onClick={() => handleIconClick(index)}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full 
                          border transition-all duration-300 bg-white
                          ${isSelected ? 'border-[#C92071]' : 'border-[#8F8F8F]'}`}
            >
              <img
                src={isSelected ? icon.pink : icon.gray}
                alt={`Ícone ${index + 1}`}
                className="w-8 h-8"
              />
            </div>
            <span className="text-sm text-[#474747]">{icon.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Icon;


