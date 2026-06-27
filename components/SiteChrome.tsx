import { Header } from "./Header";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
