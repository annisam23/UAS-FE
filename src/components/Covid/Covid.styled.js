import styled from "styled-components";

const StyledCovid = styled.div`
    box-shadow: 0 3px 20px rgba(0, 0, 0,0.3);
    border-radius: 12px;
    background-color: white;
    padding: 30px;
    margin-top: 30px;
    width: 100%;
    height: auto;

    h3{
        margin-top: 24px;
        font-size: 2.44rem;
        color:black;
        font-weight: 800;
        margin-bottom:10px;
    }

    p{
        font-size: 1.5rem;
        color:black;
        font-weight: 500;
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

export default StyledCovid;