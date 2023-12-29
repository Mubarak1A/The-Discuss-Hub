import Navbar from './Navbar'
import Home from './home'
import './App.css'

function App() {
  const title = "Welcome to this Blog"

  return (
    <>
      <div className="content">
        <Navbar />
        <Home />
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default App
