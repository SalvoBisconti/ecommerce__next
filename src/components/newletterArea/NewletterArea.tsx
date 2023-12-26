import SearchEl from "../searchEl";

const NewletterArea = () => {
  return (
    <div className="w-screen bg-[#cacaca]  flex flex-col p-6 gap-4 md:flex-row md:p-10 md:justify-center md:items-center">
      <h2 className="font-bold text-[30px] w-[200px]">
        Iscriviti alla Newsletters
      </h2>
      <SearchEl
        display="block"
        icon="hidden"
        text="Indirizzo E-mail"
        width="md:w-[20vw]"
        reverseText=""
      />
      <button className=" text-center font-bold bg-black text-first p-4 md:w-[20vw]">
        ISCRIVITI
      </button>
      <div className="flex gap-2 md:w-[25%]  ">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          className=" w-6 md:w-4 mt-[-16px]"
        />
        <p className="text-[13px]">
          Letta la Privacy Policy, accetto di ricevere la newsletter ai sensi
          del Regolamento UE 2016/679 (GDPR)
        </p>
      </div>
    </div>
  );
};

export default NewletterArea;
