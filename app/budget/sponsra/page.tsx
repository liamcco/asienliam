"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
    </div>
  );
}
