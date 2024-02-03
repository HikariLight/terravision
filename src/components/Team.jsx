import Layout from "./Layout"
import Drone from "../assets/drone.jpg"
import TonyStark from "../assets/stark.jpg"
import ElonMusk from "../assets/musk.jpg"
import GretaThunberg from "../assets/thunberg.jpg"

const Team = () => {
    return (
        <Layout>
            <section
                className="grid h-full w-full place-items-center py-12 md:py-24 lg:py-32"
                id="team">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Meet the Team
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our team is composed of experts in robotics and
                                environmental sustainability, committed to
                                creating a cleaner planet.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={TonyStark}
                                alt="Tony Stark"
                            />
                            <h3 className="text-xl font-bold">Tony Stark</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Expert in Robotics
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={ElonMusk}
                                alt="Elon Musk"
                            />
                            <h3 className="text-xl font-bold">Elon Musk</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Expert in AI
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="h-auto w-64"
                                src={GretaThunberg}
                                alt="Greta Thunberg"
                            />
                            <h3 className="text-xl font-bold">
                                Greta Thunberg
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Expert in Environmental Sustainability
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Team
