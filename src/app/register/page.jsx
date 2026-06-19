"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";

const RegisterPage = () => {
  const googleSingin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const registerHandler = async (formData) => {
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);

    const { data, error } = await authClient.signUp.email({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    });

    if (error) {
      console.error("Signup error:", error);
      return;
    }

    if (data) {
      toast.success("Account created successfully! Please log in.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      redirect("/login");
      window.location.reload("/login");
    }

    console.log("Signup success:", data);
  };
  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center ">
      <div className="flex  flex-col gap-4 bg-white p-10 w-full max-w-md rounded-2xl">
        <div className="mb-3">
          <h1 className="text-4xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">
            Sign up to start booking your perfect ride.
          </p>
        </div>
        <Form action={registerHandler}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your fullname" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email address" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <TextField isRequired name="image" type="text">
              <Label>Image Url</Label>
              <Input placeholder="Enter your image url" />
              <FieldError />
            </TextField>
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Register
          </button>
        </Form>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <button
          onClick={googleSingin}
          type="button"
          className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-black hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
