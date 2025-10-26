"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialvbalues, SignInSchema, SignInType } from "./Schema";

const SigninComponent = () => {
  const hookForm = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: initialvbalues,
  });

  const { handleSubmit } = hookForm;

  const onsubmit = (data: SignInType) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onsubmit)}>
        <Card className="w-100 p-6 shadow-xl border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-[40px] font-bold">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-gray-500 mt-2">
              Welcome back! Please sign in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Sign In Form can be added here */}
            <Label className="mt-4 mb-2">Email</Label>
            <Input formHook={hookForm} name={"email"} placeholder="Email" />
            <Label className="mt-4 mb-2">Password</Label>
            <Input
              formHook={hookForm}
              name={"password"}
              type="password"
              placeholder="Password"
            />
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              type="submit"
              variant={"secondary"}
            >
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SigninComponent;
