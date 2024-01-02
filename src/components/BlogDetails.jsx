import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/db/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/db/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: <strong>{ blog.author }</strong></p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;