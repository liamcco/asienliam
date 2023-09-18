import { FaMapPin } from "react-icons/fa";

interface Props {
  city?: string;
  country: string;
  duration: string;
}

export default function FutureLocation(props: Props) {
  return (
    <div className="flex items-center">
      <div className="p-4">
        <FaMapPin />
      </div>
      <div>
        <h1 className="font-bold">
          {props.city ?? props.country.toUpperCase()}
        </h1>
        <p>~{props.duration}~</p>
      </div>
    </div>
  );
}
