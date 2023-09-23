import ItemCard from "./ItemCard";
import budget from "./budget.json";

type Category = "food" | "drinks" | "accomodation" | "various";

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Kostnader</h1>
        <p>Nedan listas några av mina dagliga kostander. Köp en öl till mig!</p>
        <p>Det är kul, jag lovar!</p>
      </div>
      {budget.map((item, index) => (
        <ItemCard
          key={index}
          prices={item.prices}
          category={item.name as Category}
        />
      ))}
    </div>
  );
}
