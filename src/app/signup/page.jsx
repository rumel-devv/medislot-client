"use client";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter()
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { name, email, photo, password } = user;
    console.log(user);
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      photo
    });
   if(data){
      router.push('/login')
      toast.success('Registation Successfull')  
    }
    if(error){
     toast.error(error?.message || "Registation  Failed");
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0F172A] px-4">
      <Form onSubmit={handleSignUp} className="w-full max-w-md bg-white dark:bg-[#111827] p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col gap-5">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h1>

        {/* NAME */}
        <TextField isRequired name="name" type="text">
          <Label className="text-gray-700 dark:text-gray-200">Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* PHOTO URL */}
        <TextField isRequired name="photo" type="text">
          <Label className="text-gray-700 dark:text-gray-200">Photo URL</Label>
          <Input placeholder="Enter photo URL" />
          <FieldError />
        </TextField>

        {/* EMAIL */}
        <TextField isRequired name="email" type="email">
          <Label className="text-gray-700 dark:text-gray-200">Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* PASSWORD */}
        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (!value) return "Password is required";

            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }

            if (!/[A-Z]/.test(value)) {
              return "Must contain at least one uppercase letter";
            }

            if (!/[a-z]/.test(value)) {
              return "Must contain at least one lowercase letter";
            }

            return null;
          }}
        >
          <Label className="text-gray-700 dark:text-gray-200">Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 cursor-pointer bg-emerald-600 rounded-md text-white hover:bg-emerald-600"
          >
            Submit
          </button>

          <button
            type="reset"
            className="flex-1 cursor-pointer bg-emerald-800 py-1 rounded-md text-white hover:bg-emerald-600"
          >
            Reset
          </button>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-2 border 
          border-gray-300 dark:border-gray-700 
          py-2 rounded-lg 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition text-gray-700 dark:text-white"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpPage;
