import Header from "@/components/header";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance";

export default function Home() {
  const loggedIn = {
    firstName: "이",
    lastName: "동진님",
    email: "ldj8431@naver.com",
  };

  return (
    <section className="flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar">
      <div className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar">
        <header className="flex flex-col justify-between gap-8">
          <Header
            type="greeting"
            title="환영합니다"
            user={loggedIn?.firstName || "Guest"}
            subtext="내 계좌 보기"
          ></Header>

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={28991234}
          ></TotalBalanceBox>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]}></RightSidebar>
    </section>
  );
}
