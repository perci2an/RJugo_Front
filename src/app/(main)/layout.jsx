import Header from "../_components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#e1e1e1]">
          <div className="flex flex-col items-center w-[1280px] mx-auto py-5 px-16">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
