import CreateBlog from './CreateBlog'
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
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create-blog'>
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
