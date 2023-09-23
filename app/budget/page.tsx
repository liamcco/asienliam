import ItemCard from "./ItemCard";
import { BiSolidMapPin } from "react-icons/bi";

export default function Page() {
  return (
    <div>
      <div className="pb-16">
        <div className="pb-8">
          <div className="flex items-center gap-2">
            <BiSolidMapPin size={30} />
            <h1 className="text-3xl">VIETNAM</h1>
          </div>
          <hr className="border-black" />
        </div>
        <div className="space-y-8">
          <ItemCard name={"Ban mi"} price={10} type={"food"} rating={3} />
          <ItemCard name={"Öl"} price={12} type={"drink"} rating={4} />
          <ItemCard name={"Massage"} price={100} type={"activity"} rating={5} />
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
