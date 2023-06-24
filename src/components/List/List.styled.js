import styled from "styled-components";

const StyledList = styled.div`
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }
    li{
        margin-bottom: 1rem;
    }
    a{
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
    }
    
    a:hover{
        color: grey;
    }
    
    a:active{
        color: beige;
    }
    /*Medium Screen*/
    @media(min-width:768px){
        
        ul{
            flex-direction: row;
        }
        li{
            margin: 0 1rem;
        }
        
    }
    
    /*Large Screen*/
    @media(min-width:992px){
        
    }
`;

export default StyledList;