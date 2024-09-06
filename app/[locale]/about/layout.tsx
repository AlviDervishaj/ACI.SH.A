export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto">
      {children}
    </div>
  );
}
