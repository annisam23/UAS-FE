/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import StyledCovid from "./DetailGlobal.styled";
import { FaCheck} from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaSkull } from 'react-icons/fa';

function DetailGlobal (props) {
    const {covid} = props;
    return (
        <StyledCovid>
            <div>
            <h3>{covid.name}</h3><br></br>
                <p style={{ color: "salmon"}}>Confirmed: {covid.numbers.confirmed} 
                    <FaCheck/>
                </p>
                <p style={{ color: '#118AB2'}}>Recovered: {covid.numbers.recovered}
                    <FaArrowUp />
                </p>
                <p style={{ color: "red"}}>Death: {covid.numbers.death}
                    <FaSkull />
                </p>
        </div>
        </StyledCovid>
        
    );
}

export default DetailGlobal;