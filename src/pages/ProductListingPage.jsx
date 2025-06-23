import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { useState } from "react";

const ProductListingPage = () => {
  const [order, setOrder] = useState("");

  const products = [
    {
      name: "Tênis Esportivo 1",
      image: "product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Tênis Esportivo 2",
      image: "product-thumb-2.jpeg",
      price: 49.9
    },
    {
      name: "Tênis Esportivo 3",
      image: "product-thumb-3.jpeg",
      price: 300,
      priceDiscount: 279.9
    },
    {
      name: "Tênis Esportivo 4",
      image: "product-thumb-4.jpeg",
      price: 100
    },
    {
      name: "Tênis Esportivo 5",
      image: "product-thumb-5.jpeg",
      price: 120
    },
    {
      name: "Tênis Esportivo 1",
      image: "product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "Tênis Esportivo 2",
      image: "product-thumb-2.jpeg",
      price: 49.9
    },
    {
      name: "Tênis Esportivo 3",
      image: "product-thumb-3.jpeg",
      price: 300,
      priceDiscount: 279.9
    },
    {
      name: "Tênis Esportivo 4",
      image: "product-thumb-4.jpeg",
      price: 100
    },
    {
      name: "Tênis Esportivo 5",
      image: "product-thumb-5.jpeg",
      price: 120
    }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (order === "asc") return (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price);
    if (order === "desc") return (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price);
    return 0;
  });

  return (
    <div className="flex flex-col md:flex-row py-6 gap-6 max-w-full mx-7">
      
      {/* Sidebar */}
    <aside className="lg:w-[300px]"> 
        
        {/* Ordenação */}
        <div className="mb-6">
          <label
            htmlFor="order-select"
            className="block text-[16px] text-dark-gray-2 mb-2"
          >
            Ordenar por
          </label>
          <select
            id="order-select"
            className="w-full h-[50px] border border-gray-300 rounded px-3 text-dark-gray-2"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
        </div>

        {/* Filtros */}
        <div className="bg-white p-4 rounded shadow-sm">
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

      {/* Listagem */}
   <main className="w-full">
       <Section
          title={`${sortedProducts.length} produtos encontrados`}
          titleAlign="left"
        >
          
          <ProductListing products={sortedProducts} />
          
        </Section>
      </main>
      
    </div>
  );
};

export default ProductListingPage;

