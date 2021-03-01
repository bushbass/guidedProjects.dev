import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IndividualItemCard from '../components/IndividualItemCard';

export default function Item({ itemList }) {
  const { id } = useParams();

  const [individualItem, setIndividualItem] = useState();

  useEffect(() => {
    const [tempItem] = itemList.filter((item) => item._id === id);
    setIndividualItem(tempItem);
  }, [itemList]);

  return (
    <div className="item">
      <div>
        <IndividualItemCard item={individualItem} />
      </div>
    </div>
  );
}
