import styled from "styled-components";

const StyledIndonesia = styled.div` 
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            text-align: center;

        h2{
            margin: 1.2rem;
            font-size: 2.44rem;
            color: salmon;
            text-align:center;
        }
        h4{
            margin-bottom: 1rem;
            font-size: 1.44rem;
            color: #118AB2;
            text-align:center;
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
        
        
        .covid {
            box-shadow: 0 3px 20px rgba(0, 0, 0,0.2);
            border-radius: 12px;
            background-color: white;
            padding: 30px;
            margin-left: 70px;
        }
        
        /*Medium SCreen*/
        @media (min-width:768px){
            th,td{
                padding: 10px;
                
            }
            max-width: 1200px;
            margin: 0 auto;
    
        .covid_container{
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
        }

        /*Large Screen*/
        @media(min-width:992px){
            max-width: 1200px;
            margin: 3rem auto;

            table{
                max-width: 1200px;
                margin: 0 auto;
                width:75%;
            }
        }

`;
export default StyledIndonesia;