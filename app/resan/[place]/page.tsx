import { promises as fs } from "fs";

interface Props {
  params: {
    place: string;
  };
}

export default async function DetailPage(props: Props) {
  const place = props.params.place;
  const path = process.cwd() + `/app/resan/[place]/places/${place}`;

  const file = await fs.readFile(path + "/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}
