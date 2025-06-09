import { Link, NavLink } from "react-router-dom";
import 'primeflex/primeflex.css';
import Busca from "./Busca";
import Logo from "./Logo";
import '../App.css';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { useState } from "react";
import car from '../assets/mini-cart.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setShowSearch(!showSearch);

    return (
        <header className="w-full border-b border-gray-200 pb-2">
           
            <div className="flex justify-between items-center p-4 md:hidden">
               
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    <svg className="w-6 h-6 text-[#EC4899]" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                
                <div className="flex-1 text-center">
                    <Logo />
                </div>

                
                <div>
                    {showSearch ? (
                        <div className="absolute top-16 right-4 left-4 bg-white p-2 rounded shadow-md z-50">
                            <div className="flex justify-between items-center">
                                <Busca />
                                <button onClick={toggleSearch} aria-label="Fechar busca" className="ml-2 text-[#EC4899]">
                                    ✕
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={toggleSearch} aria-label="Abrir busca">
                            <svg className="w-6 h-6 text-[#EC4899]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            
            <div className="hidden md:flex items-center justify-between p-4">
                <Logo />
                <Busca />
                <div className="flex items-center gap-2">
                    <Link to={""} className="underline text-[#a9a9a9] hover:text-[#f93c9a]">
                        Cadastre-se
                    </Link>
                    <Button label="Entrar" className="w-28 h-10 text-sm" />
                </div>
                <Image src={car} alt="Carrinho" width="30px" />
            </div>

           
            <div className={`md:flex md:items-center md:gap-6 px-4 md:px-8 flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <nav className="flex flex-col md:flex-row gap-2 md:gap-6 pt-2 md:pt-0">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-[#EC4899] underline" : "text-[#a9a9a9] hover:underline"}>Home</NavLink>
                    <NavLink to="/produtos" className={({ isActive }) =>
                        isActive ? "text-[#EC4899] underline" : "text-[#a9a9a9] hover:underline"}>Produtos</NavLink>
                    <NavLink to="/produto/1" className={({ isActive }) =>
                        isActive ? "text-[#EC4899] underline" : "text-[#a9a9a9] hover:underline"}>Categorias</NavLink>
                    <NavLink to="/entrar" className={({ isActive }) =>
                        isActive ? "text-[#EC4899] underline" : "text-[#a9a9a9] hover:underline"}>Meus Pedidos</NavLink>

                    
                    <div className="flex flex-col gap-2 mt-2 md:hidden">
                        <Link to={""} className="underline text-[#a9a9a9] hover:text-[#f93c9a]">
                            Cadastre-se
                        </Link>
                        <Button label="Entrar" className="w-full h-10 text-sm" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;


