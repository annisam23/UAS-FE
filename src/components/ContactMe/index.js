import StyledContact from './Contact.styled';
import { FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <StyledContact>
        <div className="contact-me">
        <h2 className="Pro">Contact Me <FaEnvelope/></h2>
        <div className="social-links">
        <a href="https://github.com/annisam23" target="_blank" rel="noopener noreferrer">
            <img className ="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RG2PKNZzTKQmBg3osQ4zWwHaEM%26pid%3DApi&f=1&ipt=fd9504aacfd75a09b6830a607a76f6b8a30dca5b3e0fb7899ec97f3e8118b7b0&ipo=images" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/annisa-maulida-rahma-3549241a9//" target="_blank" rel="noopener noreferrer">
            <img  className ="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Cverxr-lN_3QjtMAqJFQYwHaEK%26pid%3DApi&f=1&ipt=42fdb340a3b2f0d37919f2bcbaf86c664cbe5605dea17de60da0b19e26340528&ipo=images" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/_maulidaaar" target="_blank" rel="noopener noreferrer">
            <img  className ="logo" src="https://i.pinimg.com/736x/a2/07/c1/a207c1f8e99f9aa86ab75c4dfee9e592.jpg" alt="Instagram" />
        </a>
    </div>
    </div>
        </StyledContact>
);
};

export default ContactMe;
