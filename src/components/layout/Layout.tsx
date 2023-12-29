import Header from "../header";
import Footer from "../footer";
import { LayoutProps } from "@/mocks/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8 px-4"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
