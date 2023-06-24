import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color:${({theme})=>theme.colors.primary};
  padding: 1rem;
  color: white;

  h1{
    margin-bottom: 1rem;
    font-size: 2.4rem;
    font-family: 'Pacifico', cursive;
    letter-spacing: 2px;
  }
  nav{
    display: flex;
    flex-direction: column;
  }

  /*Medium Screen*/
@media(min-width:768px){
    nav{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
  }

/*Large Screen*/
@media(min-width:992px){
    
}
`;

export default StyledNavbar;