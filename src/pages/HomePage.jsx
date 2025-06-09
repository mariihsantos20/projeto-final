import Galery from "../components/Galery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Icon from "../components/Icons";

const HomePage = () => {
 const products = [
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
           image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "/tenis.png",
            price: 200,
            priceDiscount: 100
        }
    ];
   
  return (
   <div>
    {/* Carrosel - Galeria */}
   <div className="flex md:flex-row">
    <Section>
     <div className="bg-[#F5F5F5] flex flex-wrap-reverse align-items-center justify-content-center">
      
      <div>
        <p className="mb-2 text-[#F6AA1C] font-bold">Melhores ofertas personalizadas</p>
        <p className="mb-2 text-[#1F1F1F] text-7xl font-bold ">Queima de<br/> stoque Nike 🔥</p>
        <p className="mb-2 text-[#474747]">Consequat culpa exercitation mollit nisi excepteur do <br/> do tempor laboris eiusmod irure consectetur.</p>
        <Button label="Ver Ofertas"
        style={{
          height:'30px'
        }} />
     </div>
     <div className="flex"><Galery/>
      <div><Image src="/ornament.png" alt="ornament" width="240px" /></div>
      </div>
     </div>
    </Section>
   </div>

  


{/* Produtos em Destaque */}
<div className="w-full px-4 py-10 flex flex-col items-center">
  <Section 
    title="Coleções em destaque" 
    titleAlign="center" 
    className="w-full max-w-6xl"
  >
    <div className="flex flex-wrap justify-center gap-6 items-start">
      {[1, 2, 3].map((num) => (
        <div key={num} className="relative w-[90%] sm:w-[250px] md:w-[300px]">
          <Image
            src={`/collection-${num}.png`}
            alt={`Coleção ${num}`}
            imageClassName="rounded-lg w-full"
          />
          <Button
            label="30% OFF"
            severity="success"
            rounded
            className="absolute top-0 left-0 m-2 text-xs"
            style={{
              height: '24px',
              fontSize: '12px',
              padding: '0 10px',
            }}
          />
          <Button
            label="Comprar"
            text
            raised
            className="absolute top-32 left-3 text-xs"
            style={{
              width: '120px',
              height: '35px',
              fontSize: '12px',
              padding: '0 10px',
              backgroundColor: 'white',
            }}
          />
        </div>
      ))}
    </div>
  </Section>
</div>



     {/* Icones Centrais */}
<div className="w-full px-4 py-10 flex flex-col items-center text-center">
  <Section title="Coleções em destaque" titleAlign="center">
    <div className="flex flex-col items-center">
      <Icon />
    </div>
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
{/*Jordan Oferta*/}
    <div>
      <Section>
 <div className="bg-[#F5F5F5] flex flex-wrap-reverse items-center justify-center gap-8 py-10 px-4">
  {/* Imagens sobrepostas */}
  <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-[4/3]">
    
    {/* Ellipse (fundo) */}
    <Image 
      src="/Ellipse 11.png" 
      alt="Ellipse" 
     className="object-contain absolute top-0 left-30 z-0"
    />

    {/* Jordan (frente) */}
    <Image 
      src="/jordan.png" 
      alt="Jordan" 
      className="object-contain absolute top-8 left-0 z-10"
    />

  </div>
 <div className="max-w-xl text-center md:text-left">
      <p className="mb-2 text-[#C92071] font-bold">Oferta Especial</p>
      <p className="mb-4 text-[#1F1F1F] text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
        Air Jordan edição de<br />colecionador
      </p>
      <p className="mb-4 text-[#474747] text-sm md:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
        Rem consequatur veniam minus iusto doloribus aspernatur facilis similique, at molestias<br />
        aliquam autem cupiditate reiciendis distinctio hic, delectus et sed illum accusamus!
      </p>
      <Button
        label="Ver Ofertas"
        style={{ height: '30px' }}
      />
    </div>
    
  </div>
</Section>

    </div>
   </div>
  );
};

export default HomePage;