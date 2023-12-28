import Header from "../header";
import Footer from "../footer";
import { LayoutProps } from "@/mocks/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="py-6"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
