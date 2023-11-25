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

  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl">
        LUCKA {props.params.id}
      </h1>
    </div>
  );
}
