import Navbar from "../navbar";
import Footer from "../footer";
import { LayoutProps } from "@/mocks/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="py-6"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
