import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    const handleDelete = () => {
        fetch('https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/db/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="home">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{  blog.title }</h2>
                        <p>Written by: <strong>{ blog.author }</strong></p>
                    </Link>
                    <button onClick={handleDelete}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;