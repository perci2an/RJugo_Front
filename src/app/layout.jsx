import "./globals.css";

export const metadata = {
  title: "알받기",
  description: "youth information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
