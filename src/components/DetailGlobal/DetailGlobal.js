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
            <h3>{covid.name}</h3>
                <p style={{ color: "salmon"}}>Confirmed<br></br> {covid.numbers.confirmed} 
                    <FaCheck/>
                </p>
                <p style={{ color: '#118AB2'}}>Recovered<br></br> {covid.numbers.recovered}
                    <FaArrowUp />
                </p>
                <p style={{ color: "red"}}>Death<br></br> {covid.numbers.death}
                    <FaSkull />
                </p>
        </div>
        </StyledCovid>
        
    );
}

export default DetailGlobal;