import Link from "next/link";

export default function Home() {
  return (
    <Link href="/todos/new">
      <div>Home</div>
    </Link>
  );
}
