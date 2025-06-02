import Layout from "../components/Layout";
import BuyBox from "../components/BuyBox";
import Galery from "../components/Galery";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

const ProductViewPage = () => {
  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    reference: "38416711",
    stars: 4.7,
    rating: "(90 avaliações)",
    price: 219.00,
    priceDiscount: 219.00,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis ad quidem vitae! Eligendi, vel quas quae nobis, excepturi, corrupti id tenetur exercitationem accusantium ex perspiciatis nesciunt neque. Fugiat, aliquam.",
    images: [
      { src: "/product-image-1.png" },
      { src: "/product-image-2.png" },
      { src: "/product-image-3.png" },
    ],
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  };

  const recommendedProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/tenis.png",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/tenis.png",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/tenis.png",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/tenis.png",
      price: 200,
      priceDiscount: 100,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto">
        <Galery
          images={product.images}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        <div className="flex flex-col gap-8">
          <BuyBox
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
            reference={product.reference}
            description={product.description}
            rating={product.rating}
            stars={product.stars}
          />
          <ProductOptions sizes={product.sizes} colors={product.colors} />
        </div>
      </div>

      <Section
        title="Produtos Recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendedProducts.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              priceDiscount={item.priceDiscount}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
