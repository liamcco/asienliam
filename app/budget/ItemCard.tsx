import { GiKnifeFork } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { MdSportsGymnastics } from "react-icons/md";

interface Props {
  category: "food" | "drinks" | "various" | "accomodation";
  prices: Price[];
  color: string;
}

type Price = {
  price: number;
  name: string;
};

const icons = {
  food: <GiKnifeFork size={40} />,
  drinks: <BiSolidDrink size={40} />,
  accomodation: <FaHouse size={40} />,
  various: <MdSportsGymnastics size={40} />,
};

export default function ItemCard(props: Props) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg px-8 max-w-md mx-auto">
      <div className="flex gap-4 items-center mb-4">
        <div className="rounded-full p-3" style={{ background: props.color }}>
          {icons[props.category]}
        </div>
        <h2 className="font-bold text-xl">{props.category.toUpperCase()}</h2>
      </div>
      <hr className="border-gray-400 mb-4" />
      <div className="space-y-4 px-4">
        {props.prices.map((price, index) => (
          <div key={index} className="flex justify-between w-full items-center">
            <h2 className="font-bold">{price.name}</h2>
            <a href="/" className="p-2 rounded-md bg-blue-300 shadow-md">
              <p>{price.price} kr</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
