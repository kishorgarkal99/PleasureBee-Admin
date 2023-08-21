import Header from "./components/Header"

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Header title="PleasureBee" />
        <main className="w-full h-full flex justify-center items-center">
          <h1 className="text-4xl font-bold">Pleasure Bee</h1>
        </main>
      </div>
    </>
  )
}

export default App
