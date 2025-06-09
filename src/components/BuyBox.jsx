import starIcon from "../assets/star-icon.svg";

const BuyBox = ({name, price, priceDiscount, reference, description, rating, stars, children}) => {
    return(
        <div className="flex flex-col gap-6 p-6 bg-white rounded-md max-w-lg">
            <h1 className="text-[32px] text-dark-gray font-semibold">{name}</h1>
            <p className="text-[12px] text-dark-gray-3">Casual | Nike | REF:{reference}</p>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-warning px-2 py-1 rounded">
                    <span className="text-[14px] text-black">
                        {stars.toFixed(1)}
                    </span>
                    <img src={starIcon} alt="ícone de estrela" className="w-4 h-4" />
                </div>
                <span className="text-[14px] text-light-gray">{rating}</span>
                </div>

            <div className="flex items-center gap-3">
                {priceDiscount ? (
                    <>
                        <span className="text-[32px] text-dark-gray-2">
                            R$ {priceDiscount.toFixed(2)}
                        </span>
                        <span className="text-[16px] text-light-gray-2 line-through">
                            R${price.toFixed(2)}
                        </span>
                    </>
                ) : (
                    <span className="text-[32px] text-dark-gray-2">
                        R$ {price.toFixed(2)}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-[14px] text-dark-gray font-semibold">Descrição do Produto</span>
                <p className="text-[14px] text-dark-gray-2">{description}</p>
            </div>

            <div>{children}</div>

            <button className="bg-warning text-white text-[16px] px-6 py-3 rounded-md w-full">
                Comprar
            </button>
        </div>
    );
};
 
export default BuyBox;