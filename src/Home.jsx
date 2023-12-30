import { useState } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome Party", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    return ( 
        <BlogList blogs={blogs} />
     );
}
 
export default Home;