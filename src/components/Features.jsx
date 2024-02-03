import Layout from "./Layout"

const Features = () => {
    return (
        <Layout>
            <section className="grid h-full w-full place-items-center bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Key Features
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Our Robots
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our robots are designed with the latest
                                technology to ensure efficient and eco-friendly
                                cleaning. Here are some of their key features.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-xl font-bold">
                                Eco-friendly Cleaning
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our robots use environmentally friendly methods
                                to clean, reducing waste and eliminating harmful
                                chemicals.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-xl font-bold">
                                Autonomous Operation
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                With advanced AI, our robots can operate
                                independently, navigating and cleaning without
                                human intervention.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-xl font-bold">
                                Advanced Sensors
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our robots are equipped with state-of-the-art
                                sensors to detect dirt and navigate around
                                obstacles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Features
