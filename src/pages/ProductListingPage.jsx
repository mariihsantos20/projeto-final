//import Section from "../components/Section";
//import ProductListing from "../components/ProductListing";

//const ProductListingPage = () => {
   //return ( <div>
//<div>
//<Section>



//{/* Aqui vc coloca o Ordenar por e Filtrar por */}



//</Section>
// </div>



        //{/* Cards de Produtos*/}
   //<div className="flex justify-around flex-wrap px-4 ml-8">
 // <Section 
    //title="Produtos em alta"
    //link={{ text: 'Ver todos -', href: '/novidades' }}
  //>
   //<div className="flex flex-wrap justify-around">
      //<ProductListing products={products} />
    //</div>
  //</Section>
///div>
//</div>
    /// );
//}
 
//export default ProductListingPage;

import Layout from "../components/Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { useState } from "react";

const ProductListingPage = () => {
  const [order, setOrder] = useState("");

  const products = [
    {
      name: "Tênis Esportivo 1",
      image: "/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Tênis Esportivo 2",
      image: "/product-thumb-2.png",
      price: 49.9
    },
    {
      name: "Tênis Esportivo 3",
      image: "/product-thumb-3.png",
      price: 300,
      priceDiscount: 279.9
    },
    {
      name: "Tênis Esportivo 4",
      image: "/product-thumb-4.png",
      price: 100
    }
  ];

  // Ordenação dos produtos
  const sortedProducts = [...products].sort((a, b) => {
    if (order === "asc") return (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price);
    if (order === "desc") return (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price);
    return 0;
  });

  return (
    <Layout>
      <div className="flex px-4 py-10 gap-8 max-w-7xl mx-auto">
        
        {/* Sidebar esquerda */}
        <aside className="w-[308px]">
          
          {/* Ordenar por */}
          <div className="mb-6">
            <label 
              htmlFor="order-select" 
              className="block text-[16px] text-dark-gray-2 mb-2"
            >
              Ordenar por
            </label>
            <select
              id="order-select"
              className="w-full h-[60px] border border-gray-300 rounded px-3 text-dark-gray-2"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>

          {/* Filtros */}
          <div className="bg-white p-4">
            <h2 className="text-[16px] text-dark-gray-2 mb-2">Filtrar por</h2>
            <hr className="border-light-gray-2 mb-4" />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Tênis" },
                { text: "Camisetas" },
                { text: "Acessórios" }
              ]}
            />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Nike" },
                { text: "Adidas" },
                { text: "Puma" },
                { text: "K-Swiss" }
              ]}
            />

            <FilterGroup
              title="Tamanho"
              inputType="radio"
              options={[
                { text: "38" },
                { text: "39" },
                { text: "40" },
                { text: "41" }
              ]}
            />
          </div>
        </aside>

        {/* Listagem de produtos */}
        <main className="flex-1">
          <Section
            title={`${sortedProducts.length} produtos encontrados`}
            titleAlign="left"
          >
            <ProductListing products={sortedProducts} />
          </Section>
        </main>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
