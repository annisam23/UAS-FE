/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import List from "../List/List";
import StyledFooter from "./Footer.styled";

const Footer = () => {
    return(
        <StyledFooter>
            <div>
                <footer>
                    <div>
                    <h2>Covid ID</h2>
                    <p>2023 All reserved by <a href="https://github.com/annisam23">Anseyow</a></p>
                    </div>
                    <div>
                        <List/>
                    </div>
                </footer>
        </div>
        </StyledFooter>
    )
}

export default Footer;