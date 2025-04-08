import MainBanner from "../_components/MainHome/MainBanner";

export const metadata = {
  title: "RJugo",
  description: "youth information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
          <MainBanner />
          {children}
        </main>
      </body>
    </html>
  );
}
