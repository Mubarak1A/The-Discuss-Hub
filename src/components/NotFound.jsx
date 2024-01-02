import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Ooops...</h2>
            <h3>Sorry, page not found</h3>
            <Link to='/'>Back to Homepage...</Link>
        </div>
     );
}
 
export default NotFound;