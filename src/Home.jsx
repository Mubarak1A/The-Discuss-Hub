import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome Party", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    return ( 
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{  blog.title }</h2>
                    <p>Written by: <strong>{ blog.author }</strong></p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;