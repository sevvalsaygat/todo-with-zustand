"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm, FormProvider } from "react-hook-form";

import { Form as FormComponents, Button } from "@app/components";
import { useTodoStore } from "@app/stores";

type FormPropTypes = {};

const Form: React.FC<FormPropTypes> = () => {
  const router = useRouter();
  const useFormMethods = useForm<ITodoFormType>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const searchParams = useSearchParams();
  const { handleSubmit, reset, setValue } = useFormMethods;
  const { addTodo, getById, editTodo } = useTodoStore((state) => state);

  const onSubmit = (data: ITodoFormType) => {
    if (todoId) {
      editTodo(todoId, data);
    } else {
      addTodo(data);
    }
    reset();
    router.push("/");
  };
  const todoId = searchParams.get("todoId");

  useEffect(() => {
    if (!todoId) {
      return;
    }

    const foundTodo = getById(todoId);
    if (!foundTodo) {
      router.push("/");
    }

    setValue("title", foundTodo?.title!);
    setValue("description", foundTodo?.description!);
  }, [todoId, getById, router]);

  return (
    <div className="flex flex-col mt-24 gap-2 items-center w-full">
      <div className="border border-purple-600 rounded-3xl p-28">
        <FormProvider {...useFormMethods}>
          <FormComponents.Input
            name="title"
            variant="primary"
            label="Todo"
            className="pr-20"
          />
          <FormComponents.Textarea
            name="description"
            variant="primary"
            label="Description"
            className="pr-20"
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            title="Create"
            variant="primary"
            className="right-0 p-2"
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default Form;
