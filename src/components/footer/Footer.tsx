import List from "../list";
import PaymentList from "../paymentList";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col p-4 gap-4 justify-center items-center">
      <div className="w-screen bg-second flex flex-col md:flex-row md:justify-between md:items-center p-6 md:p-14">
        <h2 className=" text-red text-[30px] font-bold ">LOGO</h2>

        <div className=" flex flex-col gap-4 md:flex-row">
          <List
            itemName={["Home", "Chi siamo", "Contatti", "Lavora con noi"]}
          />
          <List
            itemName={[
              "Condizioni di vendita",
              "Pagamenti",
              "Certificazioni",
              "Sitemap",
            ]}
          />
          <List itemName={["Privacy Policy", "Cookie Policy", "Credits"]} />
        </div>
      </div>

      <div className="w-screen flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between px-2 md:px-14">
        <PaymentList />

        <h3>
          ITA <p className="font-bold rotate-180 inline-block  "> {"^"}</p>
        </h3>
      </div>
      <hr className="bg-stronGray w-[99%] h-[2px] border-0" />
      <p className="text-[12px] text-center">
        ©2023 Logo - Via delle Albere 13, 36045 Vicenza P.IVA 00589040245 -
        Registro Imprese di Vicenza: n.00589040245 - Rea vi:139951 Capitale
        sociale: € 10.000.000i.v.{" "}
      </p>
    </div>
  );
};

export default Footer;
