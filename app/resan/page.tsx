"use client";

import trip from "./trip.json";
import Location from "./Location";
import { useState } from "react";
import NewCountry from "./NewCountry";

export default function Page() {
  const [grid, setGrid] = useState(false);

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      {trip.map((country, i) => (
        <div key={i}>
          <div className="space-y-4">
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
          </div>
          {trip[i + 1] && (
            <NewCountry from={trip[i + 1]["country"]} to={trip[i]["country"]} />
          )}
        </div>
      ))}
    </div>
  );
}
