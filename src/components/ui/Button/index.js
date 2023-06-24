import styled,{css} from "styled-components";

const Button = styled.button`
    padding:0.8rem 2rem;
    border:none;
    border-radius:10px;
    color:#fff;
    background-color:salmon;
    cursor:pointer;

    //menggunakan props variant
    background-color:${(props) => 
    props.theme.colors[props.variant]||  props.theme.colors["primary"]}
    
    //props full size
    ${(props) => props.full && css`
    display:block;
    width:100%
    `}

    ${function(props){
    if(props.size === "sm"){
        return props.theme.size.sm;
    }else if(props.size === "md"){
        return props.theme.size.md;
    }else if(props.size === "lg"){
        return props.theme.size.lg;
    }
}
    }
`;

export default Button;