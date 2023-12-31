import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navBar">
            <h1>The Social Memoir</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-blog">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
