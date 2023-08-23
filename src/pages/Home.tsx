import Header from "../components/Header"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Auth from "./Auth"

const Home = () => {
    return (
        <div className="w-full flex h-screen ">
            <Sidebar />
            <div className="w-full">
                <Header title="Pleasure Bee" />

                <Layout>
                    <Auth />
                </Layout>
            </div>

        </div>
    )
}

export default Home