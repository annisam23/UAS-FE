import StyledCard from './Card.styled';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <StyledCard>
      <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="cardBody">
        <h6>
          <a href={link}>{title}</a>
        </h6>
        <p>{description}</p>
      </div>
    </div>
    </StyledCard>
  );
};

export default Card;
