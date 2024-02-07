import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <div>
      <Link href="/todos/new">Home</Link>
      <HomeContainer.List />
    </div>
  );
}
