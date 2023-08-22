import Header from "../components/Header"
import Layout from "../components/Layout"
import Auth from "./Auth"

const Home = () => {
    return (
        <>
            <Header title="Pleasure Bee" />
            <Layout>
                <Auth />
            </Layout>
        </>
    )
}

export default Home