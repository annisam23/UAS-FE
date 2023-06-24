import styled from "styled-components";

    const StyledHero = styled.div`
    margin: 1rem;

    section{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .hero_left{
        margin-bottom: 1rem;
    }
    h2{
        color: salmon;
        margin: 1rem;
        font-size: 2.44rem;
    }
    h4{
        color:#118AB2;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }
    p{
        color: grey;
        margin-bottom: 1rem;
    }
    img{
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }
    /*Medium Screen*/
@media(min-width:768px){

}

/*Large Screen*/
@media(min-width:922px){
        max-width: 1200px;
        margin: 3rem auto;
    

    section{
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .hero_left{
        flex-basis: 40%;
    }

    .hero_left{
        flex-basis: 60%;
    }
}
}
`;

export default StyledHero;