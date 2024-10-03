import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "이동진님" };

  return (
    <section className="flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar">
      <div className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="환영합니다"
            user={loggedIn?.firstName || "Guest"}
            subtext="내 계좌 보기"
          ></HeaderBox>

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={28991234}
          ></TotalBalanceBox>
        </header>
      </div>
    </section>
  );
};
export default Home;
