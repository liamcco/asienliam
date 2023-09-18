import { FaLocationArrow, FaMapPin } from "react-icons/fa";

interface Props {
  city: string;
  duration: string;
}

export default function Location(props: Props) {
  const current = <p className="text-gray-600">CURRENTLY IN</p>;

  return (
    <div className="flex items-center">
      <div className="p-4">
        {props.duration ? <FaMapPin /> : <FaLocationArrow />}
      </div>
      <div>
        <h1 className="font-bold">{props.city}</h1>
        {props.duration == "" ? current : <p>{props.duration}</p>}
      </div>
    </div>
  );
}
