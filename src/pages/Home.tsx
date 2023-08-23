import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Home = () => {
    return (
        <div className="w-full flex h-screen ">
            <Sidebar />
            <div className="w-full">
                <Header title="Pleasure Bee" />
                <h1 className="text-center text-4xl font-bold">Dashboard home</h1>
            </div>
        </div>
    )
}

export default Home