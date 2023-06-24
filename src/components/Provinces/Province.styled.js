import styled from "styled-components";

const StyledProvinces = styled.div`
        text-align: center;
        padding: 1rem;

    h2{
        margin-bottom: 1rem;
        font-size: 2.44rem;
        color: salmon;
    }

    h4{
        margin-bottom: 1rem;
        font-size: 1.44rem;
        color: #118AB2;
    }
    table{
        text-align: center;
        overflow-x:auto;
        height: auto;
        width: fit-content;
        padding: 10px;
    }
    
    th,td{
        border: 1px solid #ddd;
    }
    th{
        color: salmon;
        font-weight: bold;
    }
    tr:hover {
        background-color:  #118AB2;
    }
    
    /*Medium SCreen*/
    @media (min-width:768px){
        th,td{
            padding: 10px;
            
        }
    }
    
    /*Large Screen*/
    @media(min-width:992px){
        table{
            max-width: 1200px;
            margin: 0 auto;
            width:75%;
        }
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
`;

export default StyledProvinces;