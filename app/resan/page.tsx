"use client";

import trip from "./trip.json";
import Location from "./Location";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  const [grid, setGrid] = useState(false);

  return (
    <>
      <div className="py-2 flex items-center mx-auto">
        <FaLocationArrow className="mx-4 text-purple-600" />
        <p className="text-center font-bold">
          Current Location: {trip.currently}
        </p>
      </div>

      <div className="w-full max-w-md mx-auto">
        {trip.past.map((country, i) => (
          <motion.div
            layout
            key={i}
            className="py-2 bg-slate-100 rounded-lg px-2 my-4"
          >
            <motion.h2 layout="preserve-aspect" className="m-2">
              {country.country}
            </motion.h2>
            {country["cities"].map((city, j) => (
              <Location
                city={city.city}
                duration={city.duration}
                key={j}
                image={city.image}
                grid={grid}
                handleClick={() => setGrid(!grid)}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}
