"use client";

import Link from "next/link";

import { NewTodo } from "@app/containers";

export default function Todos() {
  return (
    <div>
      <Link href="/">New Todo</Link>
      <NewTodo.Form />
    </div>
  );
}
