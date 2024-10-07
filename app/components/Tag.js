const Tag = ({ subject,heading=null }) => {
  return (
    <div>
      <p className="bg-gray-400 mx-auto w-fit py-1 px-5 rounded-lg text-black bg-gradient-to-l from-[#5de0e680] to-[#004aad80] uppercase text-xs">
        {subject}
      </p>
      {
        !!heading && <p className="text-center text-2xl md:text-5xl my-2 mx-2">{heading}</p>
      }
      
    </div>
  );
};

export default Tag;
