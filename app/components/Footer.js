import ContactButton from "./ContactButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export function Footer() {
  return (
    <div class="bg-blue-800  dark:bg-blue-800   py-2 px-4 sm:px-6 lg:px-8 text-center text-[14px]">
      Copyright - pallavibobde1@gmail.com
      {/* sticky icons */}
      <div className="space-y-3 fixed bottom-0 right-0 h-[20] bg-[#000] bg-black z-30 px-1 py-10">
        <ContactButton
          link={"https://github.com/PallaviBobde"}
          Icon={FaLinkedinIn}
        />
        <ContactButton
          link={"https://www.linkedin.com/in/pallavi-bobde-35ba721b2"}
          Icon={FaGithub}
        />
        <ContactButton
          link={"mailto:pallavibobde1@gmail.com"}
          Icon={IoIosMail}
        />
      </div>
 </div>
  );
}
