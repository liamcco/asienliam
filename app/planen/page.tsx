import plan from "./plan.json";

export default function Page() {
  return (
    <div className="w-full">
      <div className="space-y-4">
        {plan.map((entry, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-center font-bold text-xl underline">
              {entry.country}
            </h2>
            <div className="w-full max-w-md">
              {entry.cities.map((city, subindex) => (
                <div
                  key={subindex}
                  className="flex gap-8 justify-between px-8 py-2 my-2 border rounded-md bg-slate-400"
                  style={{ opacity: Math.max(0.4, 1 - index / plan.length) }}
                >
                  <h3>{city.name}</h3>
                  <p>{city.date}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-center font-bold text-xl">...</h2>
        </div>
      </div>
    </div>
  );
}
