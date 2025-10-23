import "../styles/globals.css";

export const metadata = {
  title: "Sales Dashboard",
  description: "Dashboard showing sales charts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
