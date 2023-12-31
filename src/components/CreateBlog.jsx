import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);

        fetch('https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/db', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setTimeout(() => setIsPending(false), 1000)
            history.push('/')
        })
    }

    return ( 
        <div className="create-blog">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    rows='5'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;