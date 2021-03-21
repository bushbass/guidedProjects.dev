import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IndividualItemCard from '../components/IndividualItemCard';

export default function Item({ itemList }) {
  const { id } = useParams();

  const [individualItem, setIndividualItem] = useState();

  return (
    <div className="item">
      <div>
        <IndividualItemCard id={id} />
      </div>
    </div>
  );
}
