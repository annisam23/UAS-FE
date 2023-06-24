import styled from "styled-components";

const StyledProvinsi = styled.div`
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
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
`;
export default StyledProvinsi;