import HiglightedButton from "./HiglightedButton";

const HowCard = ({ heading, title1, content1, btnText, imgLink }) => {
  return (
    <div
      className={`md:max-w-[400px] w-full mb-5 mx-5 rounded-lg  bg-[#ffffff20] overflow-hidden text-center`}
    >
      <img src={imgLink} className="hidden md:block" />
      <div className="p-5">
          <p className="text-2xl md:text-3xl font-semibold mb-1 md:mb-5">{heading}</p>
        <p className="mb-2 hidden md:block text-gray-300 text-sm">{title1}</p>
        <p className="mb-5 text-gray-300 text-sm">{content1}</p>
          <HiglightedButton btnTitle={btnText} btnWhite={false} btnLink="mailto:pallavibobde1@gmail.com"  />
      </div>
    </div>
  );
};

export default HowCard;
