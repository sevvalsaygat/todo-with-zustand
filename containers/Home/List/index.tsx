"use client";

import React, { useEffect } from "react";

import { Home } from "@app/containers";
import { useTodoStore } from "@app/stores";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const todos = useTodoStore((state) => state.todos);

  useEffect(() => {
    useTodoStore.persist.rehydrate();
  }, []);

  return (
    <div>
      <div>List</div>
      <div>
        {todos.map((todo, i) => {
          return (
            <div key={i} className="border rounded-xl mb-5">
              <Home.ListItem todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
