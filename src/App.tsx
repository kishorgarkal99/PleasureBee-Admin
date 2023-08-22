import Header from "./components/Header"
import Layout from "./components/Layout"
import Auth from "./pages/Auth"

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Header title="PleasureBee" />
        <Layout>
          <Auth />
        </Layout>
      </div>
    </>
  )
}

export default App
