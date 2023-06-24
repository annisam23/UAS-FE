/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import StyledCovid from "./Covid.styled";

function Covid (props) {
    const {covid} = props;
    let totalColor;

    if (covid.total === 767984989) {
        totalColor = 'salmon';
    } else if (covid.total === 761041599) {
        totalColor = '#118AB2';
    } else {
        totalColor = 'red';
    }
    return (
        <StyledCovid>
            <div>
            <h3>{covid.status}</h3>
            <p style={{ color: totalColor }}>{covid.total}</p>
        </div>
        </StyledCovid>
        
    );
}

export default Covid;