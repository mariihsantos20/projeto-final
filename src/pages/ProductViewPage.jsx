import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import BuyBox from "../components/BuyBox";
import Galery from "../components/Galery";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing"; // Importado aqui

const ProductViewPage = () => {
  const { id } = useParams();

  // Simulando base de produtos
  const allProducts = [
    {
      id: "1",
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      reference: "38416711",
      stars: 4.7,
      rating: "(90 avaliações)",
      price: 219.0,
      priceDiscount: 219.0,
      description:
        "Tênis confortável para o dia a dia com cabedal reciclado e ótimo custo-benefício.",
      images: [
        { src: "/product-image-1.png" },
        { src: "/product-image-2.png" },
        { src: "/product-image-3.png" },
      ],
      sizes: ["39", "40", "41", "42", "43"],
      colors: ["#000000", "#FFFFFF", "#FF0000"],
    },
    {
      id: "2",
      name: "Tênis Adidas Ultraboost",
      reference: "11223344",
      stars: 4.9,
      rating: "(150 avaliações)",
      price: 799.0,
      priceDiscount: 699.0,
      description:
        "Tênis de alta performance com retorno de energia e conforto premium.",
      images: [
        { src: "/product-thumb-1.png" },
        { src: "/product-thumb-2.png" },
        { src: "/product-thumb-3.png" },
      ],
      sizes: ["38", "39", "40", "41", "42"],
      colors: ["#000000", "#0088ff", "#ffffff"],
    },
  ];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold">Produto não encontrado</h1>
        </div>
      </Layout>
    );
  }

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
    <>
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
        <div className="flex flex-wrap justify-around">
          <ProductListing products={recommendedProducts} />
        </div>
      </Section>
    </>
  );
};

export default ProductViewPage;
