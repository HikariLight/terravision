import { Link } from "react-router-dom"
import Layout from "./Layout"

const Contact = () => {
    return (
        <Layout>
            <nav className="flex w-full justify-center space-x-4 pt-8">
                <Link to="/" className="hover:opacity-60">
                    Home
                </Link>
                <Link to="/contact" className="hover:opacity-60">
                    Contact
                </Link>
            </nav>

            <div className="grid h-full w-full place-items-center bg-gradient-to-bl from-white to-emerald-100">
                <form className="flex w-full max-w-sm space-x-3">
                    <div className="m-auto mt-10 w-full max-w-2xl rounded-xl bg-white px-5 py-10 shadow dark:bg-gray-800">
                        <div className="mb-6 text-center text-3xl font-light text-emerald-700 dark:text-white">
                            Contact us !
                        </div>
                        <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        id="contact-form-name"
                                        className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        id="contact-form-email"
                                        className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                        placeholder="email"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700" for="name">
                                    <textarea
                                        className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                        id="comment"
                                        placeholder="Enter your comment"
                                        name="comment"
                                        rows="5"
                                        cols="40"></textarea>
                                </label>
                            </div>
                            <div className="col-span-2 text-right">
                                <button
                                    type="submit"
                                    className="w-full rounded-lg  bg-emerald-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2  focus:ring-offset-emerald-200 ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Contact
