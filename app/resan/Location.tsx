import { FaMapPin } from "react-icons/fa";
import Image from "next/image";

interface Props {
  city: string;
  duration?: string;
  slug: string;
}

export default function Location(props: Props) {
  return (
    <div className="w-full flex items-center my-4 justify-between">
      <div className="rounded-md pr-6">
        <div className="flex items-center">
          <FaMapPin className="text-xl mx-4" />
          <div>
            <h1 className="font-bold">
              <a href={`/resan/${props.slug}`}>{props.city}</a>
            </h1>
            <p className="text-gray-600">{props.duration}</p>
          </div>
        </div>
      </div>
      <a
        className="rounded-full overflow-hidden border-2 w-14"
        href={`/resan/${props.slug}`}
      >
        <Image
          src={`/assets/photos/${props.slug}.jpg`}
          alt={"Photo from city"}
          width={512}
          height={512}
          style={{
            objectFit: "cover",
          }}
        />
      </a>
    </div>
  );
}
