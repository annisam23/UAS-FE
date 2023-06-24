/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import StyledBoutme from "./Boutme.styled";
import Button from "../ui/Button";
import image from "./img/111.JPG";
const Boutme = () => {
    return(
        <StyledBoutme>
        <div className="poster">
                <img className="bout"
                    src={image}
                    alt="me&meow"
                />
            </div>
            <div className="info">
                <h2>About Me</h2>
                <h3>Annisa Maulida Rahma</h3>
                <p>
                I am an ambitious and dedicated Web Developer and also have strong knowledge 
                in web development. Although I don't have professional work experience yet, 
                I have an understanding of web programming languages, frameworks, and basic web development concepts. I am always eager to learn
                new things and apply my knowledge to create creative solutions in web development.
                </p>
                <Button as="a" href="https://s.id/CV_AMR" size="md">More</Button>
            </div>
        </StyledBoutme>
    )
}

export default Boutme;