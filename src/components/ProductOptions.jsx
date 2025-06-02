import { useState } from "react";

const ProductOptions = ({sizes =[], colors=[]}) => {
    const[selectedSize, setSelectedSize] = useState(null);
    const[selectedColor, setSelectedColor] = useState(null);

    return(
        <div className="flex flex-col gap-6 w-full max-w-lg">
            <div className="flex flex-col gap-2">
                <span className="text-[14px] text-dark-gray font-semibold">Tamanho</span>
                <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                        <button 
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`border rounded-md px-5 py-2.5 text-[14px] cursor-pointer transition${
                                selectedSize === size
                                ? " border-2 border-dark-gray-2 text-dark-gray-2"
                                : "border-light-gray text-dark-gray"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-[14px] text-dark-gray font-semibold">Cor</span>
                <div className="flex items-center gap-3">
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 ${
                                selectedColor === color
                                ? "border-dark-gray-2"
                                : "border-light-gray"
                            } cursor-pointer transition`}
                            style={{ backgroundColor: color }}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductOptions;