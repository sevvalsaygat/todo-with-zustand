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
    <div>
      <div className="flex flex-col">
        <div>{todo.title}</div>
        <div>{todo.description}</div>
      </div>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Sil
      </button>
      <Link href={`/todos/new?todoId=${todo.id}`}>Edit</Link>
    </div>
  );
};

export default ListItem;
