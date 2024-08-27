import { useTranslations } from "next-intl";
import { footer } from "../primitives";
import Link from "next/link";

export function Footer() {
  const tf = useTranslations("Footer");
  const tn = useTranslations("Navigation");
  return (
    <footer className={footer({ color: "orange" })}>
      <div>
        <ul className={"w-fit h-fit p-2 flex flex-col items-start gap-1 lg:gap-4 content-center justify-evenly "}>
          <li
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider"
          >
            <h4>ACI SH.A</h4>
          </li>
          <li className="text-md md:text-lg lg:text-xl border-b-2 hover:border-b-slate-200 border-b-transparent transition-colors duration-300 ease-in-out">
            <Link href={"/"}>
              {tn("home")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl border-b-2 hover:border-b-slate-200 border-b-transparent transition-colors duration-300 ease-in-out">
            <Link href={"/"}>
              {tn("contact")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl border-b-2 hover:border-b-slate-200 border-b-transparent transition-colors duration-300 ease-in-out">
            <Link href={"/"}>
              {tn("about_us")}
            </Link>
          </li>
          <li className="text-md md:text-lg lg:text-xl border-b-2 hover:border-b-slate-200 border-b-transparent transition-colors duration-300 ease-in-out">
            <Link href={"/"}>
              {tn("lubricants")}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={"w-fit h-fit p-2 flex flex-col items-start gap-1 lg:gap-4 content-center justify-evenly"}>
          <li
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider"
          >
            <h4>{tf("help")}</h4>
          </li>
          <li className="text-md md:text-lg lg:text-xl border-b-2 hover:border-b-slate-200 border-b-transparent transition-colors duration-300 ease-in-out">
            <Link href={"/"}>
              {tf("which_is_better")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
