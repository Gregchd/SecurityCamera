import React, {useState, useEffect} from 'react'
import logo from '../img/logo.jpg'
import logoCamera from '../img/logo_camera.png'
import logo_wsp from '../img/logo_wsp.png'
import Carousel from "../components/Carousel";
import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

function HomePage() {
    const [darkMode, setDarkMode] = useState(true)

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
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <section id="home" className=" text-center h-[85vh] flex justify-evenly flex-col xl:flex-row">
                <div className="mx-[7vw] xl:ml-[7vw]">
                    <div className="text-5xl mt-[18vh] text-left font-roboto">Protege lo que más importa con nuestras cámaras de seguridad</div>
                    <div className="mt-[2.5vh] text-xl text-left">Instalación fácil, rápida y a tu medida</div>
                    <div className="flex mt-[8vh]">
                        <a href="#contacto" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-xl">Contactanos</a>
                    </div>              
                </div>
                <div className=" xl:w-[80vw]">
                    {/* <img src={logo} alt="camara" className="h-5/6"/> */}
                    <Spline scene="https://prod.spline.design/zeIMNB-tX11U7GyZ/scene.splinecode" className=""/>
                </div>             
            </section>
            <section id="servicios" className="items-center text-center h-screen flex justify-evenly">
                <div>Servicios</div>
            </section>
            <section id="clientes" className="items-center text-center h-screen flex flex-col justify-evenly">
                <div className="">
                    <div className="text-4xl">Clientes</div>
                </div>
                <div className="flex w-[70vw] mb-[25vh]">
                    <Carousel />
                </div>                
            </section>
            <section id="nosotros" className="items-center text-center h-screen flex justify-evenly">
                <div>En C&C Security, nos dedicamos a brindar soluciones avanzadas de seguridad mediante la instalación de cámaras de alta calidad. Con años de experiencia, nuestro equipo de expertos ofrece un servicio personalizado y profesional para hogares y negocios. Utilizamos las últimas tecnologías para garantizar una vigilancia efectiva y confiable, adaptándonos a tus necesidades específicas. Confía en nosotros para proteger lo que más valoras</div>
            </section>
            <section id="contacto" className="items-center text-center h-screen flex justify-evenly">
                <ContactForm />
                <a href="https://wa.me/51949332688"><img src={logo_wsp} alt="whatsapp" className="h-1/6"/></a>
            </section>
        </div>
    );
}

export default HomePage