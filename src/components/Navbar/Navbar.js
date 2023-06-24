/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import List from "../List/List";
import StyledNavbar from "./Navbar.styled";

const Navbar =() => {
    return(
        <StyledNavbar>
        <div>
            <nav>
                <div>
                    <h1><a className="linkTo" href="https://github.com/annisam23/UAS-FE">Covid ID</a></h1>
                </div>
                <div>
                    <List/>
                </div>
            </nav>
        </div>
        </StyledNavbar>

    )
}
export default Navbar;