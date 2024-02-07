import React from "react";

import { useForm, FormProvider } from "react-hook-form";

import { Form as FormComponents, Button } from "@app/components";

type FormPropTypes = {};

const Form: React.FC<FormPropTypes> = () => {
  const useFormMethods = useForm<FormPropTypes>();

  return (
    <div className="flex flex-col mt-5 gap-2 items-center w-full">
      <FormProvider {...useFormMethods}>
        <FormComponents.Input name="todo" variant="primary" label="Todo" />
        <FormComponents.Textarea
          name="description"
          variant="primary"
          label="Description"
        />
        <Button
          onClick={() => {}}
          title="Create"
          variant="primary"
          className="p-2"
        />
      </FormProvider>
    </div>
  );
};

export default Form;
