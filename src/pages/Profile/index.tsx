import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

type ProfileProps = {
    title: string;
}

export default function Profile(props: ProfileProps){
    return (
        <div>
            <h1>{props.title}</h1>
            
            <Navigation></Navigation>
        </div>
    )
}