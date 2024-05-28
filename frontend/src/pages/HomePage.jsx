import React, {useState, useEffect} from 'react'
import logo from '../img/logo.jpg'
import Carousel from "../components/Carousel";

function HomePage() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode){
            document.documentElement.classList.add('dark');
        } else{
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="min-h-screen  bg-white dark:bg-darkMode text-black dark:text-white">
            <header className="bg-white dark:bg-darkMode shadow-md">
                <div className="container mx-auto flex items-center justify-between py-7 px-6">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">C&C Security</span>
                    </div>
                    <nav className="flex space-x-7">
                        <a href="#home" className="text-gray-800 dark:text-white hover:underline font-semibold">Home</a>
                        <a href="#servicios" className="text-gray-800 dark:text-white hover:underline font-semibold">Servicios</a>
                        <a href="#clientes" className="text-gray-800 dark:text-white hover:underline font-semibold">Clientes</a>
                        <a href="#nosotros" className="text-gray-800 dark:text-white hover:underline font-semibold">Nosotros</a>
                        <a href="#contacto" className="text-gray-800 dark:text-white hover:underline font-semibold">Contacto</a>
                    </nav>
                    <button onClick={toggleDarkMode} className="px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700">
                        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                    </button>
                </div>
            </header>
            <section id="home" className="items-center text-center h-screen flex justify-evenly">
                <div>Home</div>
            </section>
            <section id="servicios" className="items-center text-center h-screen flex justify-evenly">
                <div>Servicios</div>
            </section>
            <section id="clientes" className="items-center text-center h-screen ">
                <Carousel />
            </section>
            <section id="nosotros" className="items-center text-center h-screen flex justify-evenly">
                <div>En C&C Security, nos dedicamos a brindar soluciones avanzadas de seguridad mediante la instalación de cámaras de alta calidad. Con años de experiencia, nuestro equipo de expertos ofrece un servicio personalizado y profesional para hogares y negocios. Utilizamos las últimas tecnologías para garantizar una vigilancia efectiva y confiable, adaptándonos a tus necesidades específicas. Confía en nosotros para proteger lo que más valoras</div>
            </section>
            <section id="contacto" className="items-center text-center h-screen flex justify-evenly">
                <div>Contacto</div>
            </section>
        </div>
    );
}

export default HomePage