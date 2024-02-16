"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type InputPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  placeholder?: string;
  defaultValue?: string;
  variant?: "primary";
  className?: string;
  type?: "text";
};

const Input: React.FC<InputPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = "",
  variant,
  className,
  type = "text",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm ml-1 font-medium leading-6 text-purple-900">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={cn(className, {
                "flex flex-col w-full mb-10 border border-slate-500 rounded-md p-3 placeholder:text-sm font-light placeholder:text-zinc-600 placeholder:font-light focus:outline-none focus:ring-1 focus:ring- focus:bg-white text-sm":
                  variant === "primary",
              })}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="fixed -mt-8 ml-2 text-rose-800 text-xs font-sans">
          {fieldError.message as string}
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
