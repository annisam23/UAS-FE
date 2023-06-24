import styled from "styled-components";

const StyledGlobal = styled.div`
    text-align: center;
    padding: 1rem;

    h2{
        margin: 2rem;
        font-size: 2.44rem;
        color: salmon;
    }
    
    h4{
        margin-top: 1rem;
        font-size: 1.44rem;
        color: #118AB2;
    }
    
    .covid {
        box-shadow: 0 3px 20px rgba(0, 0, 0,0.2);
        border-radius: 12px;
        background-color: white;
        padding: 30px;
        margin-left: 70px;
    }

    @media(min-width:768px){
            max-width: 1200px;
            margin: 0 auto;
    
        .covid_container{
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    
    @media(min-width:992px){
            max-width: 1200px;
            margin: 3rem auto;
    }
`;

export default StyledGlobal;