import { useState } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome Party", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    const handleDelete =  (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id );
        setBlogs(newBlogs);
    }

    return ( 
        <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>
     );
}
 
export default Home;