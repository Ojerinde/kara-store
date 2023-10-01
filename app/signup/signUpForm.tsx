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

const SignUpForm = () => {
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
    fullName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("First name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must be minimum of 8 characters including a number, a capital letter and a symbol"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), ""], "Passwords does not match"),
  });

  const signInHandler = async (formValues: any, actions: any) => {
    const { fullName, lastName, email, password, confirmPassword } = formValues;
    const reqObj = {
      fullName,
      email,
      password,
      confirmPassword,
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
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              {...formik.getFieldProps("fullName")}
              helper={
                formik.touched.fullName && formik.errors.fullName
                  ? formik.errors.fullName
                  : null
              }
              status={
                formik.touched.fullName && formik.errors.fullName
                  ? "error"
                  : null
              }
            />

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
            <Input
              label="Confirm Password"
              placeholder="Enter your password again"
              type={showConfirmPassword ? "text" : "password"}
              icon={
                showConfirmPassword ? (
                  <FaEyeSlash
                    className="text-[1.5rem] text-custom-black-1"
                    onClick={() => {
                      setShowConfirmPassword((prev: boolean) => !prev);
                    }}
                  />
                ) : (
                  <FaEye
                    className="text-[1.5rem] text-custom-black-1"
                    onClick={() => {
                      setShowConfirmPassword((prev: boolean) => !prev);
                    }}
                  />
                )
              }
              iconPosition="right"
              {...formik.getFieldProps("confirmPassword")}
              helper={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : null
              }
              status={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "error"
                  : formik.touched.confirmPassword &&
                    !formik.errors.confirmPassword
                  ? "success"
                  : null
              }
            />

            {formik.isSubmitting && <div>Loading</div>}
            {showError.hasError && (
              <InlineFeedback status="error" message={showError.message} />
            )}
            <AuthButton background="red" type="submit" onClick={() => {}}>
              {formik.isSubmitting ? "Creating..." : "Create Account"}
            </AuthButton>

            <p className="my-1 font-medium text-[1.5rem] text-[#4f4f4f] ">
              Already have an account?{" "}
              <Link href="/login" className="text-custom-orange">
                Login
              </Link>{" "}
            </p>
            <OtherAuthMethod />
            <p className="mt-1 text-[1.2rem] text-center text-black">
              By creating an account you agree to{" "}
              <Link href="/" className="text-custom-orange">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-custom-orange">
                Privacy Policy
              </Link>{" "}
            </p>
          </form>
        )}
      </Formik>
    </>
  );
};
export default SignUpForm;
