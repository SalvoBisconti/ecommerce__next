import List from "../list";

const Footer = () => {
  return (
    <div className="w-screen bg-second flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 className=" text-red text-[30px] font-bold ">LOGO</h2>

      <div className=" flex flex-col gap-4 md:flex-row">
        <List itemName={["Home", "Chi siamo", "Contatti", "Lavora con noi"]} />
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
  );
};

export default Footer;
