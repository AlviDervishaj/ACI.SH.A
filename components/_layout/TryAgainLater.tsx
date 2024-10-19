import { Link } from "@/config/routing";

export function TryAgainLater() {
  return (
    <section className="w-full h-full p-2 my-2 grid place-items-center gap-3 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl">
        No items are available at this time.
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl">Please try again later.</p>
      <small className="text-base lg:text-lg">
        If you think this is a bug / issue then contact{" "}
        <Link
          className="text-sky-500"
          href="mailto:alvidervishaj9@gmail.com"
          target="_blank"
        >
          Support Team
        </Link>
      </small>
    </section>
  );
}
