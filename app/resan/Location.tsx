import { FaLocationArrow, FaMapPin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  city: string;
  duration: string;
  image?: string;
  grid: boolean;
  handleClick?: () => void;
}

export default function Location(props: Props) {
  const current = <p className="text-gray-600">CURRENTLY IN</p>;
  const imageSize = 40;

  return (
    <motion.div
      className={
        props.grid
          ? "w-full flex items-center flex-col justify-end"
          : "w-full flex items-center justify-between"
      }
    >
      <motion.div
        className={
          props.grid ? "z-10 absolute bg-slate-300 rounded-md pr-6" : ""
        }
        layout
      >
        <div className="flex items-center">
          <div className="p-4">
            {props.duration ? <FaMapPin /> : <FaLocationArrow />}
          </div>
          <div>
            <h1 className="font-bold">{props.city}</h1>
            {props.duration == "" ? current : <p>{props.duration}</p>}
          </div>
        </div>
      </motion.div>
      <motion.button
        className={
          props.grid
            ? "rounded-full overflow-hidden border-2 z-0 mb-4"
            : "rounded-full overflow-hidden border-2"
        }
        onClick={props.handleClick}
        layout
      >
        {props.duration && (
          <Image
            src={
              props.image
                ? "/assets/photos/" + props.image
                : "/assets/photos/fallback.jpg"
            }
            alt={"Photo from city"}
            width={512}
            height={512}
            style={{
              width: props.grid ? imageSize * 5 : imageSize,
              height: props.grid ? imageSize * 5 : imageSize,
            }}
          />
        )}
      </motion.button>
    </motion.div>
  );
}
