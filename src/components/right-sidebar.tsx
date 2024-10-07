import Image from "next/image";
import Link from "next/link";

export default function RightSidebar({
  user,
  transactions,
  banks,
}: RightSidebarProps) {
  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important">
      <section className="flex flex-col pb-8">
        <div className="profile-banner"></div>
        <div className="profile">
          <div className="profile-img">
            <span className="text 5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>

            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">내 은행 보기</h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="add"
            ></Image>

            <h2 className="text-14 font-semibold text-gray-600">
              내 은행 추가하기
            </h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-normal gap-5">
            <div className="relative z-10">BANK CARD 1</div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                BANK CARD 2
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
}
