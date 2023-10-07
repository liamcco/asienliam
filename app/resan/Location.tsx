import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  city: string;
  duration?: string;
  image?: string;
  grid: boolean;
  handleClick?: () => void;
}

export default function Location(props: Props) {
  const imageSize = 40;

  return (
    <motion.div
      layout
      className={clsx(
        "w-full flex items-center my-4 justify-between",
        props.grid && "flex-col-reverse justify-end"
      )}
    >
      <motion.div
        className="z-10 rounded-md pr-6"
        style={{
          position: props.grid ? "absolute" : "relative",
        }}
        animate={{
          background: props.grid ? "rgba(200, 200, 200)" : "",
        }}
        layout
      >
        <div className="flex items-center">
          <FaMapPin className="text-xl mx-4" />
          <div>
            <h1 className="font-bold">{props.city}</h1>
            <p className="text-gray-600">{props.duration}</p>
          </div>
        </div>
      </motion.div>
      {props.duration && (
        <motion.button
          className={clsx(
            "rounded-full overflow-hidden border-2 z-0",
            props.grid ? "w-60" : "w-14"
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
              objectFit: "cover",
            }}
          />
        </motion.button>
      )}
    </motion.div>
  );
}
