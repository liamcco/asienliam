export default function Navbar() {
  return (
    <nav className="flex-none mb-16">
      <div className="font-bold font-mono">
        <h1 className="text-4xl mb-4">
          <a href="/">@asienliam</a>
        </h1>
        <ul className="flex justify-around max-w-sm">
          <li>
            <a href="/resan">Resan</a>
          </li>
          <li>
            <a href="/planen">Planen</a>
          </li>
          <li>
            <a href="/budget">Budget</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
