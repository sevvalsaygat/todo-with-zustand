"use client";

import React from "react";
import Link from "next/link";

import { useTodoStore } from "@app/stores";

type ListItemPropTypes = {
  todo: TodoType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ todo }) => {
  const { deleteTodo } = useTodoStore((state) => state);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-row justify-between border border-purple-900 hover:bg-purple-400 cursor-pointer rounded-md py-6 px-24 w-1/2">
        <div className="flex flex-col mb-2">
          <div className="flex flex-row gap-3 text-purple-900 text-sm font-mono">
            Title: <div className="text-purple-600">{todo.title}</div>
          </div>
          <div className="flex flex-row gap-3 text-purple-900 text-sm font-mono">
            Description:
            <div className="text-purple-600">{todo.description}</div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex items-center justify-center mt-1 border text-xs font-mono text-purple-900 border-purple-900 hover:bg-purple-300 h-fit rounded-xl p-2">
            <Link href={`/todos/new?todoId=${todo.id}`}>Edit</Link>
          </div>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="flex items-center justify-center mt-1 border text-xs font-mono text-purple-900 border-purple-900 hover:bg-purple-300 h-fit rounded-xl p-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
