import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { validate as emailVaildate } from "email-validator";
import { AxiosError } from "axios";

import { Button, Input, InputLabel } from "@components/ui";
import { useMutation } from "react-query";
import { _POST } from "@lib/server/Api";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  // React Query //
  function _LOGIN(data: LoginFormProps) {
    // fetch("/api/users/logIn", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    _POST("/api/users/logIn", data);
  }

  const { mutate, data, isLoading } = useMutation<
    any,
    AxiosError,
    LoginFormProps
    // @ts-ignore
  >(_LOGIN, {
    onSuccess: () => {},
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
    mutate({
      email: data.email,
      password: data.password,
    });
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
