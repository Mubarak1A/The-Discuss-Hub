import Navbar from './Navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const title = "Welcome to this Blog"

  return (
    <>
      <Navbar />
      <Router>
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
