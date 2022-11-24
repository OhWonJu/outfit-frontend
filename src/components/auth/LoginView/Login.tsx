import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { validate as emailVaildate } from "email-validator";

import { Button, Input, InputLabel } from "@components/ui";
import { _POST } from "@lib/server/Api";
import { useMutation } from "@tanstack/react-query";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  // React Query //
  async function _LOGIN(data: LoginFormProps) {
    return await _POST("/api/users/logIn", data);
  }
  const mutation = useMutation({
    mutationFn: async (formData: LoginFormProps) => {
      return await _LOGIN(formData);
    },
    onSuccess: data => {
      console.log("SUCCESS: ", data);
    },
  });

  // -------------------------------------------------------------- //

  // React Form Hook //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    mode: "onChange",
  });

  const onValid = (data: LoginFormProps) => {
    mutation.mutate(data);
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };
  // --------------------------------------------- //

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvaild)}
      className="member-form flex flex-col my-4 space-y-4"
    >
      {/* Email Form */}
      <div className="space-y-2">
        <InputLabel title="Email" help={errors.email?.message} />
        <Input
          register={register("email", {
            required: "Email is required",
            validate: {
              emailFormCheck: value =>
                emailVaildate(value) || "Check your email form",
            },
          })}
          id="email"
          type="email"
          required
          isInvalid={Boolean(errors.email?.message)}
        />
      </div>
      {/* Password Form */}
      <div className="space-y-2">
        <InputLabel title="Password" help={errors.password?.message} />
        <Input
          register={register("password", {
            required: "Password is required",
            minLength: {
              message: "Password Should be longer then 8 chars",
              value: 8,
            },
            validate: {
              // patternCheck: () => true
            },
          })}
          id="password"
          type="password"
          required
          isInvalid={Boolean(errors.password?.message)}
        />
      </div>
      {/* Submit Btn */}
      <Button variant="flat" type="submit">
        <span className="font-semibold">Log In</span>
      </Button>
    </form>
  );
}
