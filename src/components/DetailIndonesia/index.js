/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import StyledDetail from "./Detail.styled";

function DetailIndonesia (props) {
    const {covid} = props;
    let totalColor;

    if (covid.total > 6800000) {
        totalColor = 'salmon';
    } else if (covid.total > 6600000) {
        totalColor = '#118AB2';
    } else {
        totalColor = 'red';
    }
    return (
        <StyledDetail>
            <div>
            <h3>{covid.status}</h3><br></br>
            <p  style={{ color: totalColor }} >{covid.total}</p>
        </div>
        </StyledDetail>
        
    );
}

export default DetailIndonesia;