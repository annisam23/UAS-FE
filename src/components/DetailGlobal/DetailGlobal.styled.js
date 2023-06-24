import styled from "styled-components";

const StyledDetailGlobal = styled.div`
    box-shadow: 0 3px 20px rgba(0, 0, 0,0.3);
    border-radius: 12px;
    background-color: white;
    padding: 30px;
    margin-top: 30px;
    width: 100%;
    height: auto;

    h3{
        margin-top: 10px;
        font-size: 1.44rem;
        color:black;
        font-weight: 800;
    }

    p{
        font-size: 0.93rem;
        color:black;
        font-weight: 500;
        text-align:left;
    }

    @media(min-width:768px){
            margin-left: 40px;
    }
    
    @media(min-width:992px){
            margin-left: 70px;
            width: 300px;
            height: 230px;
    }
`;

export default StyledDetailGlobal;