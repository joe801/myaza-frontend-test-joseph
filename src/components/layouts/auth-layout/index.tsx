import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className=" min-h-screen grid grid-cols-2">
      <section>{children}</section>
      <aside className="p-[64px] bg-primary-dark relative overflow-hidden">
        <div className="space-y-3 max-w-[602px] text-white font-karla">
          <Image
            src="/sign-in/icons/rating.svg"
            alt="rating"
            width={136}
            height={24}
          />
          <h2 className="text-[36px]/[44px] font-bold">
            “I’ve been using Uifry for over a year, and it’s helped simplify all
            my payments.”
          </h2>
          <div className="space-y-1 text-secondary">
            <p className="text-[20px]/[28px] font-bold">Ali Riaz</p>
            <p className="text-[16px]/[24px] font-medium">Singapore</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-[1.75rem] h-3 rounded-[2.5rem] bg-secondary" />
            {[0,1,2].map((item) => (
              <div className="size-3 rounded-[2.5rem] bg-primary" key={item}>

              </div>
            ))}
          </div>
        </div>
        <Image
          className="absolute top-[440px] left-[160px]"
          src="/sign-in/illustrations/auth.png"
          alt="auth"
          width={919}
          height={584}
        />
      </aside>
    </main>
  );
};
