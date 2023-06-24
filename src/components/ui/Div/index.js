//import styled Components
import styled from "styled-components";

const Div = styled.div`

    background-color:${({variant,theme}) => theme.colors[variant] || theme.colors.primary }


};
`;

export default Div;