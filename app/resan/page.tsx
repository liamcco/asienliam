import trip from "./trip.json";
import Location from "./Location";
import { addBorderChanges } from "@/utilites/itinerary";

export default function Page() {
  const initialItinerary = trip.map((item, index) => {
    return <Location city={item.city} duration={item.duration} key={index} />;
  });

  let itinerary = addBorderChanges(trip, initialItinerary);

  return (
    <div className="w-full">
      <div className="space-y-4">
        {itinerary.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
