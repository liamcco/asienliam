import trip from "./trip.json";

export default function Page() {
  return (
    <div className="space-y-4">
      {trip.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="font-bold">{item.city}</h1>
            <p>{`${item.start} - ${item.end}`}</p>
          </div>
        );
      })}
    </div>
  );
}
