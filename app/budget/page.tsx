import ItemCard from "./ItemCard";
import budget from "./budget.json";

export default function Page() {
  return (
    <div className="space-y-8">
      {budget.map((item, index) => (
        <ItemCard key={index} prices={item.prices} category={item.name} />
      ))}
    </div>
  );
}
