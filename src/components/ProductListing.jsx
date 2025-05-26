import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
    return (
        <div className=''>
            
            <div className="flex flex-col gap-4 px-5 py-4 lg:hidden">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                ))}
            </div>

            
            <div
                className="hidden flex-wrap lg:flex gap-4 px-4 py-4"
               
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            scrollSnapAlign: 'start',
                            width: '300px',
                            flex: '0 0 auto',
                        }}
                    >
                        <ProductCard
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;