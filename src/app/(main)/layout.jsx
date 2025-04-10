import MainBanner from "../_components/MainBanner";

export const metadata = {
  title: "RJugo",
  description: "youth information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
