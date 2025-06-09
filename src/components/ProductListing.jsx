import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
    return (
        <div>
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