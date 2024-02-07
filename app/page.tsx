import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <Link href="/todos/new">
      <HomeContainer.List />
    </Link>
  );
}
