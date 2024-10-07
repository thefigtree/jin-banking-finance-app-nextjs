import MobileNavigation from "@/components/mobile-navigation";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Lee", lastName: "Dong Jin" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}></Sidebar>

      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          ></Image>

          <div>
            <MobileNavigation user={loggedIn}></MobileNavigation>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
