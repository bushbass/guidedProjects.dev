import StarFull from '../images/star_full.svg';
import StarHalf from '../images/star-empty.svg';
import StarEmpty from '../images/star-half.svg';

export default function Rating({ stars }) {
  return (
    <div>
      <p>{stars} Stars</p>
      <img src={StarFull} style={{ height: '20px' }} />
      <img src={StarHalf} style={{ height: '20px' }} />
      <img src={StarEmpty} style={{ height: '20px' }} />
    </div>
  );
}
