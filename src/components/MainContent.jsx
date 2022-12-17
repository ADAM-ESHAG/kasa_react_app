//-----MainContent----//
import { Link } from 'react-router-dom'


export function MainContent(props) {
    return (
            
                <div className="logement">
                    <Link key={props.item.id} to={`Logement/${props.item.id}`}>
                        <img src={props.item.cover} alt="logement" />
                        <p className="title"><strong>{props.item.title}</strong></p>
                    </Link>
                </div>
            
        
    )
}