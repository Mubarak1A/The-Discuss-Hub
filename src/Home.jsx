import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok) {
                    throw Error (`${res.status}, could not fetch the data resource`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
        }, 1000)},
     [])

    return ( 
        <div className="home">
            {error && <div className="error-message">{error}</div>}
            {isPending && <div className="loading">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
        </div>
     );
}
 
export default Home;