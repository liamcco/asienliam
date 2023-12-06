import clsx from "clsx";
import "./animate.css";

interface Props {
  index: number;
}

const colors = [
  "bg-rose-300",
  "bg-pink-300",
  "bg-fuchsia-300",
  "bg-purple-300",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-violet-300",
  "bg-indigo-300",
  "bg-blue-300",
  "bg-cyan-300",
  "bg-teal-300",
  "bg-emerald-300",
  "bg-purple-500",
  "bg-violet-500",
  "bg-green-300",
  "bg-lime-300",
  "bg-yellow-300",
  "bg-amber-300",
  "bg-orange-300",
  "bg-red-300",
  "bg-rose-500",
  "bg-pink-500",
  "bg-fuchsia-500",
  "bg-indigo-500",
  "bg-teal-500",
];

type State = "closed" | "open";

export default function Lucka(props: Props) {
  const today = new Date();
  const luckDate = new Date("December " + props.index + ", 2023");

  let state: State = "closed";
  if (luckDate < today) state = "open";
  if (luckDate.getDate() === today.getDate()) state = "closed";

  return (
    <a
      href={"/julkalender/" + props.index}
      className={clsx(
        "rounded-lg text-center flex flex-col justify-center aspect-square hover:no-underline",
        state === "closed" && `bg-slate-300 shadow-md animate-wiggle`,
        state === "open" && ["shadow-inner text-white", colors[props.index - 1]]
      )}
      style={{
        animationDelay: `${props.index * 0.1}s`,
      }}
    >
      <h1 className="text-3xl font-bold">{props.index}</h1>
    </a>
  );
}
