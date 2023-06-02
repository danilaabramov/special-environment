import {Link} from "react-router-dom";

export default function Button({text, menu = false, color, height, width, to}) {
    return (<Link to={to} style={{width, textTransform: 'uppercase'}}>
        <div className='button-bar text-button-home'
             style={{borderRadius: 0, background: color, height, width: 'calc(100% - 40px)', fontSize: 20}}>
            <div className='text-button-bar'>
                <div className='text-container-button-bar'>
                    {text}
                </div>
            </div>
        </div>
    </Link>);
}
