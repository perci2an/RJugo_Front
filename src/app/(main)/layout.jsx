import Header from "../_components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center w-[1280px] mx-auto py-5 px-16">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
