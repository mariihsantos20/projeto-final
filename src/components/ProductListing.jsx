import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
    return (
        <div>
           <div
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2"
               
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