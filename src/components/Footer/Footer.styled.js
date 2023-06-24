import styled from "styled-components";

const StyledFooter = styled.div`
  background-color:${({theme})=>theme.colors.primary};
  padding: 1rem;
  color: white;

  footer{
    display: flex;
    flex-direction: column;
  }

  a{
    color: white;
    text-decoration:none;
  }

  a:hover{
    color: grey;
  }

  a:active{
    color:beige;
  }

  h2,p{
    margin-bottom: 1rem;
    margin-left: 2rem;
    text-align: left;
  }

  h2{
    font-size: 2.4rem;
    font-family: 'Pacifico', cursive;
    letter-spacing: 2px;
  }
  
  /*Medium SCreen*/
  @media (min-width:768px){
      footer{
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
      }
      h2,p{
          margin-bottom: 0;
      }
  }
  
  /*Large SCreen*/
  @media (min-width:992px){
      
  }
`;
export default StyledFooter;
