import Navbar from './Navbar'
import Home from './home'

function App() {
  const title = "Welcome to this Blog"

  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  )
}

export default App
