import { useState, useEffect } from 'react';
import { Image } from 'primereact/image';
import logo from '../assets/logo-footer.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';


const FooterSection = ({ title, informations, isMobile }) => {
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="p-2">
      <button
        className="w-full text-left font-semibold text-lg text-white mb-2 flex justify-between items-center"
        onClick={() => isMobile && setOpen((prev) => !prev)}
      >
        {title}
        {isMobile && <span>{open ? '−' : '+'}</span>}
      </button>

      {open && (
        <ul className="flex flex-col gap-2 pl-2">
          {informations.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className="text-sm text-[#a9a9a9] hover:text-[#f93c9a] hover:underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <footer className="bg-[#333333] text-white w-full">
      
      <div className="flex flex-col md:flex-row justify-between gap-8 p-6 max-w-7xl mx-auto">

        
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-5">
          <Image src={logo} alt="Logo" width="200" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores at et illo reiciendis fugit voluptas expedita
            consequuntur iste veniam! Rem maiores voluptatibus eligendi
            in? In tempore reiciendis ipsum quia veritatis?
          </p>
          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:brightness-75">
              <Image src={facebook} alt="Facebook" width="12" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:brightness-75">
              <Image src={instagram} alt="Instagram" width="20" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="transition-all hover:brightness-75">
              <Image src={twitter} alt="Twitter" width="20" />
            </a>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col md:flex-row gap-8 mt-6 md:mt-0 justify-between">
          <FooterSection
            title="Informação"
            informations={[
              { text: "Sobre Drip Store", link: "/about" },
              { text: "Segurança", link: "/seguranca" },
              { text: "Wishlisties", link: "/wishlist" },
              { text: "Blog", link: "/blog" },
              { text: "Trabalhe Conosco", link: "/trabalhe-conosco" },
              { text: "Meus Pedidos", link: "/meus-pedidos" }
            ]}
            isMobile={isMobile}
          />

          <FooterSection
            title="Categoria"
            informations={[
              { text: "Camisa", link: "/produtos/camisa" },
              { text: "Calça", link: "/produtos/calca" },
              { text: "Bonés", link: "/produtos/bones" },
              { text: "Headfones", link: "/produtos/headfones" },
              { text: "Tênis", link: "/produtos/tenis" }
            ]}
            isMobile={isMobile}
          />

          <FooterSection
            title="Contato"
            informations={[
              { text: "Endereço", link: "/contato/endereco" },
              { text: "Telefone", link: "/contato/telefone" }
            ]}
            isMobile={isMobile}
          />
        </div>
      </div>

    
      <div className="border-t border-gray-600 text-center py-4 text-sm text-white">
        &copy; 2025 Digital College. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

