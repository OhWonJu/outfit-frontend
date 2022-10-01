import React from "react";
import { useForm } from "react-hook-form";
import { Input, SubmitButton } from "./LoginView";

export default function OrderCode() {
  const { register, handleSubmit, getValues } = useForm();
  const onValid = () => {
    console.log("valid Action", getValues());
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="non-member-form flex my-5 flex-col space-y-4"
    >
      <div className="space-y-2">
        <label>Order Code</label>
        <Input
          {...register("orderCode", { required: true })}
          id="orderCode"
          placeholder=""
        />
      </div>
      <SubmitButton className="group">
        <span className="font-semibold">Join</span>
      </SubmitButton>
    </form>
  );
}
