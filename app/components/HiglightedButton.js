const HiglightedButton = ({ btnTitle, btnLink,btnWhite=false }) => {
    return (
        <a
        href={btnLink}
        download="Pallavi-Bobde-Resume.pdf"
        target="_blank"
        className={`text-center my-5 rounded-xl ${btnWhite?"bg-white text-[#004aad] hover:bg-[#004aad] hover:text-white border-[#004aad]":"bg-gradient-to-b from-[#5de0e6] to-[#004aad] hover:text-white border-white text-black"} text-sm  md:text-[16px] py-3 px-5 mb-5 font-bold uppercase  cursor-pointer`}
      >
        {btnTitle}
      </a>
    );
  };
  
  export default HiglightedButton;
  