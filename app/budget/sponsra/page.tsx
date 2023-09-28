import Image from "next/image";
import swishinfo from "@/public/assets/swishinfo.png";
import swishbutton from "@/public/assets/swishbutton.png";

export default function Page() {
  return (
    <div className="w-full h-full m-auto space-y-6 max-w-md">
      <Image
        quality={100}
        src={swishinfo}
        alt={"Swish info"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
      <Image
        quality={100}
        src={swishbutton}
        alt={"Swish button"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
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
