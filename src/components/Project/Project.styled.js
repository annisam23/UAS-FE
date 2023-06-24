import styled from "styled-components";

const StyledProject = styled.div`
.container {
    max-width: 1200px;
    margin: 0 auto;
    }
    
    .Pro{
        color: salmon;
        margin: 1rem;
        font-size: 2.44rem;
        text-align: center;
    }
    
    .Detail {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .Keterangan {
        flex: 0 0 calc(33.33% - 10px); 
        margin-bottom: 20px; 
    }
    
`;
export default StyledProject;
