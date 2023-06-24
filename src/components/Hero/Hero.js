/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

const Hero = () => {
    return(
        <StyledHero>
            <div>
            <section>
                <div className="hero_left">
                    <h2>Covid ID</h2>
                    <h4>Monitoring Perkembangan Covid 19</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <Button>Vaccine</Button>
                </div>
                <div >
                    <img
                    src="https://img.freepik.com/free-vector/fight-virus-concept_52683-36504.jpg?w=1380&t=st=1679990089~exp=1679990689~hmac=b769bf809a3ad4236b9ca0bd2ca5e60aa786db3c4829c20e4afad7ae1ed8d3cc"
                    />
                </div>
            </section>
        </div>
        </StyledHero>
    )
}

export default Hero;