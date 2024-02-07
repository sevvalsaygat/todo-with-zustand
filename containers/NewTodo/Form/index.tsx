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
    <div className="flex flex-col mt-5 gap-2 items-center w-full">
      <FormProvider {...useFormMethods}>
        <FormComponents.Input name="title" variant="primary" label="Todo" />
        <FormComponents.Textarea
          name="description"
          variant="primary"
          label="Description"
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          title="Create"
          variant="primary"
          className="p-2"
        />
      </FormProvider>
    </div>
  );
};

export default Form;
