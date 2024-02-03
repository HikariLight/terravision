import Layout from "./Layout"
import Drone from "../assets/drone.jpg"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <Layout>
            <section
                className="grid h-full w-full place-items-center py-12 md:py-24 lg:py-32 dark:bg-gray-800"
                id="about">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <img
                            alt="Image"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src={Drone}
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    About Us
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Our Mission
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Terravision is dedicated to developing
                                    robots that can clean and preserve the
                                    planet. We are committed to creating
                                    innovative technologies that help us achieve
                                    our mission.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    to="/contact"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                    Contact Sales
                                </Link>
                                <a
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    href="#features">
                                    Tour the Platform
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
