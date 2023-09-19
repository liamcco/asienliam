import plan from "./plan.json";
import FutureLocation from "./FutureLocation";
import { addBorderChanges } from "@/utilites/itinerary";

export default function Page() {
  const initialItinerary = plan.map((item, index) => {
    return (
      <FutureLocation
        country={item.country}
        city={item.city}
        duration={item.duration}
        key={index}
      />
    );
  });

  const itinerary = addBorderChanges(plan, initialItinerary);

  return <p className="m-auto">Under construction...</p>;

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
