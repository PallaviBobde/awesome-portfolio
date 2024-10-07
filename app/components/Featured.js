import Tag from "./Tag";

const Featured = () => {
  return (
    <div className=" py-20 flex flex-col items-center">
      <Tag subject="Worked with" />

      <p className="text-center mb-10 mx-10 text-sm md:text-xl text-gray-300">
        I’ve had the privilege to work with businesses and organizations across
        various industries. <br /> Here are some of the brands that I have
        worked with:
      </p>
      <div className="flex flex-wrap items-center bg-[#ffffff10] rounded-lg w-full justify-center">
        <img
          src="https://www.veberszone.com/_next/image?url=%2Fimages%2Fveberszone-logo-white.png&w=256&q=75"
          className="h-[100px] md:h-[150px] rounded mx-5 my-[-10px]"
        />
        <img
          src="https://doctorsbfhl.azureedge.net/svgs/branding/Bajaj-logo.svg"
          className="h-[50px] md:h-[70px] rounded mx-5"
        />

        <img
          src="https://qhseintl.com/_next/static/media/LOGO.4db8cc07.svg"
          className="h-[80px] md:h-[100px] rounded mx-5"
        />
        <img
          src="https://gray-to-green.com/_next/image?url=%2Flogo%2Fmain-logo.png&w=640&q=75"
          className="h-[40px] md:h-[70px] rounded mx-5"
        />
        <div className="text-2xl md:text-3xl font-bold mx-5">
          <span className="text-[#23306E]">Med</span>Care Group
        </div>
        <img
          src="https://detasoft.vercel.app/_next/image?url=%2Fimages%2Fdetasoft-logo.png&w=256&q=75"
          className="h-[40px] md:h-[80px] rounded mx-5"
        />
      </div>
    </div>
  );
};

export default Featured;
