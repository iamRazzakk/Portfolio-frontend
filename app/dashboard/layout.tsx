export const metadata = {
  title: "Portfolio | Abdur Razzak",
  description: "MERN Stack Developer Portfolio",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
