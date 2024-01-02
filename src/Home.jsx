import BlogList from "./components/BlogList";
import useFetch from "./components/usefetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/db")

    return ( 
        <div className="home">
            {error && <div className="error-message">{error}</div>}
            {isPending && <div className="loading">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
        </div>
     );
}
 
export default Home;
