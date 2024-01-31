"use client";

import trip from "./trip.json";
import Location from "./Location";
import { FaLocationArrow } from "react-icons/fa";

export default function Page() {
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
          <div key={i} className="py-2 bg-slate-100 rounded-lg px-2 my-4">
            <h2 className="m-2">
              <a href={`/resan/${country["slug"]}`}>{country.country}</a>
            </h2>
            {country["cities"].map((city, j) => (
              <Location
                city={city.city}
                duration={city.duration}
                key={j}
                slug={city.slug}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
