import Layout from "./Layout"
import OpenAILogo from "../assets/partners/OpenAI.svg"
import BostonDynamicsLogo from "../assets/partners/BostonDynamics.svg"
import PlasticSoupLogo from "../assets/partners/PlasticSoup.jpg"

const Partnerships = () => {
    return (
        <Layout>
            <section
                className="grid h-full w-full place-items-center py-12 md:py-24 lg:py-32"
                id="team">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Our Partners
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We partner with industry leaders in the world of
                                AI and Robotics, as well as global convervation
                                organisations
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={OpenAILogo}
                                alt="Tony Stark"
                            />
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={BostonDynamicsLogo}
                                alt="Elon Musk"
                            />
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={PlasticSoupLogo}
                                alt="Greta Thunberg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Partnerships
