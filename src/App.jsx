import BlogDetails from './components/BlogDetails'
import CreateBlog from './CreateBlog'
import Navbar from './Navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const title = "Welcome to this Blog"

  return (
    <>
    <Router>
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create-blog'>
              <CreateBlog />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  )
}

export default App
