import StarFull from '../images/star_full.svg';
import StarEmpty from '../images/star-empty.svg';
import StarHalf from '../images/star-half.svg';

export default function Rating({ stars, height }) {
  return (
    <div>
      {stars === 0 ? (
        <>
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 0.5 ? (
        <>
          <img src={StarHalf} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 1 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 1.5 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarHalf} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 2 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 2.5 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarHalf} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 3 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 3.5 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />

          <img src={StarHalf} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 4 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarEmpty} style={{ height }} />
        </>
      ) : null}
      {stars === 4.5 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarHalf} style={{ height }} />
        </>
      ) : null}
      {stars === 5 ? (
        <>
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
          <img src={StarFull} style={{ height }} />
        </>
      ) : null}
    </div>
  );
}
