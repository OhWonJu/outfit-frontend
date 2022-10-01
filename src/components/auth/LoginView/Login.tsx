import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { validate } from "email-validator";
import { Input, SubmitButton } from "./LoginView";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormProps>();

  const onValid = (data: LoginFormProps) => {
    console.log("valid Action", data);
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvaild)}
      className="member-form flex flex-col mb-4 space-y-4"
    >
      <div className="space-y-2">
        <label>Email</label>
        <Input
          {...register("email", { required: "Email is required" })}
          id="email"
          type="email"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <label>Password</label>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              message: "Password Should be longer then 8 chars",
              value: 8,
            },
          })}
          id="password"
          type="password"
          placeholder=""
        />
      </div>
      <SubmitButton>
        <span className="font-semibold">Log In</span>
      </SubmitButton>
    </form>
  );
}
