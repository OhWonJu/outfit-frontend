import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { validate as emailVaildate } from "email-validator";

import useTheme from "@lib/hooks/useTheme";
import { Button, Input, InputLabel } from "@components/ui";

import { SubmitButton } from "./LoginView";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  const theme = useTheme();

  // React Form Hook //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    mode: "onChange",
  });

  const onValid = (data: LoginFormProps) => {
    console.log("valid Action", data);
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
