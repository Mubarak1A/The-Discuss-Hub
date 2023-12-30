const BlogList = () => {
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
 
export default BlogList;