import Lucka from "./Lucka";

export default function Julkalender() {
  return (
    <div>
      <div className="grid grid-cols-5 auto-rows-auto gap-1 justify-items-stretch">
        <div className="col-start-3 col-end-5 row-start-5 row-end-7">
          <Lucka index={1} />
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
          <Lucka index={2} />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3">
          <Lucka index={3} />
        </div>
        <div className="col-start-2 col-end-4 row-start-1 row-end-3">
          <Lucka index={4} />
        </div>
        <div className="col-start-5 col-end-6 row-start-6 row-end-7">
          <Lucka index={5} />
        </div>
        <div className="col-start-2 col-end-3 row-start-9 row-end-10">
          <Lucka index={6} />
        </div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <Lucka index={7} />
        </div>
        <div className="col-start-2 col-end-3 row-start-5 row-end-6">
          <Lucka index={8} />
        </div>
        <div className="col-start-1 col-end-2 row-start-8 row-end-9">
          <Lucka index={9} />
        </div>
        <div className="col-start-5 col-end-6 row-start-2 row-end-3">
          <Lucka index={10} />
        </div>
        <div className="col-start-5 col-end-6 row-start-5 row-end-6">
          <Lucka index={11} />
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-5">
          <Lucka index={12} />
        </div>
        <div className="col-start-5 col-end-6 row-start-1 row-end-2">
          <Lucka index={13} />
        </div>
        <div className="col-start-2 col-end-3 row-start-8 row-end-9">
          <Lucka index={14} />
        </div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4">
          <Lucka index={15} />
        </div>
        <div className="col-start-3 col-end-4 row-start-8 row-end-9">
          <Lucka index={16} />
        </div>
        <div className="col-start-4 col-end-6 row-start-3 row-end-5">
          <Lucka index={17} />
        </div>
        <div className="col-start-4 col-end-5 row-start-7 row-end-8">
          <Lucka index={18} />
        </div>
        <div className="col-start-3 col-end-4 row-start-4 row-end-5">
          <Lucka index={19} />
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2">
          <Lucka index={20} />
        </div>
        <div className="col-start-3 col-end4 row-start-9 row-end-10s">
          <Lucka index={21} />
        </div>
        <div className="col-start-1 col-end-3 row-start-6 row-end-8">
          <Lucka index={22} />
        </div>
        <div className="col-start-1 col-end-2 row-start-9 row-end-10">
          <Lucka index={23} />
        </div>
        <div className="col-start-4 col-end-6 row-start-8 row-end-10">
          <Lucka index={24} />
        </div>
        <div className="col-start-5 col-end-6 row-start-7 row-end-8">
          <Lucka index={25} />
        </div>
      </div>
    </div>
  );
}
