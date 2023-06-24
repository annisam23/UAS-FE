import styled from "styled-components";

const StyledCard = styled.div`
.card {
    width: 18rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }
  
  img{
    width: 100%;
    height: auto;
  }
  
  .cardBody {
    padding: 16px;
  }
  
  h6 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    
  }
  
  p{
    margin: 8px 0;
  }

  a {
    text-decoration: none;
    color: salmon;
  }
  
  a:hover{
    color: blueviolet;
  }

  a:active{
    color: slategray;
  }
`;
export default StyledCard;
