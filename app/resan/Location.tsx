import { FaLocationArrow, FaMapPin } from "react-icons/fa";

interface Props {
  city: string;
  duration: string;
}

export default function Location(props: Props) {
  return (
    <div className="flex items-center">
      <div className="p-4">
        {props.duration ? <FaMapPin /> : <FaLocationArrow />}
      </div>
      <div>
        <h1 className="font-bold">{props.city}</h1>
        <p>{props.duration}</p>
      </div>
    </div>
  );
}
