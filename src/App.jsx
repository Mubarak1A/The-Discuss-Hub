import BlogDetails from './components/BlogDetails'
import CreateBlog from './components/CreateBlog'
import Navbar from './Navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'

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
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  )
}

export default App
