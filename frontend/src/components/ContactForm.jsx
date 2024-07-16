import React from 'react'

function ContactForm() {
    return (
        <div className="container mx-auto p-4 max-w-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className=" text-gray-700 text-sm font-bold mb-2 flex justify-start" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                />
                </div>
                <div className="mb-4">
                <label className="flex text-gray-700 text-sm font-bold mb-2 justify-start" htmlFor="email">
                    Correo
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Tu correo"
                />
                </div>
                <div className="mb-4">
                <label className="flex text-gray-700 text-sm font-bold mb-2 justify-start" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Tu mensaje"
                    rows="5"
                />
                </div>
                <div className="flex items-center justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Enviar
                    </button>
                </div>
            </form>
    </div>
    )
}

export default ContactForm