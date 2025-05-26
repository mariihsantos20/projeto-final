// src/components/ProductCard.jsx
import 'primeflex/primeflex.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

const ProductCard = ({ name, image, price, priceDiscount }) => {
    return (
        <div className="flex flex-column gap-3 p-3 w-full md:w-full" style={{ fontFamily: 'Inter, Sans Serif' }}>
            <div className="relative w-full bg-[#ffffff]">
                <Image src={image} alt={name} className="w-full h-auto" />

                {priceDiscount && (
                    <Button
                        label="50% OFF"
                        severity="success"
                        rounded
                        className="absolute top-0 left-0 m-2 text-xs"
                        style={{
                            height: '24px',
                            fontSize: '12px',
                            padding: '0 10px',
                        }}
                    />
                )}
            </div>

            <div>
                <h5 className="text-[#8F8F8F] m-0">Tênis</h5>
                <h3 className="text-[#474747] m-0 text-base md:text-lg">{name}</h3>
            </div>

            <div className="flex gap-2 items-center">
                {priceDiscount ? (
                    <>
                        <h6 className="text-[#8F8F8F] line-through m-0">R$ {price.toFixed(2)}</h6>
                        <h6 className="text-[#1F1F1F] font-bold m-0">R$ {priceDiscount.toFixed(2)}</h6>
                    </>
                ) : (
                    <h6 className="text-[#1F1F1F] font-bold m-0">R$ {price.toFixed(2)}</h6>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
