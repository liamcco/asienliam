import { FaLocationArrow, FaMapPin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  city: string;
  duration?: string;
  image?: string;
  grid: boolean;
  handleClick?: () => void;
}

export default function Location(props: Props) {
  const current = <p className="text-gray-600">CURRENTLY IN</p>;
  const imageSize = 40;

  return (
    <motion.div
      className={clsx(
        "w-full flex items-center",
        props.grid ? "flex-col justify-end" : "justify-between"
      )}
    >
      <motion.div
        className={clsx(
          props.grid && [
            "z-10 absolute rounded-md pr-6",
            props.duration ? "bg-slate-300" : "bg-purple-400",
          ]
        )}
        layout
      >
        <div className="flex items-center">
          <div className="p-4">
            {props.duration ? (
              <FaMapPin />
            ) : (
              <FaLocationArrow
                className={clsx(!props.grid && "text-purple-600")}
              />
            )}
          </div>
          <div>
            <h1 className="font-bold">{props.city}</h1>
            <p className={clsx(!props.duration && "text-gray-600")}>
              {props.duration ?? "CURRENTLY IN"}
            </p>
          </div>
        </div>
      </motion.div>
      {props.duration && (
        <motion.button
          className={clsx(
            "rounded-full overflow-hidden border-2",
            props.grid && "z-0 mb-4"
          )}
          onClick={props.handleClick}
          layout
        >
          <Image
            src={"/assets/photos/" + props.image ?? "fallback.jpg"}
            alt={"Photo from city"}
            width={512}
            height={512}
            style={{
              width: props.grid ? imageSize * 5 : imageSize,
              height: props.grid ? imageSize * 5 : imageSize,
            }}
          />
        </motion.button>
      )}
    </motion.div>
  );
}
