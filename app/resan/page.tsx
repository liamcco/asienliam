import trip from "./trip.json";
import Location from "./Location";
import { addBorderChanges } from "./itinerary";

export default function Page() {
  const initialItinerary = trip.map((item, index) => {
    return (
      <Location
        city={item.city}
        duration={item.duration}
        key={index}
        image={item.image}
      />
    );
  });

  let itinerary = addBorderChanges(trip, initialItinerary);

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <div className="space-y-4">
        {itinerary.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
