import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { nanoid } from "nanoid";

type UseTodoStoreType = {
  todos: TodoType[];
  addTodo: (data: ITodoFormType) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, data: ITodoFormType) => void;
  getById: (id: string) => TodoType | undefined;
};

const UseTodoStore = create<UseTodoStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        addTodo: (data) =>
          set((state) => ({
            todos: [
              ...state.todos,
              {
                id: nanoid(),
                title: data.title,
                description: data.description,
              },
            ],
          })),
        deleteTodo: (id) => {
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }));
        },
        editTodo: (id, data) => {
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, ...data } : todo
            ),
          }));
        },
        getById: (id) => {
          const todo = get().todos.find((todo) => todo.id === id);

          return todo;
        },
      }),
      {
        skipHydration: true,
        name: "advert-store",
      }
    )
  )
);

export default UseTodoStore;
