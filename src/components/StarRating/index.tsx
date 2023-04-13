import star from '../../assets/star.svg';
import emptyStar from '../../assets/star-empty.svg';

type StarProps = {
  filled?: boolean;
}

const Star: React.FC<StarProps> = ({ filled = false }) => {
  const starSrc = filled ? star : emptyStar;
  return (
    <img src={starSrc} alt="star-icon" />
  )
}

type StarRatingProps = {
  stars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ stars = 0 }) => (
  <div className='star-rating'>
    <Star filled={stars >= 1} />
    <Star filled={stars >= 2} />
    <Star filled={stars >= 3} />
  </div>
)