import { Link } from "react-router-dom";

type LoginProps = {
    title: string;
}

export default function Login(props: LoginProps){
    return (
        <div>
            <h1>{props.title}</h1>
            <nav>
                <Link to="/feed">Auto Login</Link>
            </nav>
            <p>Click 'Auto Login' (above) to go to Feed page</p>
        </div>
    )
}