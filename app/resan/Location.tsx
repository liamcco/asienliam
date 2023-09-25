import { FaLocationArrow, FaMapPin } from "react-icons/fa";
import Image from "next/image";

interface Props {
  city: string;
  duration: string;
  image?: string;
}

export default function Location(props: Props) {
  const current = <p className="text-gray-600">CURRENTLY IN</p>;

  return (
    <div className="flex items-center">
      <div className="p-4">
        {props.duration ? <FaMapPin /> : <FaLocationArrow />}
      </div>
      <div className="w-full flex justify-between">
        <div>
          <h1 className="font-bold">{props.city}</h1>
          {props.duration == "" ? current : <p>{props.duration}</p>}
        </div>
        {props.image && (
          <div className="rounded-full overflow-hidden border-2">
            <Image
              src={"/assets/photos/" + props.image}
              alt={"Photo from city"}
              width={40}
              height={40}
            />
          </div>
        )}
      </div>
    </div>
  );
}
