"use client";

import trip from "./trip.json";
import Location from "./Location";
import { useState } from "react";

export default function Page() {
  const [grid, setGrid] = useState(false);

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      {trip.map((country, i) => (
        <div key={i} className="space-y-4">
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
          {trip[i + 1] && (
            <div className="pb-4">
              <h3>{trip[i]["country"]}</h3>
              <hr />
              <h3>{trip[i + 1]["country"]}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
