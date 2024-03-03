import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className="bg-white relative h-screen">
            <h2 className="pt-6 md:pt-10 text-2xl w-1/5 text-center md:text-left font-semibold text-gray-900
            border-b-4 border-blue-400 mb-4 mx-auto md:mx-5 md:text-4xl">
                contact
            </h2>

            <div className=" px-6 py-2">
                <div className='p-1 text-gray-800 text-lg font-light'>
                    <p className='p-2 flex justify-center md:justify-between'> submit the form below to get in touch with me </p>
                    <div className="max-w-4/5  mx-auto">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                                    name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline focus:bg-blue-50 hover:bg-blue-50 transition 100"
                                    id="name"
                                    type="text"
                                    placeholder="your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                                    email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline focus:bg-blue-50 hover:bg-blue-50 transition 100"
                                    id="email"
                                    type="email"
                                    placeholder="your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                                    message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    ocus:outline-none focus:shadow-outline focus:bg-blue-50 hover:bg-blue-50 transition 100"
                                    id="message"
                                    placeholder="your message"
                                    rows="6"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-center md:justify-between">
                                <button
                                    className=" bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-12 rounded-full
                                    focus:outline-none focus:shadow-outline transition 100"
                                    type="submit"
                                >
                                    send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact