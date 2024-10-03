import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Lee" };

  return (
    <section className="home flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar">
      <div className="home-content flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar">
        <header className="home-header flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access Your Account"
          ></HeaderBox>
        </header>
      </div>
    </section>
  );
};
export default Home;
