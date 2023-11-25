import clsx from "clsx";

interface Props {
  index: number;
}

type State = "closed" | "open" | "today";

export default function Lucka(props: Props) {
  const today = new Date();
  const luckDate = new Date("December " + props.index + ", 2023");

  let state: State = "closed";
  if (luckDate < today) {
    state = "open";
  }
  if (luckDate.getDate() === today.getDate()) {
    state = "today";
  }

  return (
    <a
      href={"/julkalender/" + props.index}
      className="rounded-lg bg-slate-300 text-center flex flex-col justify-center aspect-square"
    >
      <h1 className="text-3xl font-bold">{props.index}</h1>
    </a>
  );
}
