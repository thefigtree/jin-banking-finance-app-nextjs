import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Lee" };

  return (
    <section className="flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar">
      <div className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access Your Account"
          ></HeaderBox>

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          ></TotalBalanceBox>
        </header>
      </div>
    </section>
  );
};
export default Home;
