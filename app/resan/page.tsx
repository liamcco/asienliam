import trip from "./trip.json";
import Location from "./Location";

export default function Page() {
  var itinerary = trip.map((item, index) => {
    return <Location city={item.city} duration={item.duration} key={index} />;
  });

  for (let i = trip.length - 1; i > 0; i--) {
    if (trip[i]["country"] === trip[i - 1]["country"]) continue;

    const countryBreak = (
      <div>
        <h3>{trip[i - 1]["country"]}</h3>
        <hr />
        <h3>{trip[i]["country"]}</h3>
      </div>
    );

    itinerary = [...itinerary.slice(0, i), countryBreak, ...itinerary.slice(i)];
  }

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
