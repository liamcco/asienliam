import { BiSolidLock } from "react-icons/bi";
import "./animate.css";

import Lucka from "./Lucka";

interface Props {
  params: {
    id: string;
  };
}

export default function LuckaPage(props: Props) {
  const id = parseInt(props.params.id, 10);
  if (isNaN(id) || id < 1 || id > 25) {
    return <div>Detta är inte en giltig lucka</div>;
  }

  const dayForOpening = new Date("December " + id + " 2023");
  const today = new Date();

  const daysTilOpening = Math.ceil(
    (dayForOpening.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysTilOpening < 1) {
    return <Lucka id={id} />;
  }

  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl">
        LUCKA {props.params.id}
      </h1>
      <div className="animate-grow-shrink">
        <div className="animate-wiggle">
          <BiSolidLock
            style={{
              height: "auto",
              width: "100%",
              "max-height": "50vh",
              margin: "auto",
            }}
          />
        </div>
      </div>
      <div className="text-center">
        <p>Luckan öppnas om</p>
        <p>{daysTilOpening} dagar</p>
      </div>
    </div>
  );
}
