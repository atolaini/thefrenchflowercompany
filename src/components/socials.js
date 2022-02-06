import React from 'react';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const socials = (props) => {

return(
    <div className='socials-container'>
        <Link to='https://www.facebook.com/thefrenchflowercompany'>
            <FontAwesomeIcon icon={faFacebook} color='#a88855' size={props.iconSize}/>
        </Link>
        <Link to='https://www.instagram.com/thefrenchflowercompany/'>
            <FontAwesomeIcon icon={faInstagram} color='#a88855' size={props.iconSize}/>
        </Link>
    </div>
)

}

export default socials;