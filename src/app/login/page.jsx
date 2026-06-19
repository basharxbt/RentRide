"use client";
import { redirect } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Skeleton,
  TextField,
} from "@heroui/react";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginPage = () => {
  const googleSingin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const { data: season, isPending } = useSession();
  if (season) {
    redirect("/");
  }
  const loginHandler = async (formData) => {
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);

    const { data, error } = await authClient.signIn.email({
      email: userInfo.email,
      password: userInfo.password,
    });

    if (error) {
      toast.error("Invalid email or password", {
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

      console.log(error.message);
      return;
    }
    if (data) {
      toast.success("Login successful! Welcome back.", {
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
      window.location.reload("/");
      redirect("/");
    }

    console.log("Singin success:", data);
  };
  if (isPending) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fffaf0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #eee",
              borderTop: "5px solid #d7b65d",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          />

          <p style={{ marginTop: "15px", color: "#333" }}>Loading...</p>

          <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex h-screen bg-gray-100 justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl  font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500">
            Sign in to access your RentRide account
          </p>
        </div>
        <Form action={loginHandler} className="flex flex-col gap-4 ">
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
            <Input placeholder="john@example.com" />
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
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button
              className="btn bg-black rounded-md text-white w-full"
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t"></div>
        </div>
        <button
          onClick={googleSingin}
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
