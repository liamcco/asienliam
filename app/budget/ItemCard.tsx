import { GiKnifeFork } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

interface Props {
  name: string;
  price: number;
  type: string;
  rating?: number;
}

export default function ItemCard(props: Props) {
  return (
    <div className="flex gap-4 items-center bg-gray-200 p-4 rounded-lg overflow-visible max-h-14">
      <div className="bg-yellow-300 rounded-full">
        <GiKnifeFork size={72} />
      </div>
      <div className="flex justify-between w-full items-center">
        <div>
          <h2 className="text-xl font-bold">{props.name}</h2>
          <div className="flex gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <a href="/" className="p-2 rounded-md bg-blue-300 shadow-md">
          <p>{props.price} kr</p>
        </a>
      </div>
    </div>
  );
}
