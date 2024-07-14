import logoCamera from '../img/logo_camera.png'

function Navbar(darkMode, toggleDarkMode) {
    return (
        <div className="bg-white dark:bg-darkMode shadow-md">
                <div className="container mx-auto flex items-center justify-between py-2 px-6">
                    <div className="flex items-center">
                        <img src={logoCamera} alt="Logo" className="h-20 w-20 mr-3" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Secure Cam Vision</span>
                    </div>
                    <nav className="flex space-x-7">
                        <a href="#home" className="text-gray-800 dark:text-white hover:underline font-semibold">Home</a>
                        <a href="#servicios" className="text-gray-800 dark:text-white hover:underline font-semibold">Servicios</a>
                        <a href="#clientes" className="text-gray-800 dark:text-white hover:underline font-semibold">Clientes</a>
                        <a href="#nosotros" className="text-gray-800 dark:text-white hover:underline font-semibold">Nosotros</a>
                        <a href="#contacto" className="text-gray-800 dark:text-white hover:underline font-semibold">Contacto</a>
                    </nav>
                    
                </div>
            </div>
    )
}

export default Navbar