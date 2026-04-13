import "./globals.css";

export const metadata = {
  title: "Simple Proposal",
  description: "A simple proposal page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
