import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div>
            <nav>
                <Link to="/">Logout</Link>
                <Link to="/feed">Feed</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </div>
    )
}