import React, {useState, useEffect} from 'react'

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
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
            <header className="text-center">
                <h1 className="text-3xl font-bold mb-4">Mi Aplicación</h1>
                <button
                onClick={toggleDarkMode}
                className="px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700"
                >
                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                </button>
            </header>
        </div>
    );
}

export default HomePage