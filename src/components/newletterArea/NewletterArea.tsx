import Button from "../button";
import SearchEl from "../searchEl";

const NewletterArea = () => {
  return (
    <div className="w-screen bg-stronGray  flex flex-col p-6 gap-4 md:flex-row md:p-10 md:justify-center md:items-center -mb-4">
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
      <Button
        text="ISCRIVITI"
        width=""
        position=""
        textColor="text-first"
        background="bg-black"
        icon="hidden"
        border=""
        textWidth="text-[14px]"
        padding="p-4"
        fontWidth="font-bold"
      />
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
