"use client";

import { useState } from "react";
import { FaLocationArrow, FaMapPin } from "react-icons/fa";
import Image from "next/image";

interface Props {
  city: string;
  duration: string;
  image?: string;
}

export default function Location(props: Props) {
  const current = <p className="text-gray-600">CURRENTLY IN</p>;
  const imageSize = 40;
  const [imageBig, setImageBig] = useState(false);

  return (
    <div className="flex items-center">
      <div className="p-4">
        {props.duration ? <FaMapPin /> : <FaLocationArrow />}
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold">{props.city}</h1>
          {props.duration == "" ? current : <p>{props.duration}</p>}
        </div>
        {props.image && (
          <button className="transition rounded-full overflow-hidden border-2">
            <Image
              src={"/assets/photos/" + props.image}
              alt={"Photo from city"}
              width={512}
              height={512}
              style={{ width: imageSize, height: imageSize }}
            />
          </button>
        )}
      </div>
    </div>
  );
}
