/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom';
import StyledList from "./List.styled";

const List = () =>{
    return(
        <StyledList>
        <div>
            <ul>
                        <li><Link to="/">Global</Link></li>
                        <li><Link to="/indonesia">Indonesia</Link></li>
                        <li><Link to="/provinsi">Provinsi</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
        </div>
        </StyledList>
    )
}
export default List;