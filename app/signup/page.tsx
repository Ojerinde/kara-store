import Image from "next/image";
import SignUpForm from "./signUpForm";

export default function SignUp() {
  return (
    <section className="flex justify-between items-center px-[8rem] py-[7rem] bg-custom-white-1">
      <div className="basis-[45%]">
        <figure className="w-[100%] h-[100vh] relative">
          <Image
            src={"/images/formImage.png"}
            alt="Form"
            fill
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
            className=""
          />
        </figure>
      </div>
      <div className="basis-[50%]">
        <h3 className="auth__form--header">Start Shopping Today!</h3>
        <SignUpForm></SignUpForm>
      </div>
    </section>
  );
}
