"use client";

import React from "react";
import Link from "next/link";

type HeaderPropTypes = {};

const Header: React.FC<HeaderPropTypes> = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-purple-200 border-b shadow-lg h-fit sticky p-3 sm:px-28">
      <div className="flex flex-row items-center gap-6">
        <Link href="/">
          <div className="text-base font-semibold rounded-full underline px-4 py-2 text-purple-900 border-purple-900 hover:bg-purple-300">
            TODOS
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-16">
        <div>
          <Link
            className="cursor-pointer py-3 rounded-lg px-4 border-transparent w-fit bg-purple-900 text-white text-sm font-light hover:bg-purple-600"
            href="/todos/new"
          >
            Add New Todo {">>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
