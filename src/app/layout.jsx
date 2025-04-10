import "./globals.css";

export const metadata = {
  title: "RJugo",
  description: "youth information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[1280px] mx-auto pt-[55px] pb-[50px] px-0">
        {children}
      </body>
    </html>
  );
}
