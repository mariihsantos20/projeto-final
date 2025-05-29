import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductListingPage = () => {
    return ( <div>
<div>
<Section>



{/* Aqui vc coloca o Ordenar por e Filtrar por */}



</Section>
 </div>



        {/* Cards de Produtos*/}
   <div className="flex justify-around flex-wrap px-4 ml-8">
  <Section 
    title="Produtos em alta"
    link={{ text: 'Ver todos -', href: '/novidades' }}
  >
    <div className="flex flex-wrap justify-around">
      <ProductListing products={products} />
    </div>
  </Section>
</div>
</div>
     );
}
 
export default ProductListingPage;