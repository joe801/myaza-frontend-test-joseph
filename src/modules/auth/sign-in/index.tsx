import { AuthLayout } from "@/components/layouts";
import Image from "next/image";
import SignInForm from "./components/sign-in-form";

const SignIn = () => {
  return (
    <div className="bg-primary h-full w-full pt-[148px] pl-[200px]">
      <div className="max-w-[424px] space-y-6">
        <div className="text-white text-center">
          <Image src="logoFull.svg" className="w-fit mx-auto" alt="logo" width={107} height={31} />
          <h4 className="mt-6 mb-3 text-[24px]/[28px] font-bold font-space-grotesk">Welcome back, Ali Riaz 🙇🏾‍♀️</h4>
          <p className="text-base/[1.5rem] tracking-[-4%] font-karla">Login to access your Uifry account</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignIn;
