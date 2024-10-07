import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CreditCard({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px]"
      >
        <div className="bank-card-content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>

            <p className="text-white">{formatAmount(account.currentBalance)}</p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">** / **</h2>
            </div>

            <p className="text-14  font-semibold tracking-[1.1px] text-white">
              **** **** ****
              <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient bg-cover bg-center bg-no-repeat py-5 pr-5">
          <Image
            src="/icons/paypass.svg"
            width={20}
            height={24}
            alt="pay"
          ></Image>
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          ></Image>
        </div>

        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        ></Image>
      </Link>
    </div>
  );
}
