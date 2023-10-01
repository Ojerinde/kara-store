import Image from "next/image";
import LoginForm from "./loginForm";

export default function SignUp() {
  return (
    <section className="flex justify-between px-[8rem] py-[7rem] bg-custom-white-1">
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
        <h3 className="auth__form--header">Welcome!</h3>
        <LoginForm></LoginForm>
      </div>
    </section>
  );
}
