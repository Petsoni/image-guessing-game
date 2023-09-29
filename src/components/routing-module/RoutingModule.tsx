import './RoutingModule.style.scss'
import {Link} from "react-router-dom";

const RoutingModule = () => {
    return (
        <div className={'routing-module-wrapper'}>
            <Link className={'router-button play'} to={"/play"}>Play</Link>
            <Link className={'router-button'} to={"/"}>Home</Link>
            <Link className={'router-button'} to={'/about'}>About</Link>
            <Link className={'router-button'} to={'/gallery'}>Gallery</Link>
        </div>
    );
};

export default RoutingModule;
