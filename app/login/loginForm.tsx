"use client";

import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Input from "@/components/UI/Input/Input";
import InlineFeedback from "@/components/UI/Input/InlineFeedback";
import AuthButton from "@/components/AuthComponents/AuthButton/AuthButton";
import OtherAuthMethod from "@/components/AuthComponents/OtherAuthMethod/OtherAuthMethod";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [showError, setShowError] = useState<{
    hasError: boolean;
    message: string;
  }>({ hasError: false, message: "" });

  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must be minimum of 8 characters including a number, a capital letter and a symbol"
      ),
  });

  const signInHandler = async (formValues: any, actions: any) => {
    const { email, password } = formValues;
    const reqObj = {
      email,
      password,
    };
    try {
    } catch (error: any) {
    } finally {
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={signInHandler}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="w-[50%] mx-auto flex flex-col gap-4"
          >
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              {...formik.getFieldProps("email")}
              helper={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              status={
                formik.touched.email && formik.errors.email ? "error" : null
              }
            />
            <Input
              label="Password"
              placeholder="Create a password"
              type={showPassword ? "text" : "password"}
              icon={
                showPassword ? (
                  <FaEyeSlash
                    className="text-[1.5rem] text-custom-black-1"
                    onClick={() => {
                      setShowPassword((prev: boolean) => !prev);
                    }}
                  />
                ) : (
                  <FaEye
                    className="text-[1.5rem] text-custom-black-1"
                    onClick={() => {
                      setShowPassword((prev: boolean) => !prev);
                    }}
                  />
                )
              }
              iconPosition="right"
              {...formik.getFieldProps("password")}
              helper={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              status={
                formik.touched.password && formik.errors.password
                  ? "error"
                  : formik.touched.password && !formik.errors.password
                  ? "success"
                  : null
              }
            />
            <Link
              href="/auth/forgotPassword"
              className="text-custom-orange font-semibold text-[1.3rem] w-fit"
            >
              Forgot Password?
            </Link>
            {formik.isSubmitting && <div>Loading</div>}
            {showError.hasError && (
              <InlineFeedback status="error" message={showError.message} />
            )}
            <AuthButton background="red" type="submit" onClick={() => {}}>
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </AuthButton>

            <p className="my-1 font-medium text-[1.5rem] text-[#4f4f4f] ">
              Do not have an account?{" "}
              <Link href="/signup" className="text-custom-orange">
                Create
              </Link>{" "}
            </p>
            <OtherAuthMethod />
          </form>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
