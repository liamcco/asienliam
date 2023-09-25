import Image from "next/image";
import swish from "@/public/assets/swish.png";

export default function Page() {
  return (
    <div className="w-full h-full my-auto">
      <Image quality={100} src={swish} alt={"Swish"} />
      <p className="pt-2 text-center">
        Att skänka en öl eller kaffe är mycket enkelt. Alla bidrag besvaras
        personligen med ett inlägg på{" "}
        <a href="https://instagram.com/asienliam" className="font-bold">
          @asienliam
        </a>
      </p>
    </div>
  );
}
