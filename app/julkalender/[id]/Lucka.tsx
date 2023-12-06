import { FaYoutube } from "react-icons/fa";

interface Props {
  id: number;
}

export default async function Lucka(props: Props) {
  const luckaData = await import(`./luckor/${props.id}.json`);

  return (
    <div>
      <div className="p-3 border rounded-xl shadow-xl mb-10">
        <h1 className="text-center font-extrabold text-2xl">
          LUCKA {props.id}
        </h1>
        {luckaData.link && (
          <a
            href={luckaData.link}
            target="_blank"
            className="p-4 bg-red-600 font-sans font-bold text-3xl text-white rounded-full flex w-min items-center gap-2 m-auto my-8"
          >
            <FaYoutube />
            <p>Youtube</p>
          </a>
        )}
        <div className="px-8 mb-8 space-y-2">
          {luckaData.host && <p>Host: {luckaData.host}</p>}
          {luckaData.guest && <p>Gäst: {luckaData.guest}</p>}
          {luckaData.callers && <p>Andra medverkande: {luckaData.callers}</p>}
          {luckaData.winners && <p>Quizvinnare: {luckaData.winners}</p>}
        </div>
      </div>
      {luckaData.summary && <p>{luckaData.summary}</p>}
    </div>
  );
}
