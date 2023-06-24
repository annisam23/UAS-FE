import styled from "styled-components";

const StyledForm = styled.div`
    margin: 5rem 1rem;
    padding: 1rem;

    section{
        display: flex;
        flex-direction: column;
    }

    img{
        max-width: 100%;
        border: 10px;
        height: auto;
    }

    .form_left{
        display: none;
    }

    h2{
        text-align: center;
        color:salmon;
        font-size: 2.44rem;
        margin-bottom: 2px;
    }

    .form_group{
        display: flex;
        flex-direction: column;
        margin-bottom: 2px;
    }

    label{
        margin-bottom: 2px;
    }

    input,select{
        outline: none;
        padding: 1rem 0.5rem;
        border-radius: 8px;
        border: 1px solid salmon;
    }

    select{
        background-color: #fff;
    }

    /*Large Screen*/
@media(min-width:992px){
        max-width: 1200px;
        margin: 5rem auto;
    

    section{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .form_left{
        display: block;
        flex-basis: 60%;
    }

    .form_right{
        flex-basis: 40%;
    }
}

`;
export default StyledForm;
