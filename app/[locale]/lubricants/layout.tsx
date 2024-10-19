export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="py-6">{children}</main>;
}
