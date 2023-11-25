export default function Navbar() {
  return (
    <nav className="mb-8">
      <div className="font-bold font-mono">
        <h1 className="text-4xl mb-4">
          <a href="/">@asienliam</a>
        </h1>
        <ul className="flex justify-between flex-wrap gap-x-8 gap-y-4">
          <li>
            <a href="/resan">Resan</a>
          </li>
          <li>
            <a href="/planen">Planen</a>
          </li>
          <li>
            <a href="/budget">Budget</a>
          </li>
          <li className="mx-auto sm:ml-auto sm:mr-0">
            <a
              href="/julkalender"
              className="p-2 bg-slate-200 border rounded-xl"
            >
              ✨ Liams Julkalender 2023 🎅🏻
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
