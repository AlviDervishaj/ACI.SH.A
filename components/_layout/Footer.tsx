import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useTranslations } from "next-intl";
import { footer } from "../primitives";
import Link from "next/link";

export function Footer() {
  const tf = useTranslations("Footer");
  const tn = useTranslations("Navigation");
  return (
    <footer className={footer({ color: "orange" })}>
      <div className={"order-1 flex flex-row items-center content-center justify-center"}>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            isClearable
            size={"lg"}
            labelPlacement="inside"
            className={"w-full h-full"}
            type={"email"}
            label={"Email"}
          />
          <Button size={"lg"} className={"flex-grow-1"}>
            {tf("subscribe")}
          </Button>
        </div>
      </div>
      <div className={"order-2"}>
        <ul className={"w-fit h-fit p-2 flex flex-col items-start gap-4 content-center justify-evenly"}>
          <li
            className="text-lg md:text-2xl lg:text-3xl font-bold tracking-wider"
          >
            <h4>{tf("help")}</h4>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("home")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("contact")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("about_us")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("lubricants")}
            </Link>
          </li>
        </ul>
      </div>
      <div className={"order-3"}>
        <ul className={"w-fit h-fit p-2 flex flex-col items-start gap-4 content-center justify-evenly"}>
          <li
            className="text-lg md:text-2xl lg:text-3xl font-bold tracking-wider"
          >
            <h4>ACI SH.A</h4>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("home")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("contact")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("about_us")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl">
            <Link href={"/"}>
              {tn("lubricants")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
