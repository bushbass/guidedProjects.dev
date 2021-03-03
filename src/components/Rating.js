import StarFull from '../images/star_full.svg';
import StarEmpty from '../images/star-empty.svg';
import StarHalf from '../images/star-half.svg';

export default function Rating({ stars }) {
  return (
    <div>
      {stars === 0 ? (
        <>
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 0.5 ? (
        <>
          <img src={StarHalf} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 1 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 1.5 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarHalf} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 2 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 2.5 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarHalf} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 3 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 3.5 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />

          <img src={StarHalf} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 4 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarEmpty} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 4.5 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarHalf} style={{ height: '30px' }} />
        </>
      ) : null}
      {stars === 5 ? (
        <>
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
          <img src={StarFull} style={{ height: '30px' }} />
        </>
      ) : null}
    </div>
  );
}
