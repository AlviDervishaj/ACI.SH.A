export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="py-6 h-full w-full mx-auto">{children}</main>;
}
