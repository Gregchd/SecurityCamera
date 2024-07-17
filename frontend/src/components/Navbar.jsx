import { useState } from 'react';
import logoCamera from '../img/logo_SCV.svg';

function Navbar({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white dark:bg-darkMode shadow-md">
            <div className="container mx-auto flex items-center justify-between py-2 px-6">
                <div className="flex items-center">
                    <img src={logoCamera} alt="Logo" className="h-20 w-20 mr-3" />
                    <span className="text-xl font-bold text-gray-800 dark:text-white">Secure Cam Vision</span>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col md:flex md:flex-row md:space-x-7 ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="#home" className="text-gray-800 dark:text-white hover:underline font-semibold">Home</a>
                    <a href="#servicios" className="text-gray-800 dark:text-white hover:underline font-semibold">Servicios</a>
                    <a href="#clientes" className="text-gray-800 dark:text-white hover:underline font-semibold">Clientes</a>
                    <a href="#nosotros" className="text-gray-800 dark:text-white hover:underline font-semibold">Nosotros</a>
                    <a href="#contacto" className="text-gray-800 dark:text-white hover:underline font-semibold">Contacto</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;