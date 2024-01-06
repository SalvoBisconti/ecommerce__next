import Header from "../header";
import Footer from "../footer";
import { LayoutProps } from "@/mocks/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <main className="flex flex-col gap-8"> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
