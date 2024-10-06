import { Link } from "@/config/routing";

export function TryAgainLater() {
  return (
    <section className="w-full h-full p-2 grid place-items-center gap-3">
      <h2 className="text-4xl">No items are available at this time. </h2>
      <p className="text-3xl">Please try again later. </p>
      <small className="text-lg">
        If you think this is an bug / issue then contact{" "}
        <Link className="text-sky-500" href="mailto://alvidervishaj9@gmail.com">
          Support Team
        </Link>
      </small>
    </section>
  );
}
