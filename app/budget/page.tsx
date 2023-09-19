import ItemCard from "./ItemCard";
import { FaLocationArrow } from "react-icons/fa";

export default function Page() {
  return (
    <div>
      <div className="pb-16">
        <div className="pb-8">
          <hr className="border-black" />
          <div className="flex items-center gap-2">
            <FaLocationArrow size={20} />
            <h1 className="text-3xl font-serif">VIETNAM</h1>
          </div>
        </div>
        <div className="space-y-8">
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
        </div>
      </div>
      <div className="pb-16">
        <div className="pb-8">
          <hr className="border-black" />
          <h1 className="text-3xl font-serif">THAILAND</h1>
        </div>
        <div className="space-y-8">
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
          <ItemCard name={"Ban mi"} price={10} type={"food"} />
        </div>
      </div>
    </div>
  );
}
