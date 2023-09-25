import Image from "next/image";
import swish from "@/public/assets/swish.png";

export default function Page() {
  return (
    <div className="w-full h-full my-auto">
      <Image quality={100} src={swish} alt={"Swish"} />
    </div>
  );
}
