import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Navbar/>
            <main className="min-h-screen pt-24">
                {children}
            </main>
        <Footer />
      </>
  );
}
