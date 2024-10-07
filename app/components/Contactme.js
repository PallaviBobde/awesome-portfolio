import Tag from "./Tag";
import HiglightedButton from "./HiglightedButton";

const ContactMe = () => {

  return (
    <div className="bg-[#ffffff10] py-40 flex flex-col items-center">
      <Tag subject="Contact Me" heading="Let's Discuss Your Project" />

      <p className="text-center mb-10 mx-10 text-sm md:text-xl text-gray-300">
       Whether you need a website that stands out or an app that delivers real results,<br/> I’m here to help. Let’s start creating together!
      </p>
      <HiglightedButton btnTitle="Let's Get Started" btnLink="mailto:pallavibobde1@gmail.com" />
    </div>
  );
};

export default ContactMe;
