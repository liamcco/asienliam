type Location = {
  country: string;
  city?: string;
};

export function addBorderChanges(
  plan: Location[],
  itinerary: React.ReactNode[]
) {
  var tempItinerary = itinerary;

  for (let i = plan.length - 1; i > 0; i--) {
    if (plan[i]["country"] === plan[i - 1]["country"]) continue;

    const countryBreak = (
      <div>
        <h3>{plan[i - 1]["country"]}</h3>
        <hr />
        <h3>{plan[i]["country"]}</h3>
      </div>
    );

    tempItinerary = [
      ...tempItinerary.slice(0, i),
      countryBreak,
      ...tempItinerary.slice(i),
    ];
  }

  return tempItinerary;
}
