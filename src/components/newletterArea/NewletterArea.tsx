import SearchEl from "../searchEl";

const NewletterArea = () => {
  return (
    <div className="w-screen bg-[#cacaca] flex flex-col p-6 gap-4 ">
      <h2 className="font-bold text-[32px] w-[200px]">
        Iscriviti alla Newsletters
      </h2>
      <SearchEl display="block" icon="hidden" text="Indirizzo E-mail" />
      <button className=" text-center bg-black text-first p-4">
        ISCRIVITI
      </button>
      <div className="flex gap-2 ">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          className="text-[#00aae4] w-10   "
        />
        <p>
          Letta la Privacy Policy, accetto di ricevere la newsletter ai sensi
          del Regolamento UE 2016/679 (GDPR)
        </p>
      </div>
    </div>
  );
};

export default NewletterArea;
