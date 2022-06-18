import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

type FeedProps = {
    title: string;
}

export default function Feed(props: FeedProps){
    return (
        <div>
            <h1>{props.title}</h1>
            
            <Navigation></Navigation>
        </div>
    )
}