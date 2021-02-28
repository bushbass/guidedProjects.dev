import { useParams } from "react-router-dom";
export default function Item() {
  const { id } = useParams();
  return (
    <div className="item">
      <div>
        <h2>item component</h2>
        {id}
      </div>
    </div>
  );
}
