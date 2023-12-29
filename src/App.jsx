import Navbar from './Navbar'
import './App.css'

function App() {
  const title = "Welcome to this Blog"

  return (
    <>
      <div className="content">
        <Navbar />
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default App
