import { formatAmount } from "@/lib/utils";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]"></div>

      <div className="flex flex-col gap-6">
        <h2 className="text-18 font-semibold text-gray-900">
          내 계좌: {totalBanks}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="text-14 font-medium text-gray-600">총 자산</p>

          <p className="text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2">
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  );
};
export default TotalBalanceBox;
