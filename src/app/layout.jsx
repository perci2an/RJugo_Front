export const metadata = {
  title: "RJugo",
  description: "youth information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
